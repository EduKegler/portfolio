import React from 'react';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import Project from '../../components/project/Project';
import './portfolio.scss';
import { useRefContext } from '../../components/app/App';

const Portfolio = React.memo(() => {
    const { portfolioRef } = useRefContext();

    return (
        <section ref={portfolioRef} className='portfolio'>
            <SectionTitle title='Portfolio' />
            <div className='portfolio-items' >
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </section>
    )
});

export default Portfolio;