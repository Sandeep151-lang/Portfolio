import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Skills.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
    const percentage = 66;
    return (
        <Container id="skill" className='skill w3-card' style={{ width: 600 }}>
            <h4 className='skills_para'>Skills</h4>
            <hr />
            <Row className='row mt-3'>
                <Col xs={6} className='cards'>
                    <div className='d-flex text-center '>
                        <p style={{ width: 50, height: 50, marginRight: 15, marginLeft: 80 }}><CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            styles={buildStyles({ pathColor: `green`, textColor: 'green' })}
                        /></p>
                        <p>HTML</p>
                    </div>
                    <div className='d-flex text-center my-5'>
                        <p style={{ width: 50, height: 50, marginRight: 15, marginLeft: 80 }}><CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            styles={buildStyles({ pathColor: `red`, textColor: 'red' })}
                        /></p>
                        <p>CSS</p>
                    </div>
                    <div className='d-flex text-center my-5'>
                        <p style={{ width: 50, height: 50, marginRight: 15, marginLeft: 80 }}><CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            styles={buildStyles({ pathColor: `#198754`, textColor: '#198754' })}
                        /></p>
                        <p>Reactjs</p>
                    </div>
                    <div className='d-flex text-center my-5'>
                        <p style={{ width: 50, height: 50, marginRight: 15, marginLeft: 80 }}><CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            styles={buildStyles({ pathColor: `purple`, textColor: '#f88' })}
                        /></p>
                        <p>Bootstrap</p>
                    </div>

                </Col>
                <Col xs={6} className='cards per'>

                    <div className='d-flex text-center'>
                        <p style={{ width: 50, height: 50, marginRight: 15, marginLeft: 50 }}><CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            styles={buildStyles({ pathColor: `yellow`, textColor: 'yellow' })}
                        /></p>
                        <p>Javascript</p>
                    </div>
                    <div className='d-flex text-center my-5'>
                        <p style={{ width: 50, height: 50, marginRight: 15, marginLeft: 50 }}><CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            styles={buildStyles({ pathColor: `#ffa500ab`, textColor: '#ffa500ab' })}
                        /></p>
                        <p>Nodejs</p>
                    </div>
                    <div className='d-flex text-center my-5'>
                        <p style={{ width: 50, height: 50, marginRight: 15, marginLeft: 50 }}><CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            styles={buildStyles({ pathColor: `green`, textColor: 'green' })}
                        /></p>
                        <p>MongoDB</p>
                    </div>
                    <div className='d-flex text-center my-5'>
                        <p style={{ width: 50, height: 50, marginRight: 15, marginLeft: 50 }}><CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            styles={buildStyles({ pathColor: `red`, textColor: 'red' })}
                        /></p>
                        <p>Express</p>
                    </div>


                </Col>
            </Row>
        </Container>
    )
}

export default Skills
