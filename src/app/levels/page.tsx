"use client";

import React from 'react'
import { Button } from '../components/ui/Button'
import { BookIcon } from '../components/ui/BookIcon'
import { useRouter } from "next/navigation";
import { ArrowBigLeft } from 'lucide-react';

export default function LevelSelectionPage() {
    const navigate = useRouter()
    const selectLevel = (level: string) => {
        navigate.push(`/topics?topicId=${level}`)
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
            <div className="w-full max-w-md bg-white rounded-[40px] border-[3px] border-black shadow-2xl flex flex-col p-8">
                <ArrowBigLeft className="cursor-pointer" onClick={() => navigate.push("/languages")} />
                <div className='flex justify-center items-center'>
                    <BookIcon className="w-24 h-24" />
                    <h2 className="text-center text-lg font-medium max-w-[200px] mt-4">
                        Choose enable levels for learning
                    </h2>
                </div>


                <div className="w-full space-y-4 pt-4">
                    <Button
                        fullWidth
                        onClick={() => selectLevel('A1')}
                        className="uppercase"
                    >
                        A1
                    </Button>

                    <Button
                        fullWidth
                        onClick={() => selectLevel('A2')}
                        className="uppercase"
                    >
                        A2
                    </Button>
                </div>
            </div>
        </div>
    )
}
