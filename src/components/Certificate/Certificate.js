import React from 'react'
import certificate from '../assets/GuviCertification.png'
import certificate1 from '../assets/sample2.png'

const Certificate = () => {
    return (
        <div>
            <div className='mt-5 certificate text-center'>
                <img src={certificate} width='50%' height='50%' alt='certificate' className='cert-img' />
            </div>
            <div className='mt-5 certificate text-center'>
                <img src={certificate1} width='50%' height='50%' alt='certificate' className='cert-img' />
            </div>

        </div>
    )
}

export default Certificate
