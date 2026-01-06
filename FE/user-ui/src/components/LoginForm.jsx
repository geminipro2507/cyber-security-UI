import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import JSEncrypt from "jsencrypt";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [googleHover, setGoogleHover] = useState(false);
    const encodeKey = `-----BEGIN RSA PUBLIC KEY-----
MIIBCgKCAQEAwa6tLPjIdFv8wsj/vKiK5CaKB4uDLUdB2KwPr9ofgPCdfUnTL757
1Fzps0q6G/cuU+I8nhcMcmIN/rGRksSTDlto3AB18/lI/650rd7W7BzBmAh6lumh
iFP/ANve+bQeBPxHg8q+Fba1yvNyukOIg/WbJJrkAUwRzHS0kO2UcmGVG0/7swjw
aNzZsNWixxy67eGsF7xsmw2+37cGASc2IufuSONGgPIS+ayJZxdO8h3TlovI+j/H
8+ZfrTcRNO8ApCqR2mNpSfMMPTRrHgHbKJiWh6byXHjn5/dJoBSCjYDOuXTXjYU4
pG/IT6lWOH+r/bxACXi1zKdt5r/bnUUhvwIDAQAB
-----END RSA PUBLIC KEY-----`;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const encrypt = new JSEncrypt();
        encrypt.setPublicKey(encodeKey);

        const encryptedEmail = encrypt.encrypt(email);
        const encryptedPassword = encrypt.encrypt(password);

        if (!encryptedEmail || !encryptedPassword) {
            console.error("Encryption failed. Check public key format.");
            return;
        }

        console.log("Encrypted values:", { email: encryptedEmail, password: encryptedPassword });
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
