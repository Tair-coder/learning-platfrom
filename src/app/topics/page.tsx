'use client';
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '../components/ui/Button'
import { BookIcon } from '../components/ui/BookIcon'
import { ArrowBigLeft, Download } from 'lucide-react'


// TODO: make topics dynamic, fetch from backend
const AVAILABLE_TOPICS_LANG = {
    'kazakh': ['topic-1'],
    'english': ['topic-4', 'topic-5', 'topic-6'],
}

/**
 * 
 * @returns page for selecting topic of learning, placed after level selection
 */
export default function TopicSelectionPage() {
    const navigate = useRouter()
    const searchParams = useSearchParams()
    const selectTopic = (topicId: string) => {
        navigate.push(`/course/${topicId}`)
    }
    const downloadBtnHandler = () => {
        const link = document.createElement('a');
        link.href = '/assets/b1_kz.pdf';
        link.download = 'b1_kz.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
            <div className="w-full max-w-md bg-white rounded-[40px] border-[3px] border-black shadow-2xl flex flex-col p-8">
                <ArrowBigLeft className="cursor-pointer mb-4" onClick={() => navigate.back()} />

                <div className='flex justify-start items-center'>
                    <BookIcon className="w-24 h-24" />
                    <h2 className="text-center text-lg ml-4 font-medium max-w-[200px] mt-4">
                        {searchParams.get('topicId')}. Choose topic for learning
                    </h2>
                </div>

                <div className="w-full space-y-4 pt-4 flex-1 mb-3">
                    {AVAILABLE_TOPICS_LANG['kazakh'].map(topic => (
                        <Button
                            key={topic}
                            fullWidth
                            onClick={() => selectTopic(topic)}
                            className="text-left justify-start pl-8"
                        >
                            {`TOPIC ${topic.split('-')[1]}. ${topic === 'topic-1' ? 'My CV' : 'Topic Name'}`}
                        </Button>
                    ))}
                </div>

                <Button
                    fullWidth
                    variant="secondary"
                    className="uppercase text-sm border-2 border-black mt-auto"
                    onClick={downloadBtnHandler}

                >
                    <Download className="w-4 h-4 mr-2" />
                    Download Syllabus
                </Button>
            </div>
        </div>
    )
}
