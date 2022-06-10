import React from 'react';

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<footer className='bg-dark text-white'>
			<div className='py-4'>
				<div className="d-flex justify-content-around container">
					<div className='d-flex flex-column justify-content-center'>
						<span className='fw-bold fs-5'>Services</span>
						<span><a className="text-decoration-none text-white">Branding</a></span>
						<span><a className="text-decoration-none text-white">Design</a></span>
						<span><a className="text-decoration-none text-white">Marketing</a></span>
						<span><a className="text-decoration-none text-white">Advertisement</a></span>
					</div>
					<div className='d-flex flex-column justify-content-center'>
						<span className='fw-bold fs-5'>Company</span>
						<span><a className="text-decoration-none text-white">About us</a></span>
						<span><a className="text-decoration-none text-white">Contact</a></span>
						<span><a className="text-decoration-none text-white">Jobs</a></span>
						<span><a className="text-decoration-none text-white">Press kit</a></span>
					</div>
					<div className='d-flex flex-column justify-content-center'>
						<span className='fw-bold fs-5'>Legal</span>
						<span><a className="text-decoration-none text-white">Terms of use</a></span>
						<span><a className="text-decoration-none text-white">Privacy policy</a></span>
						<span><a className="text-decoration-none text-white">Cookie policy</a></span>
					</div>
				</div>
			</div>

			<p className='text-center py-2 mt-1'>Copyright &copy; All rights are reserved | {year}</p>
		</footer>
	);
};

export default Footer;