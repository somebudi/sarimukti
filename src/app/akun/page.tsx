"use client";
import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Link from "next/link";
import { useState } from 'react';
import { Phone } from 'lucide-react';

export default function akun() {
    const [profileImage, setProfileImage] = useState("/profile.jpeg");
    const [account, setAccount] = useState({
        username: "Ipeng suripeng",
        email: "Ipeng@Gmail.com",
        password: "Ipeng123",
        confirmPassword: "Ipeng123",
        phone: "+62 812-3456-7890",
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAccount({ ...account, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = URL.createObjectURL(e.target.files[0]);
            setProfileImage(file);
        }
    };
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

      <div className="flex flex-col md:flex-row gap-10 bg-white shadow-lg p-10 rounded-lg w-full max-w-4xl mx-auto mt-10 text-gray-800">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-6">Edit Account</h2>
          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Account Name</label>
              <input type="text" name="username" value={account.username} onChange={handleChange} className="w-full border px-4 py-2 rounded"/>
            </div>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input type="email" name="email" value={account.email} onChange={handleChange} className="w-full border px-4 py-2 rounded"/>
            </div>
            <div>
              <label className="block font-medium mb-1">Password</label>
              <input type="password" name="password" value={account.password} onChange={handleChange} className="w-full border px-4 py-2 rounded"/>
            </div>
            <div>
              <label className="block font-medium mb-1">Confirm Password</label>
              <input type="password" name="confirmPassword" value={account.confirmPassword} onChange={handleChange} className="w-full border px-4 py-2 rounded"/>
            </div>
            <div>
              <label className="block font-medium mb-1">Phone</label>
              <div className="flex items-center border px-4 py-2 rounded">
                <Phone className="mr-2 text-gray-500" />
                <input type="tel" name="phone" value={account.phone} onChange={handleChange} className="w-full outline-none bg-transparent"/>
              </div>
            </div>
            <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Save Changes
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Profile Image</h2>
          <div className="border p-4 rounded-lg text-center">
            <img src={profileImage} alt="Profile" className="w-32 h-32 object-cover rounded mx-auto mb-4"/>
            <label className="cursor-pointer inline-block border px-4 py-2 rounded hover:bg-gray-100">
              Upload New…
              <input type="file" accept="image/*" onChange={handleImageChange} className="hidden"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}