import React from 'react';
import Image from '../../images/banner.png';

const Banner = () => {
    return (
        <section className='mt-5 mb-5'>
            <div className='row d-flex g-0'>
                <div className='col-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-center'>
                    <div className='mb-5 mb-md-0 mb-lg-0'>
                        <h6 className='fw-bold'>Hello,</h6>
                        <h1 className=' display-1 fw-bold'>I'm <span className='text-color'>Rakibul</span></h1>
                        <h3>Professional <span className='text-color fw-bold'>MERN STACK </span> Developer</h3>
                        <button className='btn btn-primary'><a className='text-white fw-bold text-decoration-none' href="Rakibul-Resume.pdf" download="Rakibul-Resume.pdf">Download Resume</a></button>
                    </div>

                </div>

                <div className='col-lg-6 col-md-6 col-12 d-flex justify-content-center'>
                    <img className='img-fluid' src={Image} alt="banner" />
                </div>

            </div>
        </section>
    );
};

export default Banner;