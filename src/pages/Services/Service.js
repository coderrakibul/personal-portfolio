import React from 'react';

const Service = ({ service }) => {
    const { name, image, price, amount, description } = service;
    return (
        <div class="col g-4 shadow p-2">
            <div class="card h-100">
                <h5 class="text-center py-2 border border-dark">{name}</h5>
                <div className='img-fluid p-1 border border-warning'>
                    <img className='img-fluid' src={image} class="card-img-top" alt="serviceimage" />
                </div>
                <div class="card-body">
                    <h6>Price: <span className='text-color fw-bold'>${price}</span> | {amount}</h6>
                    
                </div>
            </div>
        </div>
    );
};

export default Service;