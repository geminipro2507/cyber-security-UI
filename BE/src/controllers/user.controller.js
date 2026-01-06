const db = require("../config/db");

const getUsers = async (req, res) => {
    try {
        const [rows] = await db.execute("SELECT id, email, created_at FROM users");
        res.json({ users: rows });
    } catch (error) {
        res.status(500).json({ message: "Lỗi server" });
    }
};

const createUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Thiếu email hoặc password" });
    }

    const bcrypt = require("bcrypt");
    const hash = await bcrypt.hash(password, 10);

    try {
        await db.execute("INSERT INTO users (email, password) VALUES (?, ?)", [email, hash]);
        res.json({ message: "Người dùng đã được tạo" });
    } catch (error) {
        res.status(400).json({ message: "Email đã tồn tại" });
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { email, password } = req.body;

    try {
        let query = "UPDATE users SET email = ? WHERE id = ?";
        let params = [email, id];

        if (password) {
            const bcrypt = require("bcrypt");
            const hash = await bcrypt.hash(password, 10);
            query = "UPDATE users SET email = ?, password = ? WHERE id = ?";
            params = [email, hash, id];
        }

        const [result] = await db.execute(query, params);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Người dùng không tồn tại" });
        }
        res.json({ message: "Người dùng đã được cập nhật" });
    } catch (error) {
        res.status(500).json({ message: "Lỗi server" });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await db.execute("DELETE FROM users WHERE id = ?", [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Người dùng không tồn tại" });
        }
        res.json({ message: "Người dùng đã được xóa" });
    } catch (error) {
        res.status(500).json({ message: "Lỗi server" });
    }
};

module.exports = { getUsers, createUser, updateUser, deleteUser };