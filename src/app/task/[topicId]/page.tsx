'use client'

import { Button } from "@/app/components/ui/Button"
import { useRouter } from "next/navigation"

export default function TopicSelectionPage() {
    const navigate = useRouter()
    const selectTopic = (topicId: string) => {
        navigate.push(`/course/${topicId}`)
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
            <div className="w-full max-w-md bg-white rounded-[40px] border-[3px] border-black shadow-2xl flex flex-col p-8">
                <h2>Coming Soon...</h2>
                <Button onClick={() => navigate.back()}>Back to Topics</Button>
            </div>
        </div>
    )
}   