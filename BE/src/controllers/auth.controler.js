const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "default_secret";

const register = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({ message: "Thiếu dữ liệu" });
    }

    const hash = await bcrypt.hash(password, 10);

    try {
        await db.execute(
            "INSERT INTO users (email, password) VALUES (?, ?)",
            [email, hash]
        );
        res.json({ message: "Đăng ký thành công" });
    } catch {
        res.json({ message: "Email đã tồn tại" });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    const [rows] = await db.execute(
        "SELECT * FROM users WHERE email = ?",
        [email]
    );

    if (rows.length === 0) {
        return res.json({ message: "Sai email hoặc mật khẩu" });
    }

    const user = rows[0];
    const ok = await bcrypt.compare(password, user.password);

    if (!ok) {
        return res.json({ message: "Sai email hoặc mật khẩu" });
    }

    const token = jwt.sign(
        { id: user.id, email: user.email },
        JWT_SECRET,
        { expiresIn: "1h" }
    );

    res.json({ message: "Đăng nhập thành công", token });
};

module.exports = { register, login };
