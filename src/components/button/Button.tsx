import React from 'react';
import './button.scss';

interface ButtonProps {
  children: React.ReactChild;
  onClick?: () => void;
}

const Button = React.memo(({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className='button'>{children}</button>
  )
});

export default Button;