"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const staticUserInfo = {
            email: 'admin@example.com',
            password: 'As12345',
        }
        if (email === staticUserInfo.email && password === staticUserInfo.password) {
            router.push("/languages");
        }
        else {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
            <div className="w-full max-w-md bg-white rounded-[40px] border-[3px] border-black shadow-2xl flex flex-col p-8">
                <h1 className="text-5xl font-handwriting font-bold text-center mb-8">
                    Login
                </h1>

                <form onSubmit={handleLogin} className="w-full space-y-4">
                    <Input
                        placeholder="Email or Username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Button type="submit" fullWidth className="uppercase tracking-wider">
                        Submit
                    </Button>
                </form>

                <p className="text-sm text-gray-500 mt-4 text-center" style={{ 'cursor': 'pointer' }}>
                    Don`t have an account?{" "}
                    <i>ask teacher for account</i>
                </p>
                {error && <p className="text-sm text-red-500 mt-4 text-center">{error}</p>}
            </div>
        </div>
    );
}
