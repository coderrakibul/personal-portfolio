import React from 'react';
import imoji from '../../src/images/imoji.png';

const NotFound = () => {
    return (
        <section className='container mt-5 mb-5'>
            <div className='text-center'>
                <div className='flex justify-center items-center h-screen'>
                    <div className=''>
                        <img className='w-25' src={imoji} alt="imoji" />
                        <h1 className='fw-bold display-1 text-danger'>404!</h1>
                        <h3 className='fw-bold display-6 text-danger'>Page Not Found</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;