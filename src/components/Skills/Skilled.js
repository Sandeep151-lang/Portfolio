import React from 'react'
import { Container } from 'react-bootstrap'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Skills.css'

const Skilled = () => {

    const mystyle = {
        width: 50,
        height: 50
    }

    const percentage = 66;
    return (
        <>

            <h4 className='skills_para text-center mt-5'>Skills</h4>
            <Container className='skilled-container d-flex justify-content-evenly'>
                <Container className='mt-5 mx-5'>
                    <div className=' text-center d-flex mx-5 '>
                        <p style={mystyle}><CircularProgressbar
                            value={percentage}
                            text={`${80}%`}
                            styles={buildStyles({ pathColor: `green`, textColor: 'green' })}
                        /></p>
                        <p className='skilled-paragraph'>HTML</p>
                    </div>
                    <div className='d-flex text-center my-5 mx-5'>
                        <p style={mystyle}><CircularProgressbar
                            value={percentage}
                            text={`${70}%`}
                            styles={buildStyles({ pathColor: `red`, textColor: 'red' })}
                        /></p>
                        <p className='skilled-paragraph'>CSS3</p>
                    </div>
                    <div className='d-flex text-center my-5 mx-5'>
                        <p style={mystyle}><CircularProgressbar
                            value={percentage}
                            text={`${66}%`}
                            styles={buildStyles({ pathColor: `#198754`, textColor: '#198754' })}
                        /></p>
                        <p className='skilled-paragraph'>Reactjs</p>
                    </div>
                    <div className='d-flex text-center my-5 mx-5'>
                        <p style={mystyle}><CircularProgressbar
                            value={percentage}
                            text={`${70}%`}
                            styles={buildStyles({ pathColor: `purple`, textColor: 'purple' })}
                        /></p>
                        <p className='skilled-paragraph'>Bootstrap</p>
                    </div>

                </Container>
                <Container className='mt-5 mx-5'>
                    <div className='d-flex text-center mx-5'>
                        <p style={{ width: 50, height: 50 }}><CircularProgressbar
                            value={percentage}
                            text={`${66}%`}
                            styles={buildStyles({ pathColor: `vanilla`, textColor: 'vanilla' })}
                        /></p>
                        <p className='skilled-paragraph'>Javascript</p>
                    </div>
                    <div className='d-flex text-center my-5 mx-5'>
                        <p style={{ width: 50, height: 50 }}><CircularProgressbar
                            value={percentage}
                            text={`${50}%`}
                            styles={buildStyles({ pathColor: `#ffa500ab`, textColor: `#ffa500ab` })}
                        /></p>
                        <p className='skilled-paragraph'>Nodejs</p>
                    </div>
                    <div className='d-flex text-center my-5 mx-5'>
                        <p style={{ width: 50, height: 50 }}><CircularProgressbar
                            value={percentage}
                            text={`${60}%`}
                            styles={buildStyles({ pathColor: `green`, textColor: `green` })}
                        /></p>
                        <p className='skilled-paragraph'>MongoDB</p>
                    </div>
                    <div className='d-flex text-center my-5 mx-5'>
                        <p style={{ width: 50, height: 50 }}><CircularProgressbar
                            value={65}
                            text={`${percentage}%`}
                            styles={buildStyles({ pathColor: `red`, textColor: 'red' })}
                        /></p>
                        <p className='skilled-paragraph'>Express</p>
                    </div>

                </Container>
            </Container>

        </>
    )
}

export default Skilled
