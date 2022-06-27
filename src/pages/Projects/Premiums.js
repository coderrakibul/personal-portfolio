import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import Premium from './Premium';

const Premiums = () => {
    const [premiums, setPremiums] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('premium.json')
            .then(res => res.json())
            .then(data => {
                setPremiums(data)
                setLoading(false)
            });
    }, []);

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <section className='container mb-5 border shadow p-4'>
            <h4>Best Projects (MERN Stack)</h4>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                {
                    premiums.map(premium => <Premium
                        key={premium.id}
                        premium={premium}
                    ></Premium>)
                }
            </div>
        </section>
    );
};

export default Premiums;