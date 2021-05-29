import React from 'react';
import './project.scss';
import fathom from '../../assets/images/fathom.png'
import Button from '../button/Button';

interface ProjectProps {
}

const project = React.memo(({ }: ProjectProps) => {
    return (
        <article className='project'>
            <img src={fathom} alt='project' />
            <div className="project-details">
                <div className='project-title'>Intelliagent</div>
                <div className='project-stack'>React/Typescript/C#</div>
                <Button className='project-button'>DETAILS</Button>
            </div>
        </article>
    )
});

export default project;