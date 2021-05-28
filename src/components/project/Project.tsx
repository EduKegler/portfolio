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
                <div>Intelliagent</div>
                <div>React/Typescript/C#</div>
                <Button>Details</Button>
            </div>
        </article>
    )
});

export default project;