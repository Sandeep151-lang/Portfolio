/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { Container } from 'react-bootstrap';
import {
    Card, CardBody,
    CardTitle
} from 'reactstrap';
import './project.css'
import { AiFillGithub } from 'react-icons/ai';
import { SiHeroku } from 'react-icons/si';


const Projects = () => {
    return (
        <>
            <Container className='mt-5'>
                <Card >
                    <CardBody style={{ 'border': '2px solid green' }}>
                        <CardTitle>
                            <h5 className='text-center card-head'>Ecommerce Clone</h5>
                            <hr />
                        </CardTitle>
                        <CardTitle>
                            <p style={{ 'fontFamily': "sans-serif" }}>E-commerce (electronic commerce) is the activity of electronically buying or selling of products on online services or over the Internet. E-commerce draws on technologies such as mobile commerce, electronic funds transfer,
                                supply chain management, Internet marketing, online transaction processing,
                                electronic data interchange (EDI), inventory management systems,
                                and automated data collection systems. E-commerce is in turn driven by
                                the technological advances of the semiconductor industry, and is the largest sector of the electronics industry.</p>
                        </CardTitle>
                        <CardTitle className='d-flex justify-content-evenly project-link'>

                            <h6 className='app-link'>User-Panel :<span className='view-app'><a href="https://ecomerce-admin-panel.herokuapp.com/" target="_blank" >View App <SiHeroku /></a></span></h6>
                            <h6 className='app-link'>User-Panel :<span className='view-app'><a href="https://github.com/Sandeep151-lang/project1-ecommerce-user-panel" target="_blank" >View code <AiFillGithub /></a></span></h6>
                        </CardTitle>
                        <CardTitle className='d-flex justify-content-evenly mt-5 project-link'>

                            <h6 className='app-link'>Admin-Panel :<span className='view-app'><a href="https://edcommerce-admin-panel.herokuapp.com/" target="_blank" >View App <SiHeroku /></a></span></h6>
                            <h6 className='app-link'>Admin-Panel :<span className='view-app'><a href="https://github.com/Sandeep151-lang/project1-admin-panel-ecommerce-clone" target="_blank" >View code <AiFillGithub /></a></span></h6>
                        </CardTitle>
                    </CardBody>
                </Card>
                <Card className='mt-2'>
                    <CardBody style={{ 'border': '2px solid green' }}>
                        <CardTitle>
                            <h5 className='text-center card-head'>Equipment Hiring</h5>
                            <hr />
                        </CardTitle>
                        <CardTitle>
                            <p style={{ 'fontFamily': "sans-serif" }}>Rental, also known as hiring or letting is an agreement where payment is made for the
                                temporary use of a good, service or property owened by another.
                                A gross lease is when the tenant pays a flat rental amount and the landlords pays for
                                all property charges regularly incurred by the ownership</p>
                        </CardTitle>
                        <CardTitle className='d-flex justify-content-evenly project-link'>

                            <h6 className='app-link'><span className='view-app'><a href="https://hiring-project-panel.herokuapp.com/" target="_blank" >View App <SiHeroku /></a></span></h6>
                            <h6 className='app-link'> <span className='view-app'><a href="https://github.com/Sandeep151-lang/hackathon-2-hiring-product" target="_blank" >View code <AiFillGithub /></a></span></h6>
                        </CardTitle>
                    </CardBody>
                </Card>
                <Card className='mt-2'>
                    <CardBody style={{ 'border': '2px solid green' }}>
                        <CardTitle>
                            <h5 className='text-center card-head'>Chat App</h5>
                            <hr />
                        </CardTitle>
                        <CardTitle>
                            <p style={{ 'fontFamily': "sans-serif" }}>Rental, also known as hiring or letting is an agreement where payment is made for the
                                temporary use of a good, service or property owened by another.
                                A gross lease is when the tenant pays a flat rental amount and the landlords pays for
                                all property charges regularly incurred by the ownership</p>
                        </CardTitle>
                        <CardTitle className='d-flex justify-content-evenly project-link'>

                            <h6 className='app-link'><span className='view-app'><a href="https://quizzical-hodgkin-b1f619.netlify.app/" target="_blank" >View App <SiHeroku /></a></span></h6>
                            <h6 className='app-link'> <span className='view-app'><a href="https://github.com/Sandeep151-lang/chat-app/tree/main" target="_blank" >View code <AiFillGithub /></a></span></h6>
                        </CardTitle>
                    </CardBody>
                </Card>
            </Container>
        </>
    )
}

export default Projects
