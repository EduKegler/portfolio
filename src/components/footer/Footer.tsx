import { GitHub, LinkedIn } from '@material-ui/icons';
import React from 'react';
import './footer.scss';

const Footer = React.memo(() => {
  return (
    <footer className='footer'>
      <div className='footer-icons'>
        <a target='_blank' href='https://www.linkedin.com/in/eduardokegler/'>
          <LinkedIn className='ico-in' />
        </a>
        <a target='_blank' href='https://github.com/EduKegler/'>
          <GitHub className='ico-gh' />
        </a>
      </div>
      <span className='footer-copyright'>
        Eduardo Kegler@2021
      </span>
    </footer>
  )
});

export default Footer;