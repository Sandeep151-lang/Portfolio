import React from 'react';
import me from '../assets/sandeep4.png'
import './Homepage.css'
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap'



const HomePage = () => {
    return (
        <>
            <Container className=' yes mt-5 d-flex justify-content-evenly '>
                <Container>
                    <Container style={{ 'marginTop': '30%' }} className='center text-center left'>
                        <p className='paragraph'>Hello, <span >I am Sandeep Nandanwar</span></p>
                        <Button variant="secondary hire" ><Link to="/contact"><span className='hire-span text-white'>Hire Me</span></Link></Button>
                        <Button variant="secondary" className='cv'><a href="https://drive.google.com/file/d/1UVMhV05pYdQJHASCK6k-UsLjKyuwgvJp/view" target="_blank" rel="noreferrer"><span className='resume'>Resume</span></a></Button>
                    </Container>
                </Container>
                <Container className='center text-center'>
                    <img src={me} alt="me" className='about-image' />
                </Container>

            </Container>

        </>

    )
}
export default HomePage
