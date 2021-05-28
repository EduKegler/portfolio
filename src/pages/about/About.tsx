import React from 'react';
import './about.scss';

import profile from '../../assets/images/profile.jpeg'
import Progress from '../../components/progress/Progress';
import Skill from '../../components/skill/Skill';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import { useRefContext } from '../../components/app/App';

const About = React.memo(() => {
    const { aboutRef } = useRefContext();

    return (
        <section ref={aboutRef} className='about'>
            <SectionTitle title='About' />
            <div className='about-skills'>
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </div>
            <div className='about-profile'>
                <div className='about-bio'>
                    <img src={profile} alt='profile' width={200} height={200} />
                    <h1>Who is this?</h1>
                    <p>
                        Front-end developer with over 4 years of experience in web development, I worked with applications
                        from large companies focused on Real Estate and Work Safety.

                        Solid knowledge in Html, CSS and Javascript / Typescript and expertise in React.
                        Experiences with BDD, TDD, agile methodologies and backend languages like Java, PHP and C #.
                    </p>
                </div>
                <div className='about-progress'>
                    <Progress label='CSS' percentage={90} />
                    <Progress label='HTML' percentage={90} />
                    <Progress label='Javascript' percentage={90} />
                    <Progress label='React' percentage={90} />
                    <Progress label='Git' percentage={80} />
                </div>
            </div>
        </section>
    )
});

export default About;