'use client';
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '../components/ui/Button'
import { BookIcon } from '../components/ui/BookIcon'
import { ArrowBigLeft, Download } from 'lucide-react'
export default function TopicSelectionPage() {
    const navigate = useRouter()
    const selectTopic = (topicId: string) => {
        navigate.push(`/course/${topicId}`)
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
            <div className="w-full max-w-md bg-white rounded-[40px] border-[3px] border-black shadow-2xl flex flex-col p-8">
                <ArrowBigLeft className="cursor-pointer" onClick={() => navigate.push('/levels')} />

                <div className="flex col items-center mb-8">
                    <BookIcon className="w-24 h-24" />
                    <h2 className="text-center text-xl font-bold">A1</h2>

                </div>


                <div className="w-full space-y-4 pt-4 flex-1 mb-3">
                    <Button
                        fullWidth
                        onClick={() => selectTopic('topic-1')}
                        className="text-left justify-start pl-8"
                    >
                        TOPIC 1. My CV
                    </Button>
                </div>

                <Button
                    fullWidth
                    variant="secondary"
                    className="uppercase text-sm border-2 border-black mt-auto"
                >
                    <Download className="w-4 h-4 mr-2" />
                    Download Syllabus
                </Button>
            </div>
        </div>
    )
}
