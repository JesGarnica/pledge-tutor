import { React, useState } from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

import alphabet from '../../alphabet.png'

import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Quiz from '../Quiz';
import entities from '../../data/entities.json';
import colonies from '../../data/colonies.json';

import practiceWeek2Questions from '../../data/practice_week2.json'

const Week2 = () => {
    const [key, setKey] = useState('material');

    return (
        <Accordion.Body>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="material" title="Learning Material">
                    <h3>The Purpose of Omega Delta Phi Fraternity, Inc.</h3>
                    <p class="text-break">The purpose of this Brotherhood, a service/social fraternity dedicated to the
                        needs and concerns of the community, shall be to promote and maintain the
                        traditional values of Unity, Honesty, Integrity, and Leadership. This
                        Brotherhood was founded in order to provide, to ANY man, a diverse fraternal
                        experience, which coincides with a higher education.
                    </p>
                    <br />
                    <p>
                        Omega Delta Phi exists to accomplish two goals:
                        <ol>
                            <li>Graduate its members</li>
                            <li>Serve its communities</li>
                        </ol>
                        These two extremely important goals reflect those of the Fraternity as a whole
                        and its individual members.
                    </p>
                    <h3 class="fw-bold">Oath</h3>
                    <p >I ​_________​, do hereby swear to uphold the brotherhood of OMEGA DELTA PHI,
                        and live by its sacraments; those being ​Unity​, ​Honesty​, ​Integrity,​ and ​Leadership​.</p>
                    <h3>The Four Links</h3>
                    <ol>
                        <li>Initiation Link will be given upon completion of the Initiation Ceremony.</li>
                        <li>Unity Link will be given upon completion of Unity Week.</li>
                        <li>Service Link will be given upon completion of Community Service Goals.</li>
                        <li>Activation Link will be given upon completion of the Activation Ceremony.</li>
                    </ol>
                    <h3>Greek Alphabet</h3>
                    <Image src={alphabet} fluid />
                    <h3>National History</h3>
                    <p>Omega Delta Phi Fraternity was founded on November 25, 1987 on the campus of
                        Texas Tech University in Lubbock, Texas. The seven Founders consisted of Joe
                        Cereceres, Eugene Dominguez, Elliott Bazan, Dwight Christopher Forbes, Arturo
                        Barraza, Juan Barraza, and Tommy Hurtado. As a fraternity, Omega Delta Phi
                        recognizes its first graduate Advisor, Hector Jerry Holguin and faculty
                        advisors Herman Garcia, Frank Silvas, Camilo Martinez, and Paula Parras. The
                        fraternity was originally Hispanic founded, but it was never meant to exclude
                        any other individuals to join. Rather, it was founded to be a service
                        fraternity that primarily focused on the Hispanic community, since there was
                        no organization focusing on assisting this particular group in Lubbock.
                    </p><br />
                    <p>In the spring semester of 1988, the Founders initiated its first pledge class
                        of twelve men. The Founders gave the distinction of Charter Members to this
                        first class to commemorate its introduction as the fraternity’s first Active
                        Member class.
                    </p><br />
                    <p>
                        The Founding Fathers realized the need for a diverse fraternal organization to
                        allow any man to experience a fraternal Brotherhood while providing service to
                        the community. This new concept was shared at other campuses that started the
                        expansion process. The second chapter was founded in the spring of 1989 at the
                        University of Texas in El Paso. The fraternity held its first national
                        conference in the fall of 1991 on the campus of Texas Tech University to bring
                        together the first four chapters and colony (Alpha, Beta, Gamma, Delta and
                        Epsilon colony) to discuss the initial process of forming a national
                        organization. Arturo Barraza was the National Chairman with Fred Pecina and
                        Jorge Rodriguez as National Charter Members with each entity having two
                        representatives to complete the national council. These semiannual meetings
                        occurred at various campuses each semester until 1999. The Board of Directors
                        was formed in 1996 with the emerging of alumni who were interested in
                        organizing the next branch of structure for the fraternity.
                    </p><br />
                    <p>
                        The fraternity has grown to represent all types of races and not any
                        particular one is exactly the vision the Founders had hoped it would evolve
                        v1.4 | 20
                        too. With this evolution, the opportunity to expand and affect the lives of
                        various people has been a great benefit to our fraternity and the individuals
                        we have helped.
                    </p><br />
                    <h3>Founding Fathers</h3>
                    <Container>
                        <Row className="mb-3">
                            <Col xs={12} md={4} className="fw-bold">Joe Cereceres</Col>
                            <Col xs={12} md={4}>Founder; President</Col>
                            <Col xs={12} md={4}>El Paso, Texas; Marketing Major, Spanish Minor; December 2001</Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={12} md={4} className="fw-bold">Eugene Dominguez</Col>
                            <Col xs={12} md={4}>Vice-President</Col>
                            <Col xs={12} md={4}>Sweetwater, TX; B.S. Architecture, May 1988; First Alumnus</Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={12} md={4} className="fw-bold">Arturo Barraza</Col>
                            <Col xs={12} md={4}>Prospective Member Educator</Col>
                            <Col xs={12} md={4}>El Paso, TX; International Trade</Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={12} md={4} className="fw-bold">Juan Barraza</Col>
                            <Col xs={12} md={4}>Recording Secretary</Col>
                            <Col xs={12} md={4}>El Paso, TX; B.S. Mechanical Engineering, August 1989, M.S. Mechanical Engineering, May 1991</Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={12} md={4} className="fw-bold">Tommy Hurtado</Col>
                            <Col xs={12} md={4}>Treasurer</Col>
                            <Col xs={12} md={4}>Lubbock, TX; B.B.A. Marketing, December 1990</Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={12} md={4} className="fw-bold">Dwight Christopher Forbes</Col>
                            <Col xs={12} md={4}>Sergeant at Arms</Col>
                            <Col xs={12} md={4}>Jamaica (originally); Meadowlands, NJ; B.S. Restaurant, Hotel, and Institutional Management, December 1988</Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={12} md={4} className="fw-bold">Elliot Bazan</Col>
                            <Col xs={12} md={4}>Chaplain</Col>
                            <Col xs={12} md={4}>Levelland, TX; B.S. Architecture, December 1988</Col>
                        </Row>
                    </Container>
                    <h3>Symbols</h3>
                    <h4>National Motto</h4>
                    <p>The national public motto shall be "Crescit Eundo" – It grows as it goes.</p>
                    <h4>National Slogan</h4>
                    <p>The National slogan shall be "One Culture Any Race."</p>
                    <h4>Colors</h4>
                    <p>The official colors of this Fraternity shall be Scarlet and Silver, with Black being the official supporting color.</p>
                    <h4>Flag</h4>
                    <p>Although each chapter shall have the right to design its own banner, the official flag of the Fraternity shall be a scarlet flag of rectangular shape, bearing a silver chevron (with its left point on the bottom left edge of the flag, its top point positioned on the top middle of the flag, and its right point on the bottom right edge of the flag).
                        Upon the fields of scarlet, there shall be a five point star (under the arches of the chevron in the middle of the flag).
                    </p>
                    <h3>National Entity Roll Call</h3>
                    <h3>Chapter</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Entity</th>
                                <th>School</th>
                                <th>Location</th>
                                <th>Region</th>
                            </tr>
                        </thead>
                        <tbody>
                            {entities.map((entity, index) => (
                                <tr key={index}>
                                    <td>{entity.entity}</td>
                                    <td>{entity.school}</td>
                                    <td>{entity.location}</td>
                                    <td>{entity.region}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <h3>Colonies</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>University</th>
                                <th>Location</th>
                                <th>Region</th>
                            </tr>
                        </thead>
                        <tbody>
                            {colonies.map((colony, index) => (
                                <tr key={index}>
                                    <td>{colony.university}</td>
                                    <td>{colony.location}</td>
                                    <td>{colony.region}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey="cquiz" title="Practice Quizzes">
                    <Quiz questions={practiceWeek2Questions} />
                </Tab>
                <Tab eventKey="pquiz" title="PM Quizzes" disabled>
                    Tab content for Contact
                </Tab>
            </Tabs>
        </Accordion.Body>
    );
};

export default Week2;