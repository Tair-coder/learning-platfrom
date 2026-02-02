'use client';
import React from 'react'

import { useRouter } from 'next/navigation';

import { Button } from '../../components/ui/Button'
import { BookIcon } from '../../components/ui/BookIcon'
import { useParams } from 'react-router-dom';
export default function CourseContentPage() {
    const navigate = useRouter()
    const { topicId } = useParams()
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
            <div className="w-full max-w-md bg-white rounded-[40px] border-[3px] border-black shadow-2xl flex flex-col p-8">
                <BookIcon className="w-24 h-24" />

                <h2 className="text-center text-lg font-medium">A1.TOPIC 1. My CV</h2>

                <div className="w-full space-y-6 pt-8">
                    <Button
                        fullWidth
                        onClick={() => navigate.push(`/quiz/${topicId}`)}
                        className="h-16 text-lg"
                    >
                        Quiz
                    </Button>

                    <Button
                        fullWidth
                        onClick={() => navigate.push(`/task/${topicId}`)}
                        className="h-16 text-lg"
                    >
                        Task
                    </Button>
                </div>
            </div>
        </div>
    )
}
