import React from 'react';
import cn from 'classnames';

const Button = ({children, className, outline}) => {
    
  return (
    <button className={cn('button', className, {'button--outline': outline})}
    >
      {children}
    </button>
  );
};

export default Button;
