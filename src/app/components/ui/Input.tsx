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
      <label className="text-sm font-medium text-gray-700 ml-1">
          {label}
        </label>
      }
      <input
        className={cn(
          'w-full px-4 py-3 bg-white border-2 border-black rounded-xl outline-none focus:ring-2 focus:ring-black/10 transition-all placeholder:text-gray-400',
          error && 'border-red-500 focus:ring-red-100',
          className
        )}
        {...props} />

      {error && <p className="text-xs text-red-500 ml-1">{error}</p>}
    </div>);

}