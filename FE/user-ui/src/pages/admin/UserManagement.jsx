import { useState, useEffect } from "react";
import { Container, Row, Col, Table, Button, Modal, Form } from "react-bootstrap";
import Swal from 'sweetalert2';

function UserManagement() {
    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', role: '' });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/users`);
            if (response.ok) {
                const data = await response.json();
                console.log('API response:', data);
                const usersArray = Array.isArray(data) ? data : data.data || data.users || data.result || [];
                setUsers(usersArray);
            } else {
                Swal.fire('Error', 'Failed to fetch users', 'error');
            }
        } catch (error) {
            Swal.fire('Error', 'Error fetching users: ' + error.message, 'error');
        }
    };

    const handleEdit = (user) => {
        setEditingUser(user);
        setFormData({ name: user.name, email: user.email, role: user.role });
        setShowModal(true);
    };

    const handleDelete = async (userId) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this user!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        });

        if (result.isConfirmed) {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/users/${userId}`, {
                    method: 'DELETE',
                });
                if (response.ok) {
                    Swal.fire('Deleted!', 'User has been deleted.', 'success');
                    fetchUsers();
                } else {
                    Swal.fire('Error', 'Failed to delete user', 'error');
                }
            } catch (error) {
                Swal.fire('Error', 'Error deleting user: ' + error.message, 'error');
            }
        }
    };

    const handleSave = async () => {
        try {
            const method = editingUser ? 'PUT' : 'POST';
            const url = editingUser ? `${process.env.REACT_APP_API_BASE_URL}/users/${editingUser.id}` : `${process.env.REACT_APP_API_BASE_URL}/admin/users`;
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                Swal.fire('Success', editingUser ? 'User updated successfully!' : 'User added successfully!', 'success');
                setShowModal(false);
                setEditingUser(null);
                setFormData({ name: '', email: '', role: '' });
                fetchUsers();
            } else {
                Swal.fire('Error', 'Failed to save user', 'error');
            }
        } catch (error) {
            Swal.fire('Error', 'Error saving user: ' + error.message, 'error');
        }
    };

    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <h2>User Management</h2>
                    <Button variant="primary" onClick={() => setShowModal(true)}>Add User</Button>
                    <Table striped bordered hover className="mt-3">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <Button variant="warning" size="sm" onClick={() => handleEdit(user)}>Edit</Button>{' '}
                                        <Button variant="danger" size="sm" onClick={() => handleDelete(user.id)}>Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{editingUser ? 'Edit User' : 'Add User'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Role</Form.Label>
                            <Form.Control
                                type="text"
                                value={formData.role}
                                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                    <Button variant="primary" onClick={handleSave}>Save</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default UserManagement;