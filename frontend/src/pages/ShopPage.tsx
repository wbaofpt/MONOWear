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
    <section className="shop-page shop-page-new">
      <div className="shop-intro-new">
        <div>
          <p className="eyebrow">MONO / COLLECTION 01</p>
          <h1>
            {initialStyle
              ? styleLabels[initialStyle]
              : "Mặc cho đời sống thật."}
          </h1>
        </div>
        <div className="shop-intro-copy">
          <span>THE EVERYDAY EDIT</span>
          <p>
            Những thiết kế được chọn để đi cùng bạn từ buổi sáng bận rộn đến
            cuối tuần thong thả.
          </p>
        </div>
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
      <div className="shop-toolbar">
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
        </div>
        <button className="filter-sort">
          Sắp xếp: Mới nhất <ChevronDown size={15} />
        </button>
      </div>
      <div className="shop-results-head">
        <p className="results-count">{shown.length} sản phẩm</p>
        <span>Thiết kế có chủ đích · Chất liệu được tuyển chọn</span>
      </div>
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
