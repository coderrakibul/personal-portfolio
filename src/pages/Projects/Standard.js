import React from 'react';

const Standard = ({ standard }) => {
    const { name, image, url } = standard;
    return (
        <div className="col g-4 shadow p-2">
            <div className="card h-100">
                <h5 className="text-center py-2 border border-dark bg-light">{name}</h5>
                <div className='img-fluid p-1 border border-warning'>
                    <img className='img-fluid' src={image} alt="projectimage" />
                </div>
                <div className="card-body">

                    <a target="blank" href={url}><button className='btn btn-info w-100 fw-bold'>Visit The Site</button></a>
                </div>
            </div>
        </div>
    );
};

export default Standard;