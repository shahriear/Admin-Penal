import React from 'react';
import { cn } from '../lib/utils';

export const Button = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        'px-4 py-2 rounded-lg transition-colors duration-200',
        ' hover:bg-black hover:text-white',
        className
      )}
      {...props}
    />
  );
});

Button.displayName = 'Button';
