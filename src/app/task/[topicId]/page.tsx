'use client'

import { Button } from "@/app/components/ui/Button"
import { BookIcon } from "@/app/components/ui/BookIcon"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { findTopic, normalizeLanguage, normalizeLevel } from "@/app/lib/catalog"

export default function TopicSelectionPage() {
    const navigate = useRouter()
    const params = useParams<{ topicId: string }>()
    const searchParams = useSearchParams()
    const topicId = params?.topicId
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
                    <h2 className="text-center text-lg font-medium">Tasks not available</h2>
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
                <h2 className="text-center text-lg font-medium">
                    {effectiveLevel}. TOPIC {topicId.split('-')[1]}. {topic.title}
                </h2>

                <div className="w-full space-y-3 pt-6 flex-1">
                    {topic.tasks.map((task, index) => (
                        <div
                            key={task.id}
                            className="border-2 border-foreground rounded-2xl p-4"
                        >
                            <div className="text-xs uppercase tracking-widest text-muted-foreground">
                                Task {index + 1}
                            </div>
                            <div className="mt-2 text-base font-medium">{task.prompt}</div>
                            {task.hint && (
                                <div className="mt-2 text-sm text-muted-foreground">Hint: {task.hint}</div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="pt-4">
                    <Button
                        onClick={() => navigate.push(`/course/${topicId}?lang=${lang}&level=${effectiveLevel}`)}
                        fullWidth
                    >
                        Back
                    </Button>
                </div>
            </div>
        </div>
    )
}   