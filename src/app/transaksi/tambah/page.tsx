"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from 'lucide-react';

export default function AddProductForm() {
    const [form, setForm] = useState({
        name: "",
        description: "",
        category: "",
        expire: "",
        stock: "",
        image: null as File | null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setForm({ ...form, image: e.target.files[0] });
        }
    };
    
    const [menuOpen, setMenuOpen] = useState(false);
    return (

        <div className="min-h-screen">
            <nav className="bg-white shadow">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-black">SARIMUKTI</h1>

                    <div className="md:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    <div className="hidden md:flex space-x-4">
                        <Link href="/" className="text-gray-600">Home</Link>
                        <Link href="/history" className="text-gray-600">History</Link>
                        <Link href="/transaksi/Product" className="text-green-600">Products</Link>
                        <Link href="/akun" className="text-gray-600 font-medium">Profile</Link>
                        <Link href="/logOut" className="text-gray-600">⏻ Log Out</Link>
                    </div>
                </div>

                {menuOpen && (
                    <div className="md:hidden px-4 pb-4 space-y-2">
                        <Link href="/" className="block text-gray-600">Home</Link>
                        <Link href="/history" className="block text-gray-600">History</Link>
                        <Link href="/transaksi/Product" className="block text-green-600">Products</Link>
                        <Link href="/akun" className="block text-gray-600 font-medium">Profile</Link>
                        <Link href="/logOut" className="block text-gray-600">⏻ Log Out</Link>
                    </div>
                )}
            </nav>
            <main className="container mx-auto px-4 py-6">
                <div className="bg-white p-6 rounded shadow">
                    <div className="items-center justify-between mb-6 text-black">
                        <h2 className="text-2xl font-semibold text-center text-black mb-6">Add Product</h2>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block mb-1 font-medium">Product Name</label>
                                    <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full border px-4 py-2 rounded" required />
                                </div>
                                <div>
                                    <label className="block mb-1 font-medium">Category</label>
                                    <select name="category" value={form.category} onChange={handleChange} className="w-full border px-4 py-2 rounded" required>
                                        <option value="">Select one</option>
                                        <option value="dapur">Dapur</option>
                                        <option value="elektronik">Elektronik</option>
                                        <option value="lainnya">Lainnya</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block mb-1 font-medium">Expire Date</label>
                                    <input type="date" name="expire" value={form.expire} onChange={handleChange} className="w-full border px-4 py-2 rounded" required />
                                </div>
                                <div>
                                    <label className="block mb-1 font-medium">Units In Stock</label>
                                    <input type="number" name="stock" value={form.stock} onChange={handleChange} className="w-full border px-4 py-2 rounded" required />
                                </div>
                            </div>

                            <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-md p-6">
                                <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center gap-2 text-gray-500">
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4-4m0 0l-4 4m4-4v12" />
                                    </svg>
                                    <span>{form.image ? form.image.name : "Upload"}</span>
                                    <input id="image-upload" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                                </label>
                            </div>
                            <Link href="/transaksi/Product" className="text-blue-600 hover:underline">
                                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                                    Add
                                </button>
                            </Link>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}
