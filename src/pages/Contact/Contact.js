import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import React from 'react';


const Contact = () => {
    return (
        <section className='container mt-5 mb-5'>
            <h2 className='text-center mb-4'>Contact Me</h2>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                <div class="col">
                    <div class="card h-100 bg-light">

                        <div class="card-body text-center">
                            <h5 class="card-title"><FontAwesomeIcon className='me-2 text-color' icon={faPhone} />Phone</h5>
                            <p class="card-text fw-bold">+880 1518-703413</p>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100 bg-light">

                        <div class="card-body text-center">
                            <h5 class="card-title"><FontAwesomeIcon className='me-2 text-color' icon={faEnvelope} />Email</h5>
                            <p class="card-text fw-bold">coder.rakibul@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100 bg-light">

                        <div class="card-body text-center">
                            <h5 class="card-title"><FontAwesomeIcon className='me-2 text-color' icon={faLocation} />Location</h5>
                            <p class="card-text fw-bold">Bogura, Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>





            </div>
        </section>
    );
};

export default Contact;