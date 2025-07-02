
import { useEffect, useState } from "react";

  export const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://68653f2f5b5d8d0339806cfb.mockapi.io/Product");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  export const barData = products.map((p: any) => ({
    name: p.name,
    hits: p.stock,
  }));

  export const lineData = [
    { name: "Jan", latest: 90, popular: 40, featured: 35 },
    { name: "Feb", latest: 70, popular: 45, featured: 20 },
    { name: "Mar", latest: 80, popular: 39, featured: 40 },
    { name: "Apr", latest: 60, popular: 20, featured: 50 },
    { name: "May", latest: 60, popular: 55, featured: 80 },
    { name: "Jun", latest: 65, popular: 70, featured: 65 },
    { name: "Jul", latest: 75, popular: 65, featured: 70 },
  ];

  export const pieData = [
    { name: "Used", value: 500, color: "#a78bfa" },
    { name: "Available", value: 250, color: "#2dd4bf" },
  ];