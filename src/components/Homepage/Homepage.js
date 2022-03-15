import React from 'react';
import me from '../assets/sandeep4.png'
import './Homepage.css'
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap'
import { AiFillGithub } from 'react-icons/ai';
import { AiFillSafetyCertificate, AiOutlineLinkedin } from 'react-icons/ai';
import certificate from '../assets/GuviCertification.png'




const HomePage = () => {
    return (
        <>
            <div className='animation-area'>
                <ul className='box-area'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            <Container className=' yes mt-5 d-flex justify-content-evenly '>
                <Container>
                        <Container className=' left'>
                            <p className='paragraph'>Hello, <span >I am Sandeep Nandanwar</span></p>
                            <p>Web Designer</p>
                        <Button variant="secondary hire" ><Link to="/contact"><span className='hire-span text-white'>Hire Me</span></Link></Button>
                        <Button variant="secondary" className='cv'><a href="https://drive.google.com/file/d/1UVMhV05pYdQJHASCK6k-UsLjKyuwgvJp/view" target="_blank" rel="noreferrer"><span className='resume'>Resume</span></a></Button>
                    </Container>
                </Container>
                    <Container className='image-about'>
                    <img src={me} alt="me" className='about-image' />
                </Container>
                </Container>
            </div>
            <Container>
                <div className=' card-part mb-5 ml-5'>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <AiFillGithub style={{ width: 100, height: 100, margin: '50%', transform: 'translate(-50%,-50%)' }} />
                        </div>
                        <div className="flip-card-back" >
                            <a href="https://github.com/Sandeep151-lang?tab=repositories" target="_blank" rel="noreferrer" style={{ cursor: 'pointer' }}>
                                <div className='mt-5 text-white'>
                                    <p>35 Repositories</p>
                                    <hr />
                                    <p>2 Mern Projects</p>
                                    <p>1 Socket Base Chat Projects</p>
                                    <p>1 React with firebase Projects</p>
                                    <p>Task in React ,Html , Nodejs </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flip-card mid-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <AiFillSafetyCertificate style={{ width: 100, height: 100, margin: '50%', transform: 'translate(-50%,-50%)' }} />
                        </div>
                        <div className="flip-card-back">
                            <Link to="/certificate"><img src={certificate} alt="Avatar" style={{ "width": "300px", "height": "300px" }} /></Link>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <AiOutlineLinkedin style={{ width: 100, height: 100, margin: '50%', transform: 'translate(-50%,-50%)' }} />
                        </div>
                        <div className="flip-card-back">
                            <a href='https://www.linkedin.com/in/sandeep-nandanwar-29a4b61b9' target="_blank" rel="noreferrer" ><h1 className='text-white' style={{ width: 100, height: 100, margin: '50%', transform: 'translate(-50%,-50%)' }} > Linkedin</h1></a>
                        </div>
                    </div>
                </div>

            </div>
            </Container>

        </>

    )
}
export default HomePage
