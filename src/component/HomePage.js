import React from 'react';
import me from '../assets/me-right.png'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'


const HomePage = () => {
    return (
        <Container className='homepage'>
            <Row>
                <Col xs={6}>
                    <p className='name'>Hello, <span className='sub_name'>Sandeep Nandanwar</span></p>
                    <Button variant="secondary but hire">Hire Me</Button>
                    <Button variant="secondary but cv" className='ml-2'>Open Cv</Button>
                </Col>
                <Col xs={6}>
                    <Image className='me_image' src={me} alt='imag' />
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage
