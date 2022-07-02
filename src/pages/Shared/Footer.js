import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { faFacebook, faTwitter, faGithub, faLinkedin, faSkype, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<footer className='bg-dark text-white py-4'>
			<div className='py-4 container'>
				<div className="row row-cols-2 row-cols-md-2 row-cols-lg-4 d-flex justify-content-start">

					<div className='col d-flex flex-column mb-3 mb-md-3 mb-lg-0'>
						<span className='fw-bold fs-5 mb-1'>Skill</span>
						<span><a className="text-decoration-none text-white">Portfolio</a></span>
						<span><a className="text-decoration-none text-white">Landing Page</a></span>
						<span><a className="text-decoration-none text-white">Blog Site</a></span>
						<span><a className="text-decoration-none text-white">E-commerce</a></span>
						<span><a className="text-decoration-none text-white">Dealer Website</a></span>
						<span><a className="text-decoration-none text-white">Travel Agency</a></span>
					</div>

					<div className='col d-flex flex-column mb-3 mb-md-3 mb-lg-0'>
						<span className='fw-bold fs-5 mb-1'>Technology</span>
						<span><a className="text-decoration-none text-white">HTML-5</a></span>
						<span><a className="text-decoration-none text-white">CSS-3</a></span>
						<span><a className="text-decoration-none text-white">JavaScript</a></span>
						<span><a className="text-decoration-none text-white">NodeJS</a></span>
						<span><a className="text-decoration-none text-white">MongoDB</a></span>
					</div>

					<div className='col d-flex flex-column mb-3 mb-md-3 mb-lg-0'>
						<span className='fw-bold fs-5 mb-1'>Framework & Library</span>
						<span><a className="text-decoration-none text-white">Bootstrap</a></span>
						<span><a className="text-decoration-none text-white">Tailwind-CSS</a></span>
						<span><a className="text-decoration-none text-white">ReactJS</a></span>
						<span><a className="text-decoration-none text-white">ExpressJS</a></span>
					</div>

					<div className='col d-flex flex-column mb-3 mb-md-3 mb-lg-0'>
						<span className='fw-bold fs-5 mb-1'>Tools</span>
						<span><a className="text-decoration-none text-white">VS Code</a></span>
						<span><a className="text-decoration-none text-white">Firebase</a></span>
						<span><a className="text-decoration-none text-white">Netlify</a></span>
						<span><a className="text-decoration-none text-white">Heroku</a></span>
						<span><a className="text-decoration-none text-white">Figma</a></span>
					</div>

					<div className='col d-flex flex-column mt-3'>
						<span className='fw-bold fs-5 mb-1'>Projects</span>
						<span><a href='https://panda-cm.web.app/' target="blank" className="text-decoration-none text-white">Panda Commerce</a></span>
						<span><a href='https://doctors-portal-d95b1.web.app/' target="blank" className="text-decoration-none text-white">Doctors Portal</a></span>
						<span><a href='https://warehouse-84aea.web.app/' target="blank" className="text-decoration-none text-white">Bike Corner</a></span>
						<span><a href='https://parts-car-11705.web.app/' target="blank" className="text-decoration-none text-white">Car Parts</a></span>
					</div>

					<div className='col d-flex flex-column mt-3'>
						<span className='fw-bold fs-5 mb-1'>Privacy Policy</span>
						<span><a className="text-decoration-none text-white">Privacy</a></span>
						<span><a className="text-decoration-none text-white">Policy</a></span>
					</div>



					<div className='col d-flex flex-column mt-3'>
						<span className='fw-bold fs-5 mb-1'>Social</span>
						<span><a href='https://www.facebook.com/coder.rakibul' target="blank" className="text-decoration-none text-white"><FontAwesomeIcon className='me-2' icon={faFacebook} />Facebook</a></span>
						<span><a href='https://twitter.com/coderrakibul' target="blank" className="text-decoration-none text-white"><FontAwesomeIcon className='me-2' icon={faTwitter} />Twitter</a></span>
						<span><a href='https://www.linkedin.com/in/coderrakibul/' target="blank" className="text-decoration-none text-white"><FontAwesomeIcon className='me-2' icon={faLinkedin} />Linkedin</a></span>
						<span><a href='https://join.skype.com/invite/vRYdJbWwVYXN' target="blank" className="text-decoration-none text-white"><FontAwesomeIcon className='me-2' icon={faSkype} />Skype</a></span>
						<span><a href='https://github.com/coderrakibul' target="blank" className="text-decoration-none text-white"><FontAwesomeIcon className='me-2' icon={faGithub} />Github</a></span>
					</div>

					<div className='col d-flex flex-column mt-3'>
						<span className='fw-bold fs-5 mb-1'>Contact</span>
						<span className="text-decoration-none text-white"><FontAwesomeIcon className='me-2' icon={faPhone} />+880 1518-703413</span>
						<span className="text-decoration-none text-white"><FontAwesomeIcon className='me-2' icon={faWhatsapp} />+880 1518-703413</span>
						<span className="text-decoration-none text-white"><FontAwesomeIcon className='me-2' icon={faEnvelope} />coder.rakibul@gmail.com</span>
					</div>

				</div>
			</div>

			<p className='text-center py-3 mt-1 mb-0'>Copyright &copy; Rakibul Islam, All Rights Are Reserved | {year}</p>
		</footer>
	);
};

export default Footer;