import React from 'react';
import { useRefContext } from '../app/App';
import './header.scss';

const Header = React.memo(() => {
  const {
    scrollToAbout, scrollToContact, scrollToHome, scrollToPortfolio,
    aboutRef, contactRef, homeRef, portfolioRef
  } = useRefContext();

  const checkSection = (ref) =>
    window.pageYOffset >= ref?.offsetTop &&
    window.pageYOffset < ref?.offsetTop + ref?.offsetHeight

  const handleSetActive = () => {
    if (checkSection(aboutRef?.current)) {
      return 'about';
    } else if (checkSection(contactRef?.current)) {
      return 'contact';
    } else if (checkSection(homeRef?.current)) {
      return 'home';
    } else if (checkSection(portfolioRef?.current)) {
      return 'portfolio';
    }
  }
  const headerRef = React.useRef(null);
  const [active, setActive] = React.useState(handleSetActive());
  let sticky = 0;

  React.useEffect(() => {
    document.addEventListener('scroll', () => {
      handleScroll();
      setActive(handleSetActive());
    })
    sticky = headerRef?.current?.offsetTop;
    handleScroll();
  }, []);

  console.log(active)

  const handleScroll = () => {
    if (window.pageYOffset > sticky) {
      headerRef.current.classList.add("header-sticky");
    } else {
      headerRef.current.classList.remove("header-sticky");
    }
  }

  const isActive = (key: string) => active === key ? 'header-item-active' : '';

  return (
    <nav ref={headerRef} className='header'>
      <span className={isActive('home')} onClick={scrollToHome}>HOME</span>
      <span className={isActive('about')} onClick={scrollToAbout}>ABOUT</span>
      <span className={isActive('portfolio')} onClick={scrollToPortfolio}>PORTFOLIO</span>
      <span className={isActive('contact')} onClick={scrollToContact}>CONTACT</span>
    </nav>
  )
});

export default Header;