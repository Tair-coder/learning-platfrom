// app/topics/page.tsx
import { Suspense } from 'react'
import TopicSelectionContent from './TopicSelectionContent'

export default function Page() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
                <div className="w-full max-w-md bg-white rounded-[40px] border-[3px] border-black shadow-2xl flex flex-col p-8">
                    <div className='flex justify-start items-center'>
                        <div className="w-24 h-24 bg-gray-200 rounded-full animate-pulse" />
                        <div className="ml-4">
                            <div className="h-6 w-40 bg-gray-200 rounded animate-pulse mb-2"></div>
                            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                    </div>
                    <div className="space-y-4 pt-8">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="h-12 bg-gray-200 rounded-full animate-pulse"></div>
                        ))}
                    </div>
                </div>
            </div>
        }>
            <TopicSelectionContent />
        </Suspense>
    )
}