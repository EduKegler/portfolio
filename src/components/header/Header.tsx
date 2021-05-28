import React from 'react';
import { useRefContext } from '../app/App';
import './header.scss';

const Header = React.memo(() => {
  const { scrollToAbout, scrollToContact, scrollToHome, scrollToPortfolio } = useRefContext();

  return (
    <nav className='header'>
      <span onClick={scrollToHome}>Home</span>
      <span onClick={scrollToAbout}>About</span>
      <span onClick={scrollToPortfolio}>Portfolio</span>
      <span onClick={scrollToContact}>Contact</span>
    </nav>
  )
});

export default Header;