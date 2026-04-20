'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowBigLeft, LogOut, Moon, Sun } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { BookIcon } from '../components/ui/BookIcon'
import { applyTheme, getStoredTheme, storeTheme, type ThemeMode } from '../components/ThemeProvider'

export default function SettingsPage() {
    const router = useRouter()
    const [theme, setTheme] = useState<ThemeMode>(() => getStoredTheme())

    const setThemeMode = (mode: ThemeMode) => {
        setTheme(mode)
        storeTheme(mode)
        applyTheme(mode)
    }

    const signOut = () => {
        try {
            localStorage.removeItem('lp.user')
            localStorage.removeItem('lp.session')
        } catch {
            // ignore
        }
        router.push('/login')
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4 font-sans">
            <div className="w-full max-w-md bg-card text-foreground rounded-[40px] border-[3px] border-foreground shadow-2xl flex flex-col p-8">
                <ArrowBigLeft className="cursor-pointer mb-4" onClick={() => router.back()} />

                <div className="flex items-center gap-4">
                    <BookIcon className="w-24 h-24" />
                    <h2 className="text-lg font-medium">Settings</h2>
                </div>

                <div className="w-full space-y-4 pt-8">
                    <div className="border-2 border-foreground rounded-2xl p-4">
                        <div className="text-xs uppercase tracking-widest text-muted-foreground">Appearance</div>
                        <div className="mt-3 grid grid-cols-2 gap-3">
                            <Button
                                fullWidth
                                variant={theme === 'light' ? 'primary' : 'secondary'}
                                onClick={() => setThemeMode('light')}
                                className={theme === 'light' ? '' : 'border-2 border-foreground'}
                                type="button"
                            >
                                <Sun className="w-4 h-4 mr-2" />
                                Light
                            </Button>
                            <Button
                                fullWidth
                                variant={theme === 'dark' ? 'primary' : 'secondary'}
                                onClick={() => setThemeMode('dark')}
                                className={theme === 'dark' ? '' : 'border-2 border-foreground'}
                                type="button"
                            >
                                <Moon className="w-4 h-4 mr-2" />
                                Dark
                            </Button>
                        </div>
                    </div>

                    <Button fullWidth variant="secondary" className="border-2 border-foreground" onClick={signOut}>
                        <LogOut className="w-4 h-4 mr-2" />
                        Sign out
                    </Button>
                </div>
            </div>
        </div>
    )
}
