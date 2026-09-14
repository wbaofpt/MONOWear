import { Menu, Search, ShoppingBag, UserRound } from "lucide-react";
import type { Nav } from "../types";
export default function SiteHeader({
  count,
  onNav,
  onMenu,
  activeView,
}: {
  count: number;
  onNav: Nav;
  onMenu: () => void;
  activeView?: string;
}) {
  return (
    <>
      <header>
        <button
          className="icon-btn mobile-only"
          aria-label="Mở menu"
          onClick={onMenu}
        >
          <Menu />
        </button>
        <button className="logo brand-logo" onClick={() => onNav("home")}>
          <img src="/mono-logo.svg" alt="MONO Wear" />
        </button>
        <nav aria-label="Main navigation">
          <button
            className={activeView === "home" ? "active" : ""}
            onClick={() => onNav("home")}
          >
            Trang chủ
          </button>
          <button onClick={() => onNav("shop")}>Mua sắm</button>
          <button onClick={() => onNav("shop")}>Nam</button>
          <button onClick={() => onNav("shop")}>Nữ</button>
          <button onClick={() => onNav("journal")}>Journal</button>
          <button onClick={() => onNav("about")}>Về MONO</button>
        </nav>
        <div className="header-actions">
          <button className="icon-btn" aria-label="Tìm kiếm">
            <Search />
          </button>
          <button
            className="icon-btn"
            aria-label="Tài khoản"
            onClick={() => onNav("account")}
          >
            <UserRound />
          </button>
          <button
            className="bag-btn"
            onClick={() => onNav("cart")}
            aria-label={`Giỏ hàng, ${count} sản phẩm`}
          >
            <ShoppingBag />
            <span>{count}</span>
          </button>
        </div>
      </header>
    </>
  );
}
