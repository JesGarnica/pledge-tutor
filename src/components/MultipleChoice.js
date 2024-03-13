import {React, useState} from 'react';
import { Container, Card, Form, Button, InputGroup, Alert, ProgressBar } from 'react-bootstrap';

const MultipleChoice = ( {question, submitClicked} ) => {
    const [selectedOption, setSelectedOption] = useState('');

    const answerCorrect = () => {
        return selectedOption.toLowerCase() === question.correct.toLowerCase();
    }

    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>{question.question}</Card.Title>
                <Form>
                    {question.options.map((option, index) => (
                        <Form.Check
                            key={index}
                            type="radio"
                            id={`radio-${index}`}
                            label={option}
                            value={option}
                            name="multipleChoice"
                            checked={selectedOption === option}
                            onChange={(event) => setSelectedOption(event.target.value)}
                            disabled={submitClicked}
                        />
                    ))}
                </Form>
            </Card.Body>
            {submitClicked && (
                <Alert variant={answerCorrect() ? 'success' : 'danger'}>
                    {answerCorrect() ? 'Correct!' : 'Incorrect!'}
                    <div>Correct answer: {question.correct}</div>
                </Alert>
            )}
        </Card>
    );
};

export default MultipleChoice;
