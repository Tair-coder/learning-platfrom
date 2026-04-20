'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowBigLeft } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { BookIcon } from '../components/ui/BookIcon'
import { Input } from '../components/ui/Input'
import Navbar from '../components/custom/Navbar'

type LocalUser = {
    email?: string
    name?: string
}

export default function ProfilePage() {
    const router = useRouter()
    const loadUser = (): LocalUser => {
        try {
            const raw = localStorage.getItem('lp.user')
            return raw ? (JSON.parse(raw) as LocalUser) : {}
        } catch {
            return {}
        }
    }

    const [user, setUser] = useState<LocalUser>(() => loadUser())
    const [name, setName] = useState(() => loadUser().name ?? '')
    const [saved, setSaved] = useState(false)

    const saveName = () => {
        setSaved(false)
        try {
            const raw = localStorage.getItem('lp.user')
            const current = raw ? (JSON.parse(raw) as LocalUser) : {}
            const next: LocalUser = { ...current, name }
            localStorage.setItem('lp.user', JSON.stringify(next))
            setUser(next)
            setSaved(true)
        } catch {
            // ignore
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4 font-sans">
            <div className="w-full max-w-md bg-card text-foreground rounded-[40px] border-[3px] border-foreground shadow-2xl flex flex-col p-8">
                <ArrowBigLeft className="cursor-pointer mb-4" onClick={() => router.back()} />

                <div className="flex items-center gap-4">
                    <BookIcon className="w-24 h-24" />
                    <div>
                        <h2 className="text-lg font-medium">Profile</h2>
                        <p className="text-sm text-muted-foreground">{user.email ?? 'No user info'}</p>
                    </div>
                </div>

                <div className="w-full space-y-4 pt-8 flex-1">
                    <Input
                        label="Name"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => {
                            setSaved(false)
                            setName(e.target.value)
                        }}
                    />

                    <Button fullWidth type="button" onClick={saveName}>
                        Save
                    </Button>

                    {saved && (
                        <p className="text-sm text-muted-foreground text-center">Saved</p>
                    )}

                    <Button fullWidth type="button" onClick={() => router.push('/settings')}>
                        Settings
                    </Button>
                </div>

                <div className="mt-auto">
                    <Navbar />
                </div>
            </div>
        </div>
    )
}
