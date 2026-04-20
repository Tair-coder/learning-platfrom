import React from 'react';
import { cn } from '../../lib/utils';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}
export function Input({ className, label, error, ...props }: InputProps) {
  return (
    <div className="w-full space-y-1">
      {label &&
        <label className="text-sm font-medium text-foreground ml-1">
          {label}
        </label>
      }
      <input
        className={cn(
          'w-full px-4 py-3 bg-card text-foreground border-2 border-foreground rounded-xl outline-none focus:ring-2 focus:ring-ring/30 transition-all placeholder:text-muted-foreground',
          error && 'border-red-500 focus:ring-red-100',
          className
        )}
        {...props} />

      {error && <p className="text-xs text-red-500 ml-1">{error}</p>}
    </div>);

}