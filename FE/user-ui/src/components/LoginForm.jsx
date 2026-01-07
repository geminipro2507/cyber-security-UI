import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [googleHover, setGoogleHover] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.message && data.message.includes('Sai email hoặc mật khẩu')) {
                    Swal.fire('Error', data.message, 'error');
                } else {
                    Swal.fire('Success', data.message || 'Login successful!', 'success');
                    // navigate('/');
                }
            } else {
                const errorData = await response.json().catch(() => ({}));
                Swal.fire('Error', errorData.message || 'Login failed: ' + response.statusText, 'error');
            }
        } catch (error) {
            Swal.fire('Error', 'Error during login: ' + error.message, 'error');
        }
    };


    return (
        <Container className="d-flex align-items-center justify-content-center vh-100">
            <Row className="w-100">
                <Col md={{ span: 4, offset: 4 }}>
                    <Card className="p-4 shadow">
                        <Card.Body>
                            <h3 className="text-center mb-4">Welcome back</h3>

                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="w-100">
                                    Login
                                </Button>
                            </Form>

                            <hr />

                            <div className="text-center">
                                <p>Don't have an account? <a href="#" onClick={() => navigate('/signup')}>Sign up</a></p>
                            </div>

                            <Button variant="primary" className="w-100 mb-2">
                                <i className="fab fa-facebook"></i> Login with Facebook
                            </Button>

                            <Button variant="outline-primary" className="w-100 shadow" style={{ backgroundColor: googleHover ? '#f8f9fa' : 'white', borderColor: '#4285F4', color: '#4285F4' }} onMouseEnter={() => setGoogleHover(true)} onMouseLeave={() => setGoogleHover(false)}>
                                <i className="fab fa-google"></i> Login with Google
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginForm;
