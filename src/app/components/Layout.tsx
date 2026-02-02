import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Settings, ChevronLeft } from 'lucide-react';
interface LayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
  showBack?: boolean;
  title?: string;
}
export function Layout({
  children,
  showNav = true,
  showBack = false,
  title
}: LayoutProps) {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-white min-h-[800px] rounded-[40px] border-[3px] border-black overflow-hidden relative shadow-2xl flex flex-col">
        {/* Status Bar Area (Decorative) */}
        <div className="h-6 w-full bg-white border-b border-gray-100 flex items-center justify-between px-6">
          <div className="text-[10px] font-bold">9:41</div>
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-full bg-black/10"></div>
            <div className="w-3 h-3 rounded-full bg-black/10"></div>
          </div>
        </div>

        {/* Header */}
        {(showBack || title) &&
        <div className="px-6 py-4 flex items-center">
            {showBack &&
          <Link
            to=".."
            relative="path"
            className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors">

                <ChevronLeft className="w-6 h-6" />
              </Link>
          }
            {title && <h1 className="text-xl font-bold ml-2">{title}</h1>}
          </div>
        }

        {/* Main Content */}
        <main className="flex-1 flex flex-col p-6 overflow-y-auto">
          {children}
        </main>

        {/* Bottom Navigation */}
        {showNav &&
        <div className="h-16 border-t-2 border-black bg-white flex items-center justify-around px-6 pb-2">
            <Link
            to="/languages"
            className={`p-2 rounded-xl transition-colors ${location.pathname.includes('language') ? 'bg-black text-white' : 'text-black hover:bg-gray-100'}`}>

              <Home className="w-6 h-6" />
            </Link>
            <button className="p-2 rounded-xl text-black hover:bg-gray-100 transition-colors">
              <User className="w-6 h-6" />
            </button>
            <button className="p-2 rounded-xl text-black hover:bg-gray-100 transition-colors">
              <Settings className="w-6 h-6" />
            </button>
          </div>
        }
      </div>
    </div>);

}