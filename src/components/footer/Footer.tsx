import React from 'react';
import In from '../../assets/images/linkedin.svg';
import './footer.scss';

const Footer = React.memo(() => {
  return (
    <footer className='footer'>
      <div className='footer-icons'>
        <img src={In} alt='in' />
      </div>
      Eduardo Kegler@2021
    </footer>
  )
});

export default Footer;