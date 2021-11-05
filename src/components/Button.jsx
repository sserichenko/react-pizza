import React from 'react';
import cn from 'classnames';

const Button = ({children, className, outline, ...props}) => {
    
  return (
    <button {...props} className={cn('button', className, {'button--outline': outline})}
    >
      {children}
    </button>
  );
};

export default Button;
