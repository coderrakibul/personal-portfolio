import React from 'react';

const Service = ({ service }) => {
    const { name, image, price, amount, description } = service;
    return (
        <div className="col g-4 shadow p-2">
            <div className="card h-100">
                <h5 className="text-center py-2 border border-dark">{name}</h5>
                <div className='img-fluid p-1 border border-warning'>
                    <img className='img-fluid' src={image} alt="serviceimage" />
                </div>
                <div className="card-body">
                    <h6>Price: <span className='text-color fw-bold'>${price}</span> | {amount}</h6>
                    <button className='btn btn-primary w-100 fw-bold'>Show More</button>
                </div>
            </div>
        </div>
    );
};

export default Service;