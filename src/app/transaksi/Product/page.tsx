"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from 'lucide-react';


export default function Products() {
    const [productsList, setProductsList] = useState<any[]>([]);
    const [selected, setSelected] = useState<number[]>([]);
    const ITEMS_PER_PAGE = 10;
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("https://68653f2f5b5d8d0339806cfb.mockapi.io/Product");
            const data = await res.json();
            setProductsList(data);
        };
        fetchProducts();
    }, []);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedProducts = productsList.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    const totalPages = Math.ceil(productsList.length / ITEMS_PER_PAGE);

    const toggleSelect = (id: number) => {
        setSelected((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]);
    };

    const deleteSelected = () => {
        setProductsList((prev) => prev.filter((p) => !selected.includes(p.id)));
        setSelected([]);
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
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-black">Product List</h2>
                        <Link href="/transaksi/tambah" className="border px-4 py-2 rounded hover:bg-gray-100 text-sm text-gray-700">
                            Add New Product
                        </Link>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border">
                            <thead className="bg-gray-100 text-gray-700">
                                <tr>
                                    <th className="p-3">Select</th>
                                    <th className="p-3">Product</th>
                                    <th className="p-3">Terjual</th>
                                    <th className="p-3">Stock</th>
                                    <th className="p-3">Pengambilan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedProducts.map((p, index) => (
                                    <tr key={p.id} className="border-t hover:bg-gray-50 text-gray-700">
                                        <td className="p-3">
                                            <input
                                                type="checkbox"
                                                checked={selected.includes(p.id)}
                                                onChange={() => toggleSelect(p.id)}
                                            />
                                        </td>
                                        <td className="p-3">{p.Nama}</td>
                                        <td className="p-3">{p.sold}</td>
                                        <td className="p-3">{p.Stock}</td>
                                        <td className="p-3">{p.Expired}</td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>

                    <button
                        onClick={deleteSelected}
                        className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        Delete Selected
                    </button>

                    <div className="mt-6 flex gap-2 flex-wrap text-gray-600">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`px-3 py-1 rounded border ${currentPage === i + 1 ? "bg-gray-300 font-semibold" : "hover:bg-gray-100"
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

