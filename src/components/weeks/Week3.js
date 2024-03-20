import { React, useState } from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';

import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Quiz from '../Quiz';

import practiceWeek2Questions from '../../data/practice_week2.json'

const Week3 = () => {
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
                    <h3>Unity/Honesty</h3>
                    <p>Unity - “Our Unity will make us one never to be divided” Unity much like integrity must be created. The paradigm of the ‘we’ comes from the mutual respect that is created when people choose to listen to one another. It is a belief that “we can do it; we can cooperate; we can combine our talents and abilities to create something greater and achieve success.” Unity derives its power from the ability of people to learn from each other’s experiences perceptions and ways of thinking.</p>
                    <p>Unity is a choice that only leaders can make. Leaders believe in the “I” paradigm of personal leadership. People who exercise leadership take responsibility over their life. They believe in the “I can do it” “I am responsible” “I am self-reliant” and “I can choose”.</p>
                    <p>People who do not take that responsibility are not leaders and need other people to get what they want. This is the “you” paradigm; “you take care of me” “you come through for me” “you didn’t come through” “I blame you for the results”. Non-leaders are emotionally and mentally dependent; their sense of worth and security comes from the opinions of others and they count on other people to think them through the issues and problems of their lives.</p>
                    <p>In short non-leaders need others to get what they want. Leaders can get what they want through their own effort. Leaders who choose unity combine their own efforts with the efforts of others to achieve their mutual success. Unity should not be used if it requires you to break the other sacraments. No one sacrament is more important than the others are. No sacrament should supersede another sacrament.</p>

                    <h3>Cog’s Ladder of Group Development</h3>
                    <p>Cog’s Ladder of group development is based on the work “Cog’s Ladder: A Model of Group Growth” by George O. Charrier, an employee of Procter and Gamble, published in a company newsletter in 1972. The original document was written to help group managers at Procter and Gamble better understand the dynamics of group work, thus improving efficiency. It is now used amongst many Fortune 500 companies to help in understanding group development.</p>
                    <p>The idea of Cog’s Ladder is that there are five stages necessary for a group of people to be able to work efficiently together:</p>
                    <p><strong>Stage 1. Polite</strong><br />This is an introductory phase where members getting to know each other. The basis for the group structure is established via polite interactions between the team colleagues. Members do not want to disclose too much to each other. Conflict is usually absent. Members want to be liked and are actively participating in various tasks. Generally, the following behaviours could be noticed:
                        <ul>
                            <li>Controversy and serious topics are avoided.</li>
                            <li>Ideas are simple.</li>
                            <li>Feedback is kept to a minimum.</li>
                        </ul>
                    </p>
                    <p><strong>Stage 2. Why We’re Here</strong><br />Group members want to know the group’s goals and objectives, and cliques start to wield influence as a common purpose is found. Hidden agenda items begin to be sensed as group members try to verbalize the group objective most satisfying to them. The time spent in this phase varies widely. Some groups omit it completely, while a few groups will give that most of their allotted time. When the purpose comes from outside the group, the members will still discuss it in order to gain understanding and to build commitment.</p>
                    <p><strong>Stage 3. Bid for Power</strong><br />This is a time when team members start to compete for power, attention, recognition, and influence. They are trying to convince each other that their resolution to the problem or opinion is correct. At this moment, some of the team members who enthusiastically participated in previous stages now remain silent as they do not want to be engaged in the “battles for power.”
                        <ul>
                            <li>Number of conflicts rises.</li>
                            <li>Team spirit is low, and some members may feel uncomfortable (due to the “race for power”).</li>
                            <li>Group identity still doesn't exist.</li>
                        </ul>
                    </p>
                    <p><strong>Stage 4. Constructive</strong><br />Team spirit emerges and replaces vested interest. Group identity starts to be important. Conflicts become a mutual problem rather than a win-lose battle. If new members are introduced, they will be viewed as intruders and will not be accepted straight away. The team may need to evolve and go through the above stages again. Expected behaviours include:
                        <ul>
                            <li>Leadership is shared, and the group is comfortable using the abilities of any individual who can contribute effectively.</li>
                            <li>Individuals don't want to be involved in the “race for power”, prefer active listening, and asking questions of each other.</li>
                            <li>Solutions or decisions are much better as developed jointly by the whole group.</li>
                            <li>Real progress toward the group’s goals improves significantly.</li>
                        </ul>
                    </p>
                    <p><strong>Stage 5. Espirit (Unity)</strong><br />There is high group morale and intense group loyalty. All team members are motivated by each other's performance and empathy. The team shows mutual acceptance and fully understands its diversity. Participation is as high as it will ever get. Expected behaviours include:
                        <ul>
                            <li>Both individuality and creativity are high.</li>
                            <li>The group performs constructively and productively, achieving more than expected.</li>
                        </ul>
                    </p>
                    <p>It is worth mentioning that the cooperation stage won’t always be achieved. For this level of cooperation, as well as productivity, the other four stages must be met.</p>

                    <>
                        <h3>Exercise:</h3>
                        <ol>
                            <li>
                                <p>At what stage is your class at now? Give specific examples.</p>
                                <Form.Group controlId="exercise1" className="mb-3"> {/* Added margin bottom */}
                                    <Form.Control type="text" placeholder="Your answer..." />
                                </Form.Group>
                            </li>
                            <li>
                                <p>Why has your Prospective Member Class not progressed to the next level? What will you do about it?</p>
                                <Form.Group controlId="exercise2" className="mb-3"> {/* Added margin bottom */}
                                    <Form.Control type="text" placeholder="Your answer..." />
                                </Form.Group>
                            </li>
                            <li>
                                <p>Do you trust all of your Prospective Member brothers? Why? When did you start trusting them?</p>
                                <Form.Group controlId="exercise3" className="mb-3"> {/* Added margin bottom */}
                                    <Form.Control type="text" placeholder="Your answer..." />
                                </Form.Group>
                            </li>
                        </ol>
                    </>

                    <ListGroup as="ol" numbered className="mb-3">
                        <ListGroup.Item as="li">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Put the talker at ease</div>
                                One must make the other individual feel as though they are free to talk.
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Face the speaker</div>
                                Demonstrate that the individual has your undivided attention, which also demonstrates interest in the conversation.
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Remove Distractions</div>
                                One must remain focused on the conversation and avoid distractions (doodling, tapping, texting, etc.).
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Empathize</div>
                                One must attempt to empathize with the other person in order to understand their point of view.
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Be Patient</div>
                                One must give adequate time and attention to the conversation without interrupting the speaker.
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Remain Calm</div>
                                One must remain calm and suspend personal paradigms to mitigate any misunderstandings.
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Avoid Arguments</div>
                                One must refrain and defuse arguments to produce a productive conversation.
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Ask Questions</div>
                                One must ask questions in order to explore aspects of the conversation and their personal paradigms.
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Do Not Interrupt</div>
                                One must remember that listening to others is an essential component of effective communication.
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                    <>
                        <h3>Conflict Resolution</h3>
                        <p>Conflict Resolution builds Unity. Unity is powerful because differences are
                            allowed to exist, contributing to a greater whole. Unity does not mean that
                            everyone has the same ideas, opinions, paradigms etc. Rather, conflict is
                            always present with unity. Without these differences, neither the optimum
                            solution nor the most creative solution result. Therefore, since differences
                            will always exist, then conflicts will always occur. Conflicts take energy
                            away from the group that can be used positively or negatively. It is positive
                            if the conflict leads to building a greater trust and understanding of each
                            other and a new solution is created. However, conflict can be negative if
                            issues are not resolved and left to stagnate. This conflict will surface from
                            time to time and will block any creative solutions that may spring up.</p>

                        <ol>
                            <li>Make a mutual commitment to resolve the conflict. If that commitment is not present, then list pros and cons of resolving conflict to see the mutual benefits of solving the conflict.</li>
                            <li>Define the Issue. All sides need to agree on a clear definition of the issue.</li>
                            <li>Map the conflict. Define who is involved, what does each party want? What don’t they want to happen? Look for the values, beliefs that are attached to each party’s position.</li>
                            <li>State Vision. All parties should state what their vision is of the solution that works. Identify the assumptions behind the different vision for the parties.</li>
                            <li>Co-Create a common vision. Listen to each other’s assumptions and discuss the assumptions until a common ground is reached. Once assumptions are in place, then jointly develop the vision to resolve the problem.</li>
                            <li>Develop solutions. Brainstorm for solutions and move from general to specific.</li>
                            <li>Declare commitment to implement the solution.</li>
                        </ol>

                        <h4>Exercise:</h4>
                        <ol>
                            <li>
                                <p>Think about someone you have recently had a conflict with: someone in your Prospective Member class, chapter, dorm, etc.</p>
                                <Form.Group controlId="exerciseConflict1" className="mb-3">
                                    <Form.Control type="text" placeholder="Your answer..." />
                                </Form.Group>
                            </li>
                            <li>
                                <p>How did you resolve the conflict?</p>
                                <Form.Group controlId="exerciseConflict2" className="mb-3">
                                    <Form.Control type="text" placeholder="Your answer..." />
                                </Form.Group>
                            </li>
                            <li>
                                <p>Did you use the above steps? If so, write the steps you took to resolve the conflict and see if they match with the above list.</p>
                                <Form.Group controlId="exerciseConflict3" className="mb-3">
                                    <Form.Control type="text" placeholder="Your answer..." />
                                </Form.Group>
                            </li>
                            <li>
                                <p>How could you have resolved the conflict in a better way?</p>
                                <Form.Group controlId="exerciseConflict4" className="mb-3">
                                    <Form.Control type="text" placeholder="Your answer..." />
                                </Form.Group>
                            </li>
                        </ol>
                    </>
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

export default Week3;