import React from 'react';
import { Accordion } from 'react-bootstrap';
import FaqImage from '../../images/faq.webp';

const Faq = () => {
    return (
        <section className='container mt-5 mb-5'>
            <h2 className='text-center mb-4'>Frequently Asked Question</h2>
            <div className='row d-flex justify-content-center g-0'>
                <div className='col-12 col-md-6 col-lg-6 d-flex justify-content-center mb-5 mb-md-0 mb-lg-0'>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Why Choose Me?</Accordion.Header>
                            <Accordion.Body>
                                I am a professional Front-End developer. I'm working in this field more than
                                2 years. I have enough skills and good at on this
                            </Accordion.Body>
                        </Accordion.Item>


                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How Is Your Service Quality?</Accordion.Header>
                            <Accordion.Body>
                                My main goal is client satisfaction. So I can try always to keep my
                                best.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>How Is Your Delivery Process?</Accordion.Header>
                            <Accordion.Body>
                                Don't worry, I always deliver a project in time
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>How Do You Handle A Client?</Accordion.Header>
                            <Accordion.Body>
                                I response a client very quickly. Then discuss with him/her about the
                                project. And I work according to my client demand.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Tell Me About Your Project Management.</Accordion.Header>
                            <Accordion.Body>
                                This is very simple. At first I get all the document from my client what I
                                need for the project. Then I start my work.
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </div>

                <div className='col-12 col-md-6 col-lg-6 d-flex justify-content-center'>
                    <img className='w-50' src={FaqImage} alt="faqimage" />
                </div>

            </div>
        </section>
    );
};

export default Faq;