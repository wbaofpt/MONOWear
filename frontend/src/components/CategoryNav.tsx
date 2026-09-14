import { ArrowRight } from "lucide-react";
import type { Nav } from "../types";
export default function CategoryNav({ onNav }: { onNav: Nav }) {
  return (
    <div className="category-nav" aria-label="Điều hướng danh mục">
      <div className="category-nav-inner">
        <span className="category-label">Khám phá MONO</span>
        <button onClick={() => onNav("shop")}>Tất cả sản phẩm</button>
        <button onClick={() => onNav("shop")}>Nam</button>
        <button onClick={() => onNav("shop")}>Nữ</button>
        <button onClick={() => onNav("shop")}>Phụ kiện</button>
        <button onClick={() => onNav("journal")}>Journal</button>
        <button className="category-link" onClick={() => onNav("stores")}>
          Ghé cửa hàng <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
