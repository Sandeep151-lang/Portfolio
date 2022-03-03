import React from 'react';
import me from '../assets/me-right.png'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'


const HomePage = () => {
    // return (
    //     <>
    //         <div className='container-fluid homepage'>
    //             <div className='row '>
    //                 <div className='container col-5'>
    //                     <p className='name'>Hello, <span className='sub_name'>Sandeep Nandanwar</span></p>
    //                     <button className='hire_button'>Hire Me</button>
    //                     <a href='http://www.google.com' target='_blank' rel="noreferrer"><button className='Cv_button'>Open Cv</button></a>
    //                 </div>
    //                 <div className='col-5 container'>
    //                     <img className='me_image' src={me} alt='imag' />
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // )
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
