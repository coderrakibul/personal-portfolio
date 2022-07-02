import { faWhatsapp, faFacebook, faTwitter, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import React from 'react';


const Contact = () => {
    return (
        <section className='container mt-5 mb-5'>
            <h2 className='text-center mt-5 text-uppercase fw-bold mb-4'>Contact Me</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">

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

                <div className="col">
                    <div className="card h-100 bg-light">
                        <div className="card-body text-center">
                            <h5 className="card-title"><FontAwesomeIcon className='me-2 text-primary' icon={faFacebook} />Facebook</h5>
                            <p className="card-text fw-bold"> <a className='text-decoration-none' href="https://web.facebook.com/coder.rakibul" target="_blank" rel="noopener noreferrer">Facebook</a></p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100 bg-light">
                        <div className="card-body text-center">
                            <h5 className="card-title"><FontAwesomeIcon className='me-2 text-primary' icon={faTwitter} />Twitter</h5>
                            <p className="card-text fw-bold"> <a className='text-decoration-none' href="https://twitter.com/coderrakibul" target="_blank" rel="noopener noreferrer">Twitter</a></p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100 bg-light">
                        <div className="card-body text-center">
                            <h5 className="card-title"><FontAwesomeIcon className='me-2 text-primary' icon={faLinkedin} />LinkedIn</h5>
                            <p className="card-text fw-bold"> <a className='text-decoration-none' href="https://www.linkedin.com/in/coderrakibul/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100 bg-light">
                        <div className="card-body text-center">
                            <h5 className="card-title"><FontAwesomeIcon className='me-2 text-primary' icon={faSkype} />Skype</h5>
                            <p className="card-text fw-bold"> <a className='text-decoration-none' href="https://join.skype.com/invite/vRYdJbWwVYXN" target="_blank" rel="noopener noreferrer">Skype</a></p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;