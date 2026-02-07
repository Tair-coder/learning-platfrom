'use client';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '../../components/ui/Button'
import { BookIcon } from '../../components/ui/BookIcon'
import { ArrowBigLeft } from 'lucide-react';
const QUESTIONS = [
    {
        id: 1,
        question: 'What is the correct way to start a CV?',
        answers: ['Personal Information', 'My Hobbies', 'Favorite Foods'],
        correct: 0,
        lang: 'en'
    },
    {
        id: 2,
        question: 'Which section lists your work history?',
        answers: ['Education', 'Experience', 'Skills'],
        correct: 1,
        lang: 'en'
    },
    {
        id: 3,
        question: 'Should you include a photo in your CV?',
        answers: ['Always', 'Never', 'Depends on country'],
        correct: 2,
        lang: 'en'
    },
]
export default function QuizPage() {
    const navigate = useRouter()
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const handleAnswer = (index: number) => {
        if (index === QUESTIONS[currentQuestion].correct) {
            setScore(score + 1)
        }
        if (currentQuestion < QUESTIONS.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowResult(true)
        }
    }
    if (showResult) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">

                <div className="w-full max-w-md bg-white rounded-[40px] border-[3px] border-black shadow-2xl flex flex-col p-8">
                    <BookIcon className="w-24 h-24" />
                    <h2 className="text-2xl font-bold">Quiz Complete!</h2>
                    <p className="text-xl mb-4">
                        Score: {score} / {QUESTIONS.length}
                    </p>
                    <Button onClick={() => navigate.push('/topics')} fullWidth>
                        Back to Topics
                    </Button>
                </div>
            </div>
        )
    }
    const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
            <div className="w-full max-w-md bg-white rounded-[40px] border-[3px] border-black shadow-2xl flex flex-col p-8">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 border-2 border-black rounded-lg flex items-center justify-center">
                        <BookIcon className="w-8 h-8 border-none p-0" />
                    </div>
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden border border-black/10">
                        <div
                            className="h-full bg-green-500 transition-all duration-300"
                            style={{
                                width: `${progress}%`,
                            }}
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-sm uppercase tracking-widest text-gray-500">
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
