import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid n w3-card">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">

                            <a className="nav-link  home" aria-current="page"><Link to="/">Home</Link></a>
                        </li>

                    </ul>
                    <form className="">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex nav-list">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page"><Link to="/About">About</Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="skill"><Link to="/skill">Skills</Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><Link to="/projects">Project</Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><Link to="/certificate">Certificate</Link></a>
                            </li>

                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
