import React, { useState } from "react";
import { Container, Form, Button, Card, Alert, Row, Col } from "react-bootstrap";
import { JSEncrypt } from "jsencrypt";

const publicKey = `-----BEGIN RSA PUBLIC KEY-----
MIIBCgKCAQEAwa6tLPjIdFv8wsj/vKiK5CaKB4uDLUdB2KwPr9ofgPCdfUnTL757
1Fzps0q6G/cuU+I8nhcMcmIN/rGRksSTDlto3AB18/lI/650rd7W7BzBmAh6lumh
iFP/ANve+bQeBPxHg8q+Fba1yvNyukOIg/WbJJrkAUwRzHS0kO2UcmGVG0/7swjw
aNzZsNWixxy67eGsF7xsmw2+37cGASc2IufuSONGgPIS+ayJZxdO8h3TlovI+j/H
8+ZfrTcRNO8ApCqR2mNpSfMMPTRrHgHbKJiWh6byXHjn5/dJoBSCjYDOuXTXjYU4
pG/IT6lWOH+r/bxACXi1zKdt5r/bnUUhvwIDAQAB
-----END RSA PUBLIC KEY-----`;

function EncodeForm() {
    const [plainText, setPlainText] = useState("");
    const [encodedText, setEncodedText] = useState("");
    const [error, setError] = useState("");

    const handleEncode = () => {
        const encrypt = new JSEncrypt();
        encrypt.setPublicKey(publicKey);

        const encrypted = encrypt.encrypt(plainText);
        if (encrypted) {
            const blob = new Blob([encrypted], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'encrypted_data.txt';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            setEncodedText(encrypted);
            setError("");
        } else {
            setError("Mã hóa thất bại! Vui lòng kiểm tra lại dữ liệu.");
            setEncodedText("");
        }
    };

    const handleCopy = () => {
        if (!encodedText) {
            setError("Chưa có dữ liệu để copy!");
            return;
        }
        navigator.clipboard.writeText(encodedText);
        setError("");
        alert("Đã sao chép vào clipboard!");
    };

    return (
        <Container
            className="d-flex justify-content-center align-items-center vh-100"
            style={{ maxWidth: 600 }}
        >
            <Card className="p-4 shadow w-100">
                <Card.Body>
                    <h3 className="mb-4 text-center">RSA Encode Form</h3>

                    <Form.Group className="mb-3">
                        <Form.Label>Dữ liệu cần mã hóa</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            placeholder="Nhập dữ liệu cần mã hóa vào đây"
                            value={plainText}
                            onChange={(e) => setPlainText(e.target.value)}
                        />
                    </Form.Group>

                    <Row className="mb-3">
                        <Col>
                            <Button variant="primary" onClick={handleEncode} className="w-100">
                                Encode
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="secondary" onClick={handleCopy} className="w-100">
                                Copy kết quả
                            </Button>
                        </Col>
                    </Row>

                    {error && <Alert variant="danger">{error}</Alert>}

                    {encodedText && (
                        <>
                            <h5>Kết quả mã hóa:</h5>
                            <Card.Text
                                style={{
                                    backgroundColor: "#f8f9fa",
                                    padding: "10px",
                                    borderRadius: "5px",
                                    whiteSpace: "pre-wrap",
                                    wordBreak: "break-word",
                                }}
                            >
                                {encodedText}
                            </Card.Text>
                        </>
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
}

export default EncodeForm;
