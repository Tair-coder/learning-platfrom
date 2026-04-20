'use client';
import React, { useState } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { Button } from '../../components/ui/Button'
import { BookIcon } from '../../components/ui/BookIcon'
import { findTopic, normalizeLanguage, normalizeLevel } from '../../lib/catalog'
export default function QuizPage() {
    const navigate = useRouter()
    const params = useParams<{ topicId: string }>()
    const searchParams = useSearchParams()
    const topicId = params?.topicId
    const lang = normalizeLanguage(searchParams.get('lang'))
    const level = normalizeLevel(searchParams.get('level'), lang)

    const { topic, effectiveLevel } = topicId
        ? findTopic(lang, level, topicId)
        : { topic: undefined, effectiveLevel: level }

    const QUESTIONS = topic?.quiz ?? []
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const handleAnswer = (index: number) => {
        if (index === QUESTIONS[currentQuestion].correctIndex) {
            setScore(score + 1)
        }
        if (currentQuestion < QUESTIONS.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowResult(true)
        }
    }

    if (!topicId || !topic || QUESTIONS.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background p-4 font-sans">
                <div className="w-full max-w-md bg-card text-foreground rounded-[40px] border-[3px] border-foreground shadow-2xl flex flex-col p-8">
                    <BookIcon className="w-24 h-24" />
                    <h2 className="text-xl font-bold">Quiz not available</h2>
                    <p className="text-sm text-muted-foreground mt-2">
                        This topic has no quiz yet.
                    </p>
                    <div className="pt-6">
                        <Button onClick={() => navigate.push('/topics')} fullWidth>
                            Back to Topics
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

    if (showResult) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background p-4 font-sans">

                <div className="w-full max-w-md bg-card text-foreground rounded-[40px] border-[3px] border-foreground shadow-2xl flex flex-col p-8">
                    <BookIcon className="w-24 h-24" />
                    <h2 className="text-2xl font-bold">Quiz Complete!</h2>
                    <p className="text-xl mb-4">
                        Score: {score} / {QUESTIONS.length}
                    </p>
                    <Button onClick={() => navigate.push(`/course/${topicId}?lang=${lang}&level=${effectiveLevel}`)} fullWidth>
                        Back
                    </Button>
                </div>
            </div>
        )
    }
    const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100
    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4 font-sans">
            <div className="w-full max-w-md bg-card text-foreground rounded-[40px] border-[3px] border-foreground shadow-2xl flex flex-col p-8">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 border-2 border-foreground rounded-lg flex items-center justify-center">
                        <BookIcon className="w-8 h-8 border-none p-0" />
                    </div>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden border border-border">
                        <div
                            className="h-full bg-green-500 transition-all duration-300"
                            style={{
                                width: `${progress}%`,
                            }}
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-sm uppercase tracking-widest text-muted-foreground">
                        Question {currentQuestion + 1}
                    </h3>
                    <p className="text-xl font-medium">
                        {QUESTIONS[currentQuestion].question}
                    </p>
                </div>

                <div className="w-full space-y-4 pt-4">
                    {QUESTIONS[currentQuestion].answers.map((answer, index) => (
                        <Button
                            key={index}
                            fullWidth
                            onClick={() => handleAnswer(index)}
                            className="text-left justify-start pl-6 h-14"
                        >
                            {answer}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
}
