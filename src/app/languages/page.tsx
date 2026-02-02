"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../components/ui/Button";
import { BookIcon } from "lucide-react";
export default function LanguageSelectionPage() {
    const navigate = useRouter()
    const selectLanguage = (lang: string) => {
        // In a real app, save to context/store
        navigate.push('/levels')
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
            <div className="w-full max-w-md bg-white rounded-[40px] border-[3px] border-black shadow-2xl flex flex-col p-8">
                <div className="flex col items-center mb-8">
                    <BookIcon className="w-24 h-24" />
                    <h2 className="text-center text-lg font-medium max-w-[200px]">
                        Choose enable language
                    </h2>
                </div>


                <div className="w-full space-y-4 pt-4">
                    <Button
                        fullWidth
                        onClick={() => selectLanguage('kazakh')}
                        className="uppercase"
                    >
                        Kazakh
                    </Button>

                    <Button
                        fullWidth
                        onClick={() => selectLanguage('english')}
                        className="uppercase"
                    >
                        English
                    </Button>

                    <div className="pt-4 w-full">
                        <p className="text-xs text-center uppercase tracking-widest text-gray-500 mb-4">
                            Extra Languages
                        </p>
                        <Button
                            fullWidth
                            variant="secondary"
                            onClick={() => selectLanguage('uyghur')}
                            className="uppercase border-2 border-gray-200"
                        >
                            Uyghur
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
