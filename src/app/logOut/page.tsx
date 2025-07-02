"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
    const [form, setForm] = useState({ username: "", password: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen mx-auto flex items-center justify-center">

            <div className="relative z-10 flex flex-col items-center text-white text-center px-4">
                <h1 className="text-4xl font-bold mb-2">Sari Mukti</h1>

                <div className="bg-white text-black rounded-lg shadow-lg p-6 w-full max-w-sm">
                    <form className="space-y-4">
                        <div>
                            <label className="flex items-center border-b border-gray-300">
                                <span className="mr-2 text-lg">👤</span>
                                <input type="text" name="username" placeholder="Nama user" value={form.username} onChange={handleChange} className="flex-1 p-2 outline-none bg-transparent" required
                                />
                            </label>
                        </div>

                        <div>
                            <label className="flex items-center border-b border-gray-300">
                                <span className="mr-2 text-lg">🔒</span>
                                <input type="password" name="password" placeholder="Sandi" value={form.password} onChange={handleChange} className="flex-1 p-2 outline-none bg-transparent" required />
                            </label>
                        </div>
                        <Link href="/" className="block text-center text-blue-600 hover:underline mb-4">
                            <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
                                Masuk
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
