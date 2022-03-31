import React from 'react'
import '../Projects/project.css'
//import chat from '../assets/chat.png'


const Project = () => {
    return (
        <div className='container main-project mt-5 '>
            <h1 className='text-center'>Project</h1>
            <div className='d-flex justify-content-evenly project-flex'>
                <div className="card mb-3 w3-card-4" style={{ "maxWidth": "450px" }}>
                    <div className="row g-0">
                        {/* <div className="col-md-4">
                            <img src="https://freepngimg.com/thumb/technology/86738-animation-technology-camera-video-drawing-free-download-png-hq.png" className="img-fluid rounded-start" alt="..." />
                        </div> */}
                        <div className="col-md-10">

                            <div className="card-body">
                                <h5 className="card-title">Ecommerce Clone</h5>
                                <p className="card-text">E-commerce (electronic commerce) is the activity of electronically buying or selling of
                                    products on online services or over the Internet. E-commerce draws on technologies such as
                                    mobile commerce, electronic funds transfer,
                                    supply chain management, Internet marketing, online transaction processing,</p>
                                <a href="https://ecomerce-admin-panel.herokuapp.com/" target="_blank" rel="noreferrer" ><button className='btn btn-primary my-2'>view User App</button></a>
                                <a href="https://github.com/Sandeep151-lang/project1-ecommerce-user-panel" target="_blank" rel="noreferrer" ><button className='btn btn-primary mx-2'>View source code</button></a>
                                <br />
                                <a href="https://edcommerce-admin-panel.herokuapp.com/" target="_blank" rel="noreferrer" ><button className='btn btn-primary'>view Admin App</button></a>
                                <a href="https://github.com/Sandeep151-lang/project1-admin-panel-ecommerce-clone" target="_blank" rel="noreferrer" ><button className='btn btn-primary mx-2'>View source code</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 w3-card-4" style={{ "maxWidth": "450px" }}>
                    <div className="row g-0">
                        {/* <div className="col-md-4">
                            <img src="https://freepngimg.com/thumb/technology/86738-animation-technology-camera-video-drawing-free-download-png-hq.png" className="img-fluid rounded-start" alt="..." />
                        </div> */}
                        <div className="col-md-10">
                            <div className="card-body">
                                <h5 className="card-title">Equipment Hiring</h5>
                                <p className="card-text">Rental, also known as hiring or letting is an agreement where payment is made for the
                                    temporary use of a good, service or property owened by another.
                                    A gross lease is when the tenant pays a flat rental amount and the landlords pays for
                                    all property charges regularly incurred by the ownership</p>

                                <a href="https://hiring-project-panel.herokuapp.com/" target="_blank" rel="noreferrer" ><button className='btn btn-primary'>view App</button></a>
                                <a href="https://github.com/Sandeep151-lang/hackathon-2-hiring-product" target="_blank" rel="noreferrer" ><button className='btn btn-primary mx-2'>View source code</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex project-flex justify-content-evenly'>
                <div className="card mb-3 w3-card-4" style={{ "maxWidth": "450px" }}>
                    <div className="row g-0">
                        {/* <div className="col-md-4">
                            <img src="https://freepngimg.com/thumb/technology/86738-animation-technology-camera-video-drawing-free-download-png-hq.png" className="img-fluid rounded-start" alt="..." />
                        </div> */}
                        <div className="col-md-10">
                            <div className="card-body">
                                <h5 className="card-title">Movie Ticket Booking</h5>
                                <p className="card-text">Online Movie Ticket Booking System” is the process whereby consumers directly buy
                                    movie tickets online from a multiplex website interactively in real-time without an
                                    intermediary service over the Internet. The Given System provides the detailed working of the
                                    Online Movie Ticket Booking Processing and what all happens whenever we or any one of us goes to
                                    book movie tickets online.</p>

                                <a href="https://movieticketbook.herokuapp.com/" target="_blank" rel="noreferrer" ><button className='btn btn-primary'>view App</button></a>
                                <a href="https://github.com/Sandeep151-lang/TicketBooking" target="_blank" rel="noreferrer" ><button className='btn btn-primary mx-2'>View source code</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 w3-card-4" style={{ "maxWidth": "450px" }}>
                    <div className="row g-0">
                        {/* <div className="col-md-4">
                            <img src={chat} className="img-fluid rounded-start" alt="..." />
                        </div> */}
                        <div className="col-md-10">
                            <div className="card-body">
                                <h5 className="card-title">Chat App</h5>
                                <p className="card-text">A web chat is a system that allows users to communicate in real-time using
                                    easily accessible web interfaces. It is a type of Internet online chat distinguished by its simplicity and accessibility
                                    to users who do not wish to take the time to install and learn to use specialized chat software.</p>

                                <a href="https://quizzical-hodgkin-b1f619.netlify.app/" target="_blank" rel="noreferrer" ><button className='btn btn-primary'>view App</button></a>
                                <a href="https://github.com/Sandeep151-lang/chat-app/tree/main" target="_blank" rel="noreferrer" ><button className='btn btn-primary mx-2'>View source code</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
