import React from 'react'
import { cn } from '../../lib/utils'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  fullWidth?: boolean
}
export function Button({
  className,
  variant = 'primary',
  fullWidth = false,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none'
  const variants = {
    primary:
      'bg-white text-black border-2 border-black rounded-xl hover:bg-gray-50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px]',
    secondary:
      'bg-gray-100 text-black border-2 border-transparent rounded-xl hover:bg-gray-200',
    ghost: 'bg-transparent text-black hover:bg-gray-100 rounded-lg',
  }
  const sizes = 'px-6 py-3 text-base'
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes,
        fullWidth ? 'w-full' : '',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
// // Simple utility for class merging if not already present
// function cn(...classes: (string | undefined | null | false)[]) {
//   return classes.filter(Boolean).join(' ')
// }
