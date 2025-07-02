
export const historyTake = [
  { id: 1, name: "Panci besar", date: "2025-07-01" },
  { id: 2, name: "Kompor gas", date: "2025-06-30" },
  { id: 3, name: "Galon kosong", date: "2025-06-28" },
  { id: 4, name: "Regulator", date: "2025-06-25" },
];

export const products = [
  { id: 1, name: "Panci besar", sold: 145, stock: 255, expire: "2025-10-28", highlight: true },
  { id: 2, name: "Kompor gas", sold: 240, stock: 100, expire: "2025-09-24", highlight: false },
  { id: 3, name: "Regulator", sold: 445, stock: 655, expire: "2026-03-22", highlight: true },
  { id: 4, name: "Piring", sold: 120, stock: 340, expire: "2025-11-15", highlight: false },
  { id: 5, name: "Sendok", sold: 190, stock: 290, expire: "2025-12-05", highlight: true },
  { id: 6, name: "Gelas", sold: 80, stock: 410, expire: "2026-01-30", highlight: false },
  { id: 7, name: "Sapu", sold: 60, stock: 150, expire: "2026-02-20", highlight: true },
  { id: 8, name: "Ember", sold: 95, stock: 200, expire: "2025-08-18", highlight: false },
  { id: 9, name: "Wajan", sold: 175, stock: 130, expire: "2025-10-01", highlight: true },
  { id: 10, name: "Sendok sayur", sold: 105, stock: 160, expire: "2026-01-01", highlight: false },
];


export const barData = products.map((p) => ({
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
