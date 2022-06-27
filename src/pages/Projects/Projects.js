import React from 'react';
import Basics from './Basics';
import Premiums from './Premiums';
import Standards from './Standards';


const Projects = () => {


    return (
        <div>
            <h2 className='text-center mt-5'>Visit All The Projects</h2>
            <Premiums></Premiums>
            <Standards></Standards>
            <Basics></Basics>
        </div>
    );
};

export default Projects;