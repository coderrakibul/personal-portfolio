import React from 'react';
import Banner from '../../images/banner.png';

const Home = () => {

    return (
        <div className='row d-flex g-0'>
            <div className='col-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-center'>
                <div>
                    <h6 className=''>Hello,</h6>
                    <h1 className=' display-1 fw-bold'>I'm <span className='text-color'>Rakibul</span></h1>
                    <h3>Professional <span className='text-color '>Front-End </span> Developer</h3>
                </div>

            </div>

            <div className='col-lg-6 col-md-6 col-12 d-flex justify-content-center'>
                <img className='img-fluid' src={Banner} alt="banner" />
            </div>

        </div>
    );
};

export default Home;