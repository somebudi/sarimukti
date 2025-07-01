"use client";
import Image from "next/image";
import { BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, Legend, PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';
import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';

const lineData = [
  { name: "Jan", latest: 90, popular: 40, featured: 35 },
  { name: "Feb", latest: 70, popular: 45, featured: 20 },
  { name: "Mar", latest: 80, popular: 39, featured: 40 },
  { name: "Apr", latest: 60, popular: 20, featured: 50 },
  { name: "May", latest: 60, popular: 55, featured: 80 },
  { name: "Jun", latest: 65, popular: 70, featured: 65 },
  { name: "Jul", latest: 75, popular: 65, featured: 70 },
];

const barData = [
  { name: "Red", hits: 12 },
  { name: "Blue", hits: 19 },
  { name: "Yellow", hits: 5 },
  { name: "Green", hits: 7 },
  { name: "Purple", hits: 3 },
  { name: "Orange", hits: 4 },
];

const pieData = [
  { name: "Used", value: 4600, color: "#a78bfa" },
  { name: "Available", value: 5400, color: "#2dd4bf" },
];

export default function Home() {
  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow">
        <h1 className="text-2xl font-bold text-center p-4 text-black">
          SARIMUKTI
        </h1>
        <div className="space-x-4">
          <span className="font-semibold text-gray-700">Dashboard</span>
          <span className="text-gray-600">Reports</span>
          <span className="text-gray-600">Products</span>
          <span className="text-gray-600">Settings</span>
          <span className="text-gray-600">Profile</span>
        </div>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 flex flex-col text-center items-center">
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

        <div className="bg-white p-6 rounded shadow flex flex-col text-center items-center">
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
            <span className="text-lg font-semibold">4600 GB</span>
            <span className="text-lg font-semibold">5400 GB</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow flex flex-col text-center items-center">
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
        <div className="bg-white p-4 rounded shadow flex flex-col text-center">
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
      </div>
    </div>
  )
} 
