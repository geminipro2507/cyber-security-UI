import React, { useState } from "react";
import { Container, Form, Button, Card, Alert, Row, Col } from "react-bootstrap";
import { JSEncrypt } from "jsencrypt";
import { privateKey } from "../config";

function DecodeForm() {
    const [encryptedText, setEncryptedText] = useState("");
    const [decodedText, setDecodedText] = useState("");
    const [error, setError] = useState("");

    const handleDecode = () => {
        const decrypt = new JSEncrypt();
        decrypt.setPrivateKey(privateKey);

        const decrypted = decrypt.decrypt(encryptedText);
        console.log(decrypted)
        if (decrypted) {
            setDecodedText(decrypted);
            setError("");
        } else {
            setError("Giải mã thất bại! Vui lòng kiểm tra lại dữ liệu.");
            setDecodedText("");
        }
    };

    const handleCopy = () => {
        if (!decodedText) {
            setError("Chưa có dữ liệu để copy!");
            return;
        }
        navigator.clipboard.writeText(decodedText);
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
                    <h3 className="mb-4 text-center">RSA Decode Form</h3>

                    <Form.Group className="mb-3">
                        <Form.Label>Dữ liệu đã mã hóa</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            placeholder="Dán dữ liệu đã mã hóa vào đây"
                            value={encryptedText}
                            onChange={(e) => setEncryptedText(e.target.value)}
                        />
                    </Form.Group>

                    <Row className="mb-3">
                        <Col>
                            <Button variant="primary" onClick={handleDecode} className="w-100">
                                Decode
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="secondary" onClick={handleCopy} className="w-100">
                                Copy kết quả
                            </Button>
                        </Col>
                    </Row>

                    {error && <Alert variant="danger">{error}</Alert>}

                    {decodedText && (
                        <>
                            <h5>Kết quả giải mã:</h5>
                            <Card.Text
                                style={{
                                    backgroundColor: "#f8f9fa",
                                    padding: "10px",
                                    borderRadius: "5px",
                                    whiteSpace: "pre-wrap",
                                    wordBreak: "break-word",
                                }}
                            >
                                {decodedText}
                            </Card.Text>
                        </>
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
}

export default DecodeForm;
