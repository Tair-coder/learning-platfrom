// app/levels/page.tsx
import { Suspense } from 'react'
import LevelSelectionContent from './LevelSelectionContent'

export default function Page() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-background p-4">
                <div className="w-full max-w-md bg-card text-foreground rounded-[40px] border-[3px] border-foreground shadow-2xl flex flex-col p-8">
                    <div className='flex justify-center items-center'>
                        <h2 className="text-center text-lg font-medium max-w-[200px] mt-4">
                            Loading...
                        </h2>
                    </div>
                </div>
            </div>
        }>
            <LevelSelectionContent />
        </Suspense>
    )
}