import React, { useState } from 'react';
import { Container, Card, Form, Button, InputGroup, Alert, ProgressBar } from 'react-bootstrap';

import MultipleChoice from './MultipleChoice';
import FillText from './FillText';
import TextBox from './TextBox';

const Quiz = ( { questions } ) => {
    const [submitClicked, setSubmitClicked] = useState(false);

    const handleSubmit = () => {
        setSubmitClicked(true);
    };

    return (
        <Container fluid>
            <h2>Practice Quiz</h2>
            {
                questions.multipleChoice.map(question => 
                    <MultipleChoice question={question} submitClicked={submitClicked}/>
                )
            }
            {
                questions.fill.map(question => 
                    <FillText question={question} submitClicked={submitClicked}/> 
                )
            }
            {
                questions.textbox.map(question => 
                    <TextBox question={question} submitted={submitClicked}/> 
                )
            }
            <Button onClick={(handleSubmit)}>Submit Quiz</Button>
            {submitClicked && (
                <Alert variant="info" className="mt-3">
                    You got X questions correct.
                </Alert>
            )}
        </Container>
    );
};

export default Quiz;