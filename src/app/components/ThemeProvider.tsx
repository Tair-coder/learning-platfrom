'use client'

import { useEffect } from 'react'

export type ThemeMode = 'light' | 'dark'

const THEME_KEY = 'lp.theme'

export function applyTheme(theme: ThemeMode) {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
}

export function getStoredTheme(): ThemeMode {
    try {
        const value = localStorage.getItem(THEME_KEY)
        return value === 'dark' ? 'dark' : 'light'
    } catch {
        return 'light'
    }
}

export function storeTheme(theme: ThemeMode) {
    try {
        localStorage.setItem(THEME_KEY, theme)
    } catch {
        // ignore
    }
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        applyTheme(getStoredTheme())
    }, [])

    return children
}
