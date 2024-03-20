import React from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';

import Week2 from '../components/weeks/Week2';
import Week3 from '../components/weeks/Week3';

const Pledge = () => {
    return (
        <Container fluid>
            <Accordion defaultActiveKey={['1']} alwaysOpen>
                <Accordion.Item eventKey={1} disabled>
                    <Accordion.Header>Week 2 - Fundamentals</Accordion.Header>
                    <Week2 />
                </Accordion.Item>
                <Accordion.Item eventKey={2}>
                    <Accordion.Header>Week 3 - Unity/Honesty</Accordion.Header>
                    <Week3 />
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Pledge;
