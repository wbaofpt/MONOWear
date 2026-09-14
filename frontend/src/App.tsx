import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import type { Product } from "./data";
import { api } from "./api";
import type { Nav, View } from "./types";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import AccountPage from "./pages/AccountPage";
import ContactPage from "./pages/ContactPage";
import JournalPage from "./pages/JournalPage";
import AboutPage from "./pages/AboutPage";
import PolicyPage from "./pages/PolicyPage";
import SizeGuidePage from "./pages/SizeGuidePage";
import CareGuidePage from "./pages/CareGuidePage";
import FaqPage from "./pages/FaqPage";
import TrackOrderPage from "./pages/TrackOrderPage";
import WishlistPage from "./pages/WishlistPage";
import StoresPage from "./pages/StoresPage";
import AdminPage from "./pages/AdminPage";

const routes: Record<View, string> = {
  home: "/",
  shop: "/shop",
  product: "/product",
  cart: "/cart",
  checkout: "/checkout",
  journal: "/journal",
  about: "/about",
  contact: "/contact",
  policy: "/policy",
  account: "/account",
  admin: "/admin",
  size: "/size-guide",
  care: "/care-guide",
  faq: "/faq",
  track: "/track-order",
  wishlist: "/wishlist",
  stores: "/stores",
};

function readLocation(): {
  view: View;
  productId?: number;
  style?: "everyday" | "tailoring" | "accessories";
} {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const productMatch = path.match(/^\/product\/(\d+)$/);
  if (productMatch) {
    return { view: "product", productId: Number(productMatch[1]) };
  }

  const match = Object.entries(routes).find(([, route]) => route === path);
  const style = new URLSearchParams(window.location.search).get("style");
  return {
    view: (match?.[0] as View) || "home",
    style:
      style === "everyday" || style === "tailoring" || style === "accessories"
        ? style
        : undefined,
  };
}

function locationFor(
  view: View,
  productId?: number,
  style?: "everyday" | "tailoring" | "accessories",
) {
  const path =
    view === "product" && productId
      ? `${routes.product}/${productId}`
      : routes[view];
  return view === "shop" && style ? `${path}?style=${style}` : path;
}

function MobileNav({ onNav }: { onNav: Nav }) {
  return (
    <div className="mobile-nav">
      <button onClick={() => onNav("shop")}>
        Tất cả sản phẩm <ArrowRight size={16} />
      </button>
      <button onClick={() => onNav("journal")}>
        Journal <ArrowRight size={16} />
      </button>
      <button onClick={() => onNav("size")}>
        Hướng dẫn chọn size <ArrowRight size={16} />
      </button>
      <button onClick={() => onNav("contact")}>
        Liên hệ MONO <ArrowRight size={16} />
      </button>
    </div>
  );
}

export default function App() {
  const initialLocation = readLocation();
  const [view, setView] = useState<View>(initialLocation.view);
  const [selectedId, setSelectedId] = useState<number | undefined>(
    initialLocation.productId,
  );
  const [shopStyle, setShopStyle] = useState(initialLocation.style);
  const [catalog, setCatalog] = useState<Product[]>([]);
  const [selected, setSelected] = useState<Product | null>(null);
  const [cart, setCart] = useState<Product[]>([]);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    api
      .products()
      .then((items) => setCatalog(items as Product[]))
      .catch(() => setCatalog([]));
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const next = readLocation();
      setView(next.view);
      setSelectedId(next.productId);
      setShopStyle(next.style);
      setMenu(false);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (selectedId) {
      setSelected(catalog.find((product) => product.id === selectedId) || null);
    } else {
      setSelected(null);
    }
  }, [catalog, selectedId]);

  const go: Nav = (next, id, style) => {
    setView(next);
    setSelectedId(id);
    setShopStyle(style);
    window.history.pushState({}, "", locationFor(next, id, style));
    setMenu(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const add = (product: Product) => setCart((current) => [...current, product]);
  return (
    <div className="app">
      <div className="announcement">
        MIỄN PHÍ VẬN CHUYỂN CHO ĐƠN TỪ 999.000Đ <span>—</span> ĐỔI TRẢ TRONG 30
        NGÀY <Sparkles size={13} />
      </div>
      <SiteHeader
        count={cart.length}
        onNav={go}
        onMenu={() => setMenu((value) => !value)}
        activeView={view}
      />
      {menu && <MobileNav onNav={go} />}
      <main>
        {view === "home" && (
          <HomePage products={catalog} onNav={go} onAdd={add} />
        )}
        {view === "shop" && (
          <ShopPage
            products={catalog}
            onNav={go}
            onAdd={add}
            initialStyle={shopStyle}
          />
        )}
        {view === "product" && selected && (
          <ProductPage
            product={selected}
            catalog={catalog}
            onBack={() => go("shop")}
            onAdd={add}
          />
        )}
        {view === "cart" && (
          <CartPage
            cart={cart}
            onNav={go}
            onRemove={(id) =>
              setCart(cart.filter((product) => product.id !== id))
            }
          />
        )}
        {view === "checkout" && (
          <CheckoutPage
            cart={cart}
            onDone={() => {
              setCart([]);
              go("home");
            }}
          />
        )}
        {view === "account" && <AccountPage />}
        {view === "contact" && <ContactPage />}
        {view === "journal" && <JournalPage />}
        {view === "about" && <AboutPage />}
        {view === "policy" && <PolicyPage />}
        {view === "size" && <SizeGuidePage />}
        {view === "care" && <CareGuidePage />}
        {view === "faq" && <FaqPage />}
        {view === "track" && <TrackOrderPage />}
        {view === "wishlist" && <WishlistPage products={catalog} />}
        {view === "stores" && <StoresPage />}
        {view === "admin" && <AdminPage />}
      </main>
      {view !== "admin" && <SiteFooter onNav={go} />}
    </div>
  );
}
