import { useState } from "react";
export const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    expire: "",
    stock: "",
    image: null as File | null,
});

export const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
};

export const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
        setForm({ ...form, image: e.target.files[0] });
    }
};

