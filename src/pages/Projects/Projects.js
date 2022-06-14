import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data)
                setLoading(false)
            });
    }, []);

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <section className='container mt-5 mb-5'>
            <h2 className='text-center'>Visit All The Projects</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                {
                    projects.map(project => <Project
                        key={project.id}
                        project={project}
                    ></Project>)
                }
            </div>
        </section>
    );
};

export default Projects;