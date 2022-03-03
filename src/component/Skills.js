import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'

const Skills = () => {
    // return (
    //     <div className='skills container'>
    //         <div class="w3-panel w3-card card">
    //             <h5 className='skills_para'>Skills</h5>
    //             <div className='skill_row'>
    //                 <div className='skill_left'>
    //                     <p>HTML</p>
    //                     <p>CSS</p>
    //                     <p>Reactjs</p>
    //                     <p>Bootstrap</p>
    //                 </div>
    //                 <div className='skill_right'>
    //                     <p>javascript</p>
    //                     <p>Nodejs</p>
    //                     <p>MongoDB</p>
    //                     <p>Express</p>
    //                 </div>
    //             </div>

    //         </div>
    //     </div>
    // )
    return (
        <Container className='skill w3-card w3-panel'>
            <h4 className='skills_para'>Skills</h4>
            <Row className='row'>
                <Col xs={6}>
                    <Container className='text-center row'>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>Reactjs</p>
                        <p>Bootstrap</p>
                    </Container>

                </Col>
                <Col xs={6}>
                    <Container className='text-center row'>
                        <p>javascript</p>
                        <p>Nodejs</p>
                        <p>MongoDB</p>
                        <p>Express</p>
                    </Container>

                </Col>
            </Row>
        </Container>
    )
}

export default Skills;
