import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import Standard from './Standard';

const Standards = () => {
    const [standards, setStandards] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('standard.json')
            .then(res => res.json())
            .then(data => {
                setStandards(data)
                setLoading(false)
            });
    }, []);

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <section className='container mb-5 border shadow p-4'>
            <h4>Standard Projects (JavaScript & React JS)</h4>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                {
                    standards.map(standard => <Standard
                        key={standard.id}
                        standard={standard}
                    ></Standard>)
                }
            </div>
        </section>
    );
};

export default Standards;