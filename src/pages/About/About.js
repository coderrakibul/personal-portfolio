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
                    <h5> I am an enthusiastic software developer, having expertise in web application development. Highly interested in Web developmen
                        <br /><br />

                        Then I learn frameworks and library of these. like, Bootstrap, Tailwind CSS, React
                        JS. I have made a lot of demo projects with this. I have also knowledge about these
                        technologies. Such as, MongoDB, Node JS, Express JS and Next JS.</h5>
                </div>
            </div>
        </section>
    );
};

export default About;