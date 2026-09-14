import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { Product } from "../data";
import type { Nav } from "../types";
import ProductCard from "../components/ProductCard";
export default function ShopPage({
  products,
  onNav,
  onAdd,
  initialStyle,
}: {
  products: Product[];
  onNav: Nav;
  onAdd: (p: Product) => void;
  initialStyle?: "everyday" | "tailoring" | "accessories";
}) {
  const [filter, setFilter] = useState("Tất cả");
  const styleLabels = {
    everyday: "Everyday uniform",
    tailoring: "Soft tailoring",
    accessories: "Finishing touches",
  } as const;
  const styleMatches = {
    everyday: ["Áo thun", "Quần", "Sơ mi"],
    tailoring: ["Áo khoác", "Blazer", "Chân váy", "Đầm", "Knitwear"],
    accessories: ["Phụ kiện"],
  } as const;
  const styleProducts = initialStyle
    ? products.filter((product) =>
        styleMatches[initialStyle].some((keyword) =>
          product.category.includes(keyword),
        ),
      )
    : products;
  const shown =
    filter === "Tất cả"
      ? styleProducts
      : styleProducts.filter((p) => p.category.includes(filter));
  return (
    <section className="shop-page">
      <div className="shop-title">
        <p className="eyebrow">MONO / SHOP</p>
        <h1>{initialStyle ? styleLabels[initialStyle] : "Tất cả sản phẩm"}</h1>
        <p>Được thiết kế để sống cùng bạn, mỗi ngày.</p>
      </div>
      {initialStyle && (
        <div className="shop-style-banner">
          <span>MONO EDIT / STYLE FILTER</span>
          <p>
            Những lựa chọn được tuyển chọn cho phong cách{" "}
            {styleLabels[initialStyle]}.
          </p>
          <button onClick={() => onNav("shop")}>Xóa bộ lọc</button>
        </div>
      )}
      <div className="filters">
        {["Tất cả", "Nam", "Nữ", "Phụ kiện"].map((f) => (
          <button
            className={filter === f ? "active" : ""}
            onClick={() => setFilter(f)}
            key={f}
          >
            {f}
          </button>
        ))}
        <button className="filter-sort">
          Sắp xếp: Mới nhất <ChevronDown size={15} />
        </button>
      </div>
      <p className="results-count">{shown.length} sản phẩm</p>
      <div className="product-grid shop-grid">
        {shown.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onOpen={() => onNav("product", p.id)}
            onAdd={() => onAdd(p)}
          />
        ))}
      </div>
    </section>
  );
}
