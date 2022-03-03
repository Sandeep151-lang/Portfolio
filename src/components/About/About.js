import React from 'react'
import './About.css'
import { Container } from 'react-bootstrap'
import me from '../assets/sandeep2.png'
import { AiFillGithub } from 'react-icons/ai';

const About = () => {
    return (
        <Container className=' mt-5 d-flex yes'>
            <Container className='center p-3'>
                <h4><span className='hello-word'>Hello ,</span> I'm Sandeep Nandanwar</h4>
                <hr />
                <p className='about-para'>I'm enthusiastic about tech in coding and learning new things about computers
                    and what they can do. I've been dabbling coding with coding since roughly age
                    of 15, until I Started studying computer Science from S.B JAIN INSTITUTE OF TECHNOLOGY MANAGEMENT & RESEARCH
                    at Rashtrasant Tukadoji Maharaj Nagpur University at 19 where my interest really peaked.</p>
                <p className='about-para'>I'm interested in building something awesome with code , currently focused on Web Development.</p>
                <p className='about-para'>When I'm not coding I play games with my friends, watch some show on prime video , or if the weather's
                    good , play cricket.</p>
                <hr />
                <a href="https://github.com/Sandeep151-lang?tab=repositories" target="_blank" rel="noreferrer" className='text-center' style={{ "fontWeight": "bold" }}><AiFillGithub style={{ width: 20, height: 20 }} /> Github</a>

            </Container>
            <Container className='center text-center'>
                <img src={me} alt="me" className='about-image' />
            </Container>

        </Container>
    )
}

export default About
