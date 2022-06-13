import React from 'react';
import AboutImage from '../../images/aboutme.jpg';

const About = () => {
    return (
        <section className='container mt-5 mb-5'>
            <h2 className='text-center mb-4'>About Me</h2>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2 align-items-center'>
                <div className='col mb-5 mb-md-0 mb-lg-0 d-flex justify-content-center'>
                    <img className='rounded-circle w-75 shadow' src={AboutImage} alt="aboutme" />
                </div>

                <div className='col'>
                    <h3 className="fw-bold">
                        Hi! I'm Rakibul Islam. I'm a <strong class="text-color">React Front-End</strong> Web
                        Developer.
                    </h3>
                    <h5> I am an enthusiastic Web Developer, having expertise in web application development, javascript problem solving, server side development and mobile app development. But highly interested in Client Side web development.
                        <br /><br />

                        The creation of this portfolio provided me with a chance to reflect on both my technical skills and my professional skills in several years. As you browse around, I hope that you are able to gain a strong sense about me. Each section of this portfolio represents a small piece of information that reflects who I am and what I am capable of.</h5>
                </div>
            </div>
        </section>
    );
};

export default About;