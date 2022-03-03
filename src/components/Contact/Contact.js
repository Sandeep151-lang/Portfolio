import React from 'react'
import './contact.css'
import { Container, Col, Row } from 'react-bootstrap';
import me from '../assets/sandeepcontact.png'

const Contact = () => {
    return (
        <Container className='contact'>
            <Row className='cards '>
                <Col xs={6}>
                    <img src={me} alt="me" />
                </Col>
                <Col xs={6}>
                    <div className='details'>
                        <p className='contact_details'>Name: <span>Sandeep Nandanwar</span></p>
                        <p className='contact_details'>Email: <span>sandeepnandanwar92@gmail.com</span></p>
                        <p className='contact_details'>Contact No: <span>8738854495</span></p>

                    </div>

                </Col>
            </Row>
        </Container>
    )
}

export default Contact
