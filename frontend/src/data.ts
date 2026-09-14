export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  badge?: string;
  color?: string;
};
export const products: Product[] = [
  {
    id: 1,
    name: "Áo khoác Linen Form Boxy",
    category: "Nữ / Áo khoác",
    price: 890000,
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
    badge: "New",
  },
  {
    id: 2,
    name: "Quần suông Essential",
    category: "Nam / Quần",
    price: 690000,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
    badge: "Bestseller",
  },
  {
    id: 3,
    name: "Sơ mi Cotton Signature",
    category: "Unisex / Sơ mi",
    price: 590000,
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    name: "Chân váy Midi Pleated",
    category: "Nữ / Chân váy",
    price: 760000,
    image:
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 5,
    name: "Blazer Wool Blend",
    category: "Nam / Áo khoác",
    price: 1290000,
    image:
      "https://images.unsplash.com/photo-1555069519-127aadedf1ee?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 6,
    name: "Túi Mini Shoulder",
    category: "Phụ kiện",
    price: 450000,
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85",
  },
];
export const formatPrice = (p: number) =>
  new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(p);
