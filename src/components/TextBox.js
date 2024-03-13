import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';

const TextBox = ({ question, submitted }) => {
    const [userAnswer, setUserAnswer] = useState('');

    const answersCorrect = () => {
        const sanitizedUserAnswer = userAnswer.replace(/,/, '').trim();
        return sanitizedUserAnswer.toLowerCase() === question.answer.toLowerCase()
    };

    const handleChange = (e) => {
        setUserAnswer(e.target.value);
    };

    return (
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title>{question.question}</Card.Title>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                value={userAnswer}
                                onChange={handleChange}
                                placeholder={question.placeholder}
                                disabled={submitted}
                            />
                        </Form.Group>
                    </Form>
                </Card.Body>
                {submitted && (
                    <Alert variant={answersCorrect() ? 'success' : 'danger'}>
                        {answersCorrect() ? 'Correct answer!' : 'Incorrect answer, try again.'}
                        <div>{question.answer}</div>
                    </Alert>
                )}
            </Card>
    );
};

export default TextBox;
