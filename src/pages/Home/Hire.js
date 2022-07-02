import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Hire = () => {
    return (
        <section className='container mt-5 mb-5'>
            <h2 className='text-center text-uppercase'>Hire Me</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                <div className="col">
                    <div className="card h-100 bg-light">

                        <div className="card-body text-center">
                            <FontAwesomeIcon className='text-color fw-bold fs-1 mb-2' icon={faClock} />
                            <h5 className="card-title">Per Hour</h5>
                            <h4 className="card-text fw-bold">7$</h4>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100 bg-light">

                        <div className="card-body text-center">
                            <FontAwesomeIcon className='text-color fw-bold fs-1 mb-2' icon={faClock} />
                            <h5 className="card-title">Per Day</h5>
                            <h4 className="card-text fw-bold">50$</h4>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100 bg-light">

                        <div className="card-body text-center">
                            <FontAwesomeIcon className='text-color fw-bold fs-1 mb-2' icon={faClock} />
                            <h5 className="card-title">Per Month</h5>
                            <h4 className="card-text fw-bold">1200$</h4>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hire;