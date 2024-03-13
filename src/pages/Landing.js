import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Landing = () => {
    return (
        <Container fluid>
            <h2 className="text-center mb-5">A simpler way to teach a Knight.</h2>

            <Row xs={2} md={3} className="g-4">
                <Col>
                    <Card border="danger" style={{ height: '12rem' }}>
                        <Card.Body>
                            <Card.Title>Modules</Card.Title>
                            <Card.Text>
                                Unlock and learn from weekly modules using interactive quizzes.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card border="info" style={{ height: '12rem' }}>
                        <Card.Body>
                            <Card.Title>Voice Recognition </Card.Title>
                            <Card.Text>
                                Practice outloud important Knight knowledge such as Greek Alphabet, the names of the founding fathers,
                                the purpose, and much more with the help of voice recognition AI.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card border="light" style={{ height: '12rem' }}>
                        <Card.Body>
                            <Card.Title>AI Powered Grading</Card.Title>
                            <Card.Text>
                                Quickly receive feedback on your voice or text inputted answered graded automatically with ChatGPT!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    );
};

export default Landing;
