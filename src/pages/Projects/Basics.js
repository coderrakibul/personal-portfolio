import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import Basic from './Basic';

const Basics = () => {
    const [basics, setBasics] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('basic.json')
            .then(res => res.json())
            .then(data => {
                setBasics(data)
                setLoading(false)
            });
    }, []);

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <section className='container mb-5 border shadow p-4'>
            <h4>Basic Projects (HTML, CSS and Bootstrap)</h4>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                {
                    basics.map(basic => <Basic
                        key={basic.id}
                        basic={basic}
                    ></Basic>)
                }
            </div>
        </section>
    );
};

export default Basics;