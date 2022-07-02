import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReachOut = () => {
    return (
        <section className='container mt-5 mb-5'>
            <h2 className='text-center mt-5 text-uppercase fw-bold'>Contact Me</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">

                <div className="col">
                    <div className="card h-100 bg-light">

                        <div className="card-body text-center">
                            <h5 className="card-title"><FontAwesomeIcon className='me-2 text-success' icon={faPhone} />Phone</h5>
                            <p className="card-text fw-bold">+880 1518-703413</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100 bg-light">

                        <div className="card-body text-center">
                            <h5 className="card-title"><FontAwesomeIcon className='me-2 text-success' icon={faWhatsapp} />WhatsApp</h5>
                            <p className="card-text fw-bold">+880 1518-703413</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100 bg-light">

                        <div className="card-body text-center">
                            <h5 className="card-title"><FontAwesomeIcon className='me-2 text-danger' icon={faEnvelope} />Email</h5>
                            <p className="card-text fw-bold">coder.rakibul@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100 bg-light">

                        <div className="card-body text-center">
                            <h5 className="card-title"><FontAwesomeIcon className='me-2 text-info' icon={faLocation} />Address</h5>
                            <p className="card-text fw-bold">Bogura, Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ReachOut;