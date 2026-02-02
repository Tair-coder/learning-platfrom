import React from 'react';
import { cn } from '../../lib/utils';
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white border-2 border-black rounded-3xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
        className
      )}
      {...props}>

      {children}
    </div>);

}