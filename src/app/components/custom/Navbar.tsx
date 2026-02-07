'use client';

import { Home, Settings, User } from "lucide-react";
import { useRouter } from "next/navigation";


/**
 * 
 * @returns component for navigation between pages, placed at the bottom of the screen
 */
export default function Navbar() {
    const navigate = useRouter()
    return (
        <nav className="w-full h-16 bg-white mt-4  flex items-center justify-center bg-light p-4 gap-10 border-2 border-black rounded-[40px]">
            <button onClick={() => navigate.push('/languages')} className="text-2xl cursor-pointer"><Home /></button>
            <button onClick={() => navigate.push('/settings')} className="text-2xl cursor-pointer"><Settings /></button>
            <button onClick={() => navigate.push('/profile')} className="text-2xl cursor-pointer"><User /></button>
        </nav>

    )
}