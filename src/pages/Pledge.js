import React from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';
import Quiz from '../components/Quiz'

import alphabet from '../alphabet.png'
import practiceWeek2Questions from '../data/practice_week2.json'


import { useState } from 'react';

const Pledge = () => {
    const [key, setKey] = useState('material');

    const entities = [
        { entity: 'Alpha', school: 'Texas Tech University', location: 'Lubbock, TX', region: 'North Texas' },
        { entity: 'Gamma', school: 'University of Arizona', location: 'Tucson, AZ', region: 'Southwest' },
        { entity: 'Delta', school: 'Texas A&M University', location: 'College Station, TX', region: 'East Texas' },
        { entity: 'Epsilon', school: 'Arizona State University', location: 'Tempe, AZ', region: 'Southwest' },
        { entity: 'Eta', school: 'Sam Houston State University', location: 'Huntsville, TX', region: 'East Texas' },
        { entity: 'Theta', school: 'West Texas A&M University', location: 'Canyon, TX', region: 'North Texas' },
        { entity: 'Iota', school: 'Northern Arizona University', location: 'Flagstaff, AZ', region: 'Southwest' },
        { entity: 'Lambda', school: 'University of Washington', location: 'Seattle, WA', region: 'Northwest' },
        { entity: 'Mu', school: 'Midwestern State University', location: 'Wichita, TX', region: 'North Texas' },
        { entity: 'Xi', school: 'University of Oklahoma', location: 'Norman, OK', region: 'Central Plains' },
        { entity: 'Omicron', school: 'University of Wisconsin–Parkside', location: 'Kenosha, WI', region: 'Midwest' },
        { entity: 'Pi', school: 'University of Houston', location: 'Houston, TX', region: 'East Texas' },
        { entity: 'Rho', school: 'Texas State University', location: 'San Marcos, TX', region: 'Central Texas' },
        { entity: 'Tau', school: 'University of Texas at Arlington', location: 'Arlington, TX', region: 'North Texas' },
        { entity: 'Upsilon', school: 'Washington State University', location: 'Pullman, WA', region: 'Northwest' },
        { entity: 'Chi', school: 'University of Texas at Austin', location: 'Austin, TX', region: 'Central Texas' },
        { entity: 'Alpha Alpha', school: 'Northwestern University', location: 'Evanston, IL', region: 'Midwest' },
        { entity: 'Alpha Gamma', school: 'University of Texas–Rio Grande Valley', location: 'Edinburg, TX', region: 'Central Texas' },
        { entity: 'Alpha Eta', school: 'University of New Mexico', location: 'Albuquerque, NM', region: 'Southwest' },
        { entity: 'Alpha Theta', school: 'Oregon State University', location: 'Corvallis, OR', region: 'Northwest' },
        { entity: 'Alpha Iota', school: 'California State University, Monterey Bay', location: 'Seaside, CA', region: 'Northwest' },
        { entity: 'Alpha Kappa', school: 'Texas A&M University at Kingsville', location: 'Kingsville, TX', region: 'Central Texas' },
        { entity: 'Alpha Mu', school: 'Baylor University', location: 'Waco, TX', region: 'Central Texas' },
        { entity: 'Alpha Xi', school: 'University of Texas at Dallas', location: 'Dallas, TX', region: 'North Texas' },
        { entity: 'Alpha Omicron', school: 'Texas Southern University', location: 'Houston, TX', region: 'East Texas' },
        { entity: 'Alpha Pi', school: 'University of Illinois at Urbana-Champaign', location: 'Urbana, IL', region: 'Midwest' },
        { entity: 'Alpha Rho', school: 'Texas A&M International University', location: 'Laredo, TX', region: 'Central Texas' },
        { entity: 'Alpha Sigma', school: 'University of Florida', location: 'Gainesville, FL', region: 'East Texas' },
        { entity: 'Alpha Phi', school: 'University of Nevada at Las Vegas', location: 'Las Vegas, NV', region: 'Southwest' },
        { entity: 'Alpha Chi', school: 'University of North Texas', location: 'Denton, TX', region: 'North Texas' },
        { entity: 'Alpha Psi', school: 'University of California, Merced', location: 'Merced, CA', region: 'Northwest' },
        { entity: 'Beta Alpha', school: 'Northeastern Illinois University', location: 'Chicago, IL', region: 'Midwest' },
        { entity: 'Beta Beta', school: 'Cal State University, Dominguez-Hills', location: 'Carson, CA', region: 'Southwest' },
        { entity: 'Beta Gamma', school: 'Eastern Washington University', location: 'Cheney, WA', region: 'Northwest' },
        { entity: 'Beta Delta', school: 'University of Nevada, Reno', location: 'Reno, NV', region: 'Northwest' },
        { entity: 'Beta Epsilon', school: 'Texas Christian University', location: 'Fort Worth, TX', region: 'North Texas' },
        { entity: 'Beta Zeta', school: 'University of Utah', location: 'Salt Lake City, UT', region: 'Southwest' },
        { entity: 'Beta Eta', school: 'University of Central Oklahoma', location: 'Oklahoma City, OK', region: 'Central Plains' },
        { entity: 'Beta Theta', school: 'Texas A&M University-San Antonio', location: 'San Antonio, TX', region: 'Central Texas' },
        { entity: 'Beta Iota', school: 'University of Illinois at Chicago', location: 'Chicago, IL', region: 'Midwest' },
        { entity: 'Beta Kappa', school: 'Western Oregon University', location: 'Monmouth, OR', region: 'Northwest' },
        { entity: 'Beta Lambda', school: 'University of Idaho', location: 'Moscow, ID', region: 'Northwest' },
        { entity: 'Beta Nu', school: 'Oklahoma State University', location: 'Stillwater, OK', region: 'Central Plains' },
        { entity: 'Beta Xi', school: 'Heritage University', location: 'Toppenish, WA', region: 'Northwest' },
        { entity: 'Beta Omicron', school: 'University of the Incarnate Word', location: 'San Antonio, TX', region: 'Central Texas' },
        { entity: 'Beta Pi', school: 'Texas A&M University-Corpus Christi', location: 'Corpus Christi, TX', region: 'Central Texas' },
        { entity: 'Beta Rho', school: 'Western Michigan University', location: 'Kalamazoo, MI', region: 'Midwest' },
        { entity: 'Beta Sigma', school: 'University of Houston Downtown', location: 'Houston, TX', region: 'East Texas' },
        { entity: 'Beta Tau', school: 'Portland State University', location: 'Portland, OR', region: 'Northwest' },
        { entity: 'Beta Upsilon', school: 'Southern Illinois University', location: 'Carbondale, IL', region: 'Midwest' },
        { entity: 'Beta Phi', school: 'Fresno State University', location: 'Fresno, CA', region: 'Southwest' },
        { entity: 'Beta Chi', school: 'Kansas State University', location: 'Manhattan, KS', region: 'Central Plains' },
        { entity: 'Alpha', school: 'Texas Tech University', location: 'Lubbock, TX', region: 'North Texas' }
    ];

    const colonies = [
        { entity: 'Colony', university: 'Colorado State University–Fort Collins', location: 'Fort Collins, CO', region: 'Southwest' },
        { entity: 'Colony', university: 'Prairie View A&M University', location: 'Prairie View, TX', region: 'East Texas' },
        { entity: 'Colony', university: 'University of Wisconsin at Milwaukee', location: 'Milwaukee, WI', region: 'Midwest' },
        { entity: 'Colony', university: 'Michigan State University', location: 'Lansing, MI', region: 'Midwest' },
        { entity: 'Colony', university: 'University of Texas at San Antonio', location: 'San Antonio, TX', region: 'Central Texas' },
        { entity: 'Colony', university: 'California State University–Stanislaus', location: 'Turlock, CA', region: 'Northwest' },
        { entity: 'Colony', university: 'University of West Florida', location: 'Pensacola, FL', region: 'East Texas' },
        { entity: 'Colony', university: 'University of the Pacific', location: 'Stockton, CA', region: 'Northwest' },
        { entity: 'Colony', university: 'Texas A&M University Commerce', location: 'Commerce, TX', region: 'North Texas' },
        { entity: 'Colony', university: 'Auburn University', location: 'Auburn, AL', region: 'East Texas' },
        { entity: 'Colony', university: 'California State University–Bakersfield', location: 'Bakersfield, CA', region: 'Southwest' },
        { entity: 'Colony', university: 'Colorado State University - Pueblo', location: 'Pueblo, CO', region: 'Southwest' },
        { entity: 'Colony', university: 'Stephen F. Austin State University', location: 'Nacogdoches, TX', region: 'East Texas' },
        { entity: 'Colony', university: 'University of Wisconsin Oshkosh', location: 'Oshkosh, WI', region: 'Midwest' },
        { entity: 'Colony', university: 'University of Nebraska – Lincoln', location: 'Lincoln, NE', region: 'Central Plains' }
      ];
    
    return (
        <Container fluid>
            <Accordion defaultActiveKey={['1']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Week 1 - Meeting & Event Management</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" disabled>
                    <Accordion.Header>Week 2 - Fundamentals</Accordion.Header>
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
                                <Quiz questions={practiceWeek2Questions}/>
                            </Tab>
                            <Tab eventKey="pquiz" title="PM Quizzes" disabled>
                                Tab content for Contact
                            </Tab>
                        </Tabs>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Week 3</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Week 4</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Week 5</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Pledge;
