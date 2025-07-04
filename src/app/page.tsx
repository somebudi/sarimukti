"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import 'react-datepicker/dist/react-datepicker.css';
import Link from "next/link";
import { products, barData, lineData, pieData } from "../app/Data/data";
import React, { useEffect, useState } from "react";
import { Menu, X } from 'lucide-react';


export default function Home() {
  const [productsList, setProductsList] = useState<any[]>([]);
  const [historyList, setHistoryList] = useState<any[]>([]);
  const [barData, setBarData] = useState<any[]>([]);
  const [pieData, setPieData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [productRes, historyRes] = await Promise.all([
          fetch('https://68653f2f5b5d8d0339806cfb.mockapi.io/Product'),
          fetch('https://68653f2f5b5d8d0339806cfb.mockapi.io/History'),
        ]);
        const products = await productRes.json();
        const history = await historyRes.json();

        setProductsList(products);
        setHistoryList(history);
        const categoryCount: Record<string, number> = {};
        products.forEach((item: any) => {
          categoryCount[item.Nama] = (categoryCount[item.Nama]||0) + item.sold;
        });

        const barChartData = Object.entries(categoryCount).map(([Nama, sold]) => ({
          name: Nama,
          hits: sold,
        }));
        setBarData(barChartData);

        const pieChartData = [
          { name: "History", value: history.length, color: "#06b6d4" },
          { name: "Top Products", value: products.length, color: "#f43f5e" },
        ];
        setPieData(pieChartData);
      } catch (error) {
        console.error("Failed to fetch:", error);
      }
    }

    fetchData();
  }, []);
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
                        <Link href="/" className="text-green-600">Home</Link>
                        <Link href="/history" className="text-gray-600">History</Link>
                        <Link href="/transaksi/Product" className="text-gray-600">Products</Link>
                        <Link href="/akun" className="text-gray-600 font-medium">Profile</Link>
                        <Link href="/logOut" className="text-gray-600">⏻ Log Out</Link>
                    </div>
                </div>

                {menuOpen && (
                    <div className="md:hidden px-4 pb-4 space-y-2">
                        <Link href="/" className="block text-green-600">Home</Link>
                        <Link href="/history" className="block text-gray-600">History</Link>
                        <Link href="/transaksi/Product" className="block text-gray-600">Products</Link>
                        <Link href="/akun" className="block text-gray-600 font-medium">Profile</Link>
                        <Link href="/logOut" className="block text-gray-600">⏻ Log Out</Link>
                    </div>
                )}
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 flex flex-col text-center items-center min-h-[350px]">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4 text-black">Track penjualan per bulan</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart width={500} height={200} data={lineData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <legend />
              <Line type="monotone" dataKey="latest" stroke="#06b6d4" />
              <Line type="monotone" dataKey="popular" stroke="#fb7185" />
              <Line type="monotone" dataKey="featured" stroke="#a78bfa" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded shadow flex flex-col text-center items-center min-h-[350px]">
          <h2 className="text-xl font-semibold mb-4 text-black">Status barang</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart width={500} height={250}>
              <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="text-center mt-2">
            <span className="text-lg font-semibold text-sky-400">Sudah di Ambil</span><br/>
            <span className="text-lg font-semibold text-red-600">Belum di Ambil</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow    flex-col text-center items-center min-h-[350px]">
          <h2 className="font-semibold mb-2 text-black">Jumlah Penjualan</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart width={300} height={200} data={barData.slice(0,5)} >
              <XAxis dataKey="name" />
              <YAxis domain={[0,100]}/>
              <Tooltip />
              <Bar dataKey="hits" fill="#f87171" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded shadow flex flex-col text-center min-h-[350px]">
          <h2 className="text-xl font-semibold mb-2 text-black">Produck yang Laku Pada Saat Ini</h2>
          <ResponsiveContainer width="100%" height={50}>
            <Link href="/transaksi/Product" className="flex items-center justify-center text-black px-4 py-2 rounded">
              <span>View All Products</span>
            </Link>
          </ResponsiveContainer>
          <ol className="space-y-2 mt-4">
            {products.slice(0, 4).map((product, index) => (
              <li key={index} className={`p-4 rounded ${product.highlight ? 'bg-gray-200' : ''}`}>
                <span className="font-semibold text-gray-700">{index + 1}.</span>
                <span className="text-gray-700">{product.name}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-white p-4 rounded shadow flex flex-col text-center min-h-[350px]">
          <h2 className="text-xl font-semibold mb-2 text-black">Calendar</h2>
          <ResponsiveContainer width="100%" height={200}>
            <iframe
              title="calendar"
              src="https://calendar.google.com/calendar/embed?src=en.indonesian%23holiday%40group.v.calendar.google.com&ctz=Asia%2FJakarta"
              style={{ border: 0 }}
              width="400"
              height="250"
              className="rounded"
            ></iframe>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded shadow flex flex-col text-center min-h-[350px]">
          <h2 className="text-xl font-semibold mb-2 text-black">Pengambilan barang</h2>
          <ResponsiveContainer width="100%" height={200}>
            <ol className="space-y-2 mt-4">
              {products.slice(0, 4).map((item) => (
                <li key={item.id} className="p-4 rounded bg-gray-100">
                  <span className="font-semibold text-gray-700">{item.name}</span>
                  <span className="text-gray-500 ml-2">{item.expire}</span>
                </li>
              ))}
            </ol>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

