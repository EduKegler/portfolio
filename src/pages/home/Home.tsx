import React from 'react';
import Button from '../../components/button/Button';
import './home.scss';
import { useRefContext } from '../../components/app/App';

const Home = React.memo(() => {
  const { scrollToAbout, homeRef } = useRefContext();
  return (
    <section ref={homeRef} className='home'>
      <div className='home-background' >
        <div className='home-stars-small' />
        <div className='home-stars-medium' />
      </div>
      <div className='home-apresentation'>
        <span>Hello, I'm<span className='home-name'> Eduardo Kegler</span>.</span>
        <span>I'm a front end web developer.</span>
        <Button onClick={scrollToAbout}>View My Work</Button>
      </div>
    </section>
  )
});

export default Home;