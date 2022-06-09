import React from 'react';

const Footer = () => {
	const date = new Date();
    const year = date.getFullYear();

	return (
		<div className='bg-dark text-white'>
			
			<p>Copyright &copy; All rights are reserved | {year}</p>
		</div>
	);
};

export default Footer;