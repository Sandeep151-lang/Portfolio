import React from 'react'
import { Container } from 'react-bootstrap'
import certificate from '../assets/GuviCertification.png'

const Certificate = () => {
    return (
        <div>
            <Container className='mt-5 certificate'>
                <img src={certificate} width='100%' height='500' alt='certificate' />
            </Container>

        </div>
    )
}

export default Certificate
