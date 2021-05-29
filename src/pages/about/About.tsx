import React from 'react';
import './about.scss';

import profile from '../../assets/images/profile.jpeg'
import Progress from '../../components/progress/Progress';
import Skill from '../../components/skill/Skill';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import { useRefContext } from '../../components/app/App';
import { Devices, Speed, LineWeight, TrendingUp } from '@material-ui/icons';

const About = React.memo(() => {

    const { aboutRef } = useRefContext();

    const skills = [
        { name: 'Fast', description: 'Fast load times and lag free interaction, my highest priority.', icon: <Speed /> },
        { name: 'Responsive', description: 'My layouts will work on any device, big or small.', icon: <Devices /> },
        { name: 'Intuitive', description: 'My layouts will work on any device, big or small.', icon: <LineWeight /> },
        { name: 'Dynamic', description: 'Websites don\'t have to be static, I love making pages come to life.', icon: <TrendingUp /> },
    ]

    return (
        <section ref={aboutRef} className='about'>
            <div className='about-container'>
                <SectionTitle title='ABOUT' />
                <div className='about-skills'>
                    {skills.map(skill =>
                        <Skill key={skill.name} name={skill.name} description={skill.description} icon={skill.icon} />
                    )}
                </div>
                <div className='about-profile'>
                    <div className='about-bio'>
                        <img src={profile} alt='profile' width={200} height={200} />
                        <h1>Eduardo Kegler</h1>
                        <p>Front-end developer with over 4 years of experience in web development.</p>
                        <p>Work with applications from large companies focused on Real Estate and Work Safety.</p>
                    </div>
                    <div className='about-progress'>
                        <Progress label='CSS' percentage={90} />
                        <Progress label='HTML' percentage={90} />
                        <Progress label='Javascript' percentage={90} />
                        <Progress label='ReactJS' percentage={90} />
                        <Progress label='Typescript' percentage={80} />
                        <Progress label='Git' percentage={80} />
                        <Progress label='Figma' percentage={50} />
                        <Progress label='ReactNative' percentage={40} />
                    </div>
                </div>
            </div>
        </section>
    )
});

export default About;