import React from 'react';
import { BookOpen } from 'lucide-react';
export function BookIcon({ className }: { className?: string; }) {
  return (
    <div
      className={`inline-flex items-center justify-center p-4 border-2 border-foreground rounded-2xl bg-card ${className}`}>

      <BookOpen className="w-8 h-8 text-foreground" strokeWidth={2.5} />
    </div>);

}