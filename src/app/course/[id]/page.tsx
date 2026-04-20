'use client';
import React from 'react'

import { useParams, useRouter, useSearchParams } from 'next/navigation';

import { Button } from '../../components/ui/Button'
import { BookIcon } from '../../components/ui/BookIcon'
import { findTopic, normalizeLanguage, normalizeLevel } from '../../lib/catalog'
export default function CourseContentPage() {
    const navigate = useRouter()
    const params = useParams<{ id: string }>()
    const searchParams = useSearchParams()
    const topicId = params?.id
    const lang = normalizeLanguage(searchParams.get('lang'))
    const level = normalizeLevel(searchParams.get('level'), lang)

    const { topic, effectiveLevel } = topicId
        ? findTopic(lang, level, topicId)
        : { topic: undefined, effectiveLevel: level }

    if (!topicId || !topic) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background p-4 font-sans">
                <div className="w-full max-w-md bg-card text-foreground rounded-[40px] border-[3px] border-foreground shadow-2xl flex flex-col p-8">
                    <BookIcon className="w-24 h-24" />
                    <h2 className="text-center text-lg font-medium">Topic not found</h2>
                    <div className="pt-6">
                        <Button onClick={() => navigate.push('/topics')} fullWidth>
                            Back to Topics
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4 font-sans">
            <div className="w-full max-w-md bg-card text-foreground rounded-[40px] border-[3px] border-foreground shadow-2xl flex flex-col p-8">
                <BookIcon className="w-24 h-24" />

                <h2 className="text-center text-lg font-medium">{effectiveLevel}. TOPIC {topicId.split('-')[1]}. {topic.title}</h2>

                <div className="w-full space-y-6 pt-8">
                    <Button
                        fullWidth
                        onClick={() => navigate.push(`/quiz/${topicId}?lang=${lang}&level=${effectiveLevel}`)}
                        className="h-16 text-lg"
                    >
                        Quiz
                    </Button>

                    <Button
                        fullWidth
                        onClick={() => navigate.push(`/task/${topicId}?lang=${lang}&level=${effectiveLevel}`)}
                        className="h-16 text-lg"
                    >
                        Task
                    </Button>
                </div>
            </div>
        </div>
    )
}
