import React from 'react';
import './button.scss';

interface ButtonProps {
  children: React.ReactChild;
  onClick?: () => void;
  className?: string;
}

const Button = React.memo(({ children, onClick, className }: ButtonProps) => {
  
  return (
    <button 
      onClick={onClick} 
      className={className ? `button ${className}` : 'button'}
    >{children}</button>
  )
});

export default Button;