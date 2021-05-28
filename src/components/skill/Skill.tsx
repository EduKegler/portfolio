import React from 'react';
import './skill.scss';

import lamp from '../../assets/images/lamp.png'

const Skill = React.memo(() => {
  return (
    <div className='skill'>
      <img src={lamp} alt='lamp' width={200} height={200} />
      <h2>Responsive</h2>
      <p>My layouts will work on any device, big or small.</p>
    </div>
  )
});

export default Skill;