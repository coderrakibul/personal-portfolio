import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <section className='container mt-5 mb-5'>
            <h2 className='text-center'>Visit All The Services</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </section>
    );
};

export default Services;