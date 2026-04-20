// app/topics/TopicSelectionContent.tsx
'use client';
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '../components/ui/Button'
import { BookIcon } from '../components/ui/BookIcon'
import { ArrowBigLeft, Download } from 'lucide-react'
import {
    getTopics,
    normalizeLanguage,
    normalizeLevel,
} from '../lib/catalog'

export default function TopicSelectionContent() {
    const navigate = useRouter()
    const searchParams = useSearchParams()
    const lang = normalizeLanguage(searchParams.get('lang'))
    const levelParam = searchParams.get('level') ?? searchParams.get('topicId')
    const level = normalizeLevel(levelParam, lang)
    const topics = getTopics(lang, level)

    const selectTopic = (topicId: string) => {
        navigate.push(`/course/${topicId}?lang=${lang}&level=${level}`)
    }

    const downloadBtnHandler = () => {
        const link = document.createElement('a');
        const isKazakhB1 = lang === 'kazakh' && level === 'B1'
        link.href = isKazakhB1 ? '/assets/b1_kz.pdf' : '/assets/b1_kz.pdf'
        link.download = isKazakhB1 ? 'b1_kz.pdf' : 'b1_kz.pdf'
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4 font-sans">
            <div className="w-full max-w-md bg-card text-foreground rounded-[40px] border-[3px] border-foreground shadow-2xl flex flex-col p-8">
                <ArrowBigLeft className="cursor-pointer mb-4" onClick={() => navigate.back()} />

                <div className='flex justify-start items-center'>
                    <BookIcon className="w-24 h-24" />
                    <h2 className="text-center text-lg ml-4 font-medium max-w-[200px] mt-4">
                        {level}. Choose topic for learning
                    </h2>
                </div>

                <div className="w-full space-y-4 pt-4 flex-1 mb-3">
                    {topics.map((topic) => (
                        <Button
                            key={topic.id}
                            fullWidth
                            onClick={() => selectTopic(topic.id)}
                            className="text-left justify-start pl-8"
                        >
                            {`TOPIC ${topic.id.split('-')[1]}. ${topic.title}`}
                        </Button>
                    ))}
                    {topics.length === 0 && (
                        <div className="text-sm text-muted-foreground">
                            Coming soon...
                        </div>
                    )}
                </div>

                <Button
                    fullWidth
                    variant="secondary"
                    className="uppercase text-sm border-2 border-foreground mt-auto"
                    onClick={downloadBtnHandler}
                >
                    <Download className="w-4 h-4 mr-2" />
                    Download Syllabus
                </Button>
            </div>
        </div>
    )
}