import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='container d-flex justify-content-center align-items-center vh-100 mt-5- pt-5-'>
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loading;