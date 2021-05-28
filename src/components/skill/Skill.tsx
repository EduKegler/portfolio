import React from 'react';
import './skill.scss';
interface SkillProps {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const Skill = React.memo(({ name, description, icon }: SkillProps) => {
  return (
    <div className='skill'>
      <div className='skill-icon'>
        {icon}
      </div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  )
});

export default Skill;