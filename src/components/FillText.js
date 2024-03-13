import {React, useState} from 'react';
import { Container, Card, Form, Button, InputGroup, Alert } from 'react-bootstrap';

const FillText = ({ question, submitClicked }) => {
    const [answers, setAnswers] = useState(Array(question.answers.length).fill(''));

    const handleInput = (index, value) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index] = value; // Trim whitespace
        setAnswers(updatedAnswers);
    };

    const answersCorrect = () => {
        const normalizedAnswers = answers.map(answer => answer.toLowerCase()); // Normalize input for case-insensitive comparison
        const normalizedCorrect = question.answers.map(answer => answer.toLowerCase());

        const correctFillInBlanks = normalizedAnswers.filter(answer => normalizedCorrect.includes(answer)).length;
        return correctFillInBlanks === question.answers.length
    }

    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>{question.question}</Card.Title>
                {answers.map((answer, index) => (
                    <InputGroup className="mb-3" key={`answer-${index}`}>
                        <InputGroup.Text>{index + 1}</InputGroup.Text>
                        <Form.Control 
                            type="text"
                            value={answer}
                            onChange={(e) => handleInput(index, e.target.value)}
                            placeholder={question.placeholder}
                            disabled={submitClicked}
                        />
                    </InputGroup>
                ))}
            </Card.Body>
            {submitClicked && (
                <Alert fluid variant={answersCorrect() ? 'success' : 'danger'}>
                    {answersCorrect() ? 'All correct!' : 'One or more are incorrect.'}
                    <div>Correct answers: {question.answers.join(', ')}</div>
                </Alert>
            )}
        </Card>
    );
};

export default FillText;
