"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, Legend, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Link from "next/link";
import { products, barData, lineData, pieData } from "../app/Data/data";


export default function Home() {
  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-2xl font-bold text-black">SARIMUKTI</h1>
          <div className="space-x-4 mt-2 md:mt-0">
            <Link href="/" className="text-gray-600">Dashboard</Link>
            <Link href="/history" className="text-gray-600">History</Link>
            <Link href="/transaksi/Product" className="text-gray-600">Products</Link>
            <Link href="/akun" className="text-gray-600">Profile</Link>
            <Link href="/logOut" className="text-gray-600">⏻ Log Out</Link>
          </div>
        </div>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 flex flex-col text-center items-center min-h-[350px]">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4 text-black">Latest</h2>
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
          <h2 className="text-xl font-semibold mb-4 text-black">Storage</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart width={500} height={250}>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey={"value"}
                label
              >
                {pieData.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="text-center mt-2">
            <span className="text-lg font-semibold">Selesai</span>
            <span className="text-lg font-semibold">Belum Selesai</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow flex flex-col text-center items-center min-h-[350px]">
          <h2 className="font-semibold mb-2 text-black">Performance</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart width={300} height={200} data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="hits" fill="#f87171" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded shadow flex flex-col text-center min-h-[350px]">
          <h2 className="text-xl font-semibold mb-2 text-black">Top Product List</h2>
          <ResponsiveContainer width="100%" height={50}>
            <Link href="/transaksi/Product" className="flex items-center justify-center text-black px-4 py-2 rounded">
              <span>View All Products</span>
            </Link>
          </ResponsiveContainer>
          <ol className="space-y-2 mt-4">
            {products.map((product, index) => (
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
          <h2 className="text-xl font-semibold mb-2 text-black">Pengambilan</h2>
          <ResponsiveContainer width="100%" height={200}>
            <ol className="space-y-2 mt-4">
              {products.map((item) => (
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
