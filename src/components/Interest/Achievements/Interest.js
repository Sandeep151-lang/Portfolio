import React from 'react'
import { Container } from 'react-bootstrap'
import './interest.css'

const Interest = () => {
    return (
        <>
            <Container className='d-flex text-center  inter-achieve'>
                <Container className='inter-para'>
                    <h1 className='justify-content-evenly text-center'>Interest</h1>
                    <hr />
                    <p>Watching Movies</p>
                    <p>Sports</p>
                    <p>Gaming</p>
                    <p>Traveling</p>
                    <p>Cooking</p>
                    <p>Art</p>
                    <p>Reading</p>
                </Container>
                <Container className='achievemnets'>
                    <h1 className='justify-content-evenly text-center'>Achievements</h1>
                    <hr />
                    <p>Developed or implemented new procedures or systems</p>
                    <p>Come up with a new idea that improved things</p>
                    <p>Contributed to good customer service</p>
                    <p>Identified a problem and solved it</p>

                </Container>
            </Container>
        </>

    )
}

export default Interest
