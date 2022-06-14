import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            });


    }, []);


    if (loading) {
        return <Loading></Loading>
    }



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