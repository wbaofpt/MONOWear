import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import type { Product } from "../data";
import type { Nav } from "../types";
import { api } from "../api";
import ProductCard from "../components/ProductCard";
import "./home.css";

const photo = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1100&q=85`;
const moods = [
  {
    style: "everyday",
    title: "Ra phố. Là chính mình.",
    label: "01 / EVERYDAY",
    image: "photo-1483985988355-763728e1935b",
  },
  {
    style: "tailoring",
    title: "Lịch sự, không cứng nhắc.",
    label: "02 / SOFT TAILORING",
    image: "photo-1490481651871-ab68de25d43d",
  },
  {
    style: "accessories",
    title: "Chi tiết làm nên chất riêng.",
    label: "03 / FINISHING TOUCHES",
    image: "photo-1594223274512-ad4803739b7c",
  },
] as const;
const guides = [
  {
    view: "size",
    title: "Chọn đúng phom",
    text: "Tham khảo bảng kích thước trước khi chọn món đồ yêu thích.",
  },
  {
    view: "care",
    title: "Mặc đẹp, giữ bền",
    text: "Tìm hiểu cách giặt, phơi và bảo quản từng loại chất liệu.",
  },
  {
    view: "contact",
    title: "Cần một lời tư vấn?",
    text: "Liên hệ MONO để được hỗ trợ sản phẩm và đơn hàng.",
  },
] as const;

export default function HomePage({
  products,
  onNav,
  onAdd,
}: {
  products: Product[];
  onNav: Nav;
  onAdd: (p: Product) => void;
}) {
  const root = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  const [added, setAdded] = useState("");
  useEffect(() => {
    if (
      !root.current ||
      !window.IntersectionObserver ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("mw-waiting");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    root.current.querySelectorAll("[data-reveal]").forEach((node) => {
      node.classList.add("mw-waiting");
      observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);
  function productRow(items: Product[]) {
    return items.length ? (
      <div className="product-grid">
        {items.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onOpen={() => onNav("product", p.id)}
            onAdd={() => {
              onAdd(p);
              setAdded(`Đã thêm ${p.name} vào giỏ hàng.`);
            }}
          />
        ))}
      </div>
    ) : (
      <div className="mw-empty">
        Bộ sưu tập đang được cập nhật.{" "}
        <button onClick={() => onNav("shop")}>
          Khám phá cửa hàng <ArrowRight size={16} />
        </button>
      </div>
    );
  }
  return (
    <div className="mw-home" ref={root}>
      <section className="mw-hero">
        <div className="mw-hero-copy">
          <p className="mw-kicker">
            <Sparkles size={16} /> MONO WEAR / YOUR DAILY EXPRESSION
          </p>
          <h1>
            MẶC CHẤT.
            <br />
            <span>SỐNG THẬT.</span>
          </h1>
          <p>
            Một chút ngẫu hứng. Một chút khác biệt. Tìm những món đồ hợp với bạn
            — và biến mỗi ngày thành sàn diễn của riêng mình.
          </p>
          <div className="mw-actions">
            <button className="mw-button" onClick={() => onNav("shop")}>
              Khám phá ngay <ArrowUpRight size={20} />
            </button>
            <a href="#mono-edit">
              Tìm chất riêng <ArrowRight size={18} />
            </a>
          </div>
          <div className="mw-hero-foot">
            <span>LESS RULES.</span>
            <span>MORE YOU. ↗</span>
          </div>
        </div>
        <div className="mw-hero-photo">
          <img
            src={photo("photo-1529139574466-a303027c1d8b")}
            alt="Phong cách đường phố với kính màu sắc và áo đỏ nổi bật"
            fetchPriority="high"
          />
          <span className="mw-sticker">
            100%
            <br />
            YOURSELF
          </span>
          <span className="mw-photo-label">THE STREETS ARE YOURS.</span>
        </div>
      </section>
      <div className="mw-ribbon">
        <span>YOUR STYLE. YOUR RULES.</span>
        <Sparkles aria-hidden="true" />
        <span>MẶC THEO CÁCH CỦA BẠN</span>
        <ArrowUpRight aria-hidden="true" />
        <span>MONO WEAR</span>
      </div>
      <section className="mw-section" data-reveal>
        <div className="mw-heading">
          <div>
            <p className="mw-kicker">THE DAILY ROTATION</p>
            <h2>
              Tủ đồ cần <em>chất mới.</em>
            </h2>
          </div>
          <button onClick={() => onNav("shop")}>
            Xem tất cả <ArrowUpRight size={20} />
          </button>
        </div>
        {productRow(products.slice(0, 5))}
      </section>
      <section className="mw-section mw-moods" id="mono-edit" data-reveal>
        <div className="mw-heading">
          <div>
            <p className="mw-kicker">THE MONO EDIT</p>
            <h2>
              Hôm nay, bạn <em>mood gì?</em>
            </h2>
          </div>
          <p>
            Chọn một cảm hứng.
            <br />
            Phối thành câu chuyện của bạn.
          </p>
        </div>
        <div className="mw-mood-grid">
          {moods.map((mood) => (
            <button
              key={mood.style}
              className="mw-mood"
              onClick={() => onNav("shop", undefined, mood.style)}
            >
              <div>
                <img loading="lazy" src={photo(mood.image)} alt={mood.title} />
                <span className="mw-mood-arrow">
                  <ArrowUpRight size={24} />
                </span>
              </div>
              <span className="mw-kicker">{mood.label}</span>
              <h3>{mood.title}</h3>
            </button>
          ))}
        </div>
      </section>
      <section className="mw-manifesto" data-reveal>
        <span>KHÔNG CẦN GIỐNG AI.</span>
        <p>
          Chỉ cần <em>giống bạn.</em>
        </p>
        <button onClick={() => onNav("about")}>
          Gặp gỡ MONO <ArrowUpRight size={22} />
        </button>
      </section>
      {products.length > 5 && (
        <section className="mw-section">
          <div className="mw-heading">
            <div>
              <p className="mw-kicker">MORE TO EXPLORE</p>
              <h2>
                Thêm lựa chọn. <em>Thêm cảm hứng.</em>
              </h2>
            </div>
            <button onClick={() => onNav("shop")}>
              Khám phá bộ sưu tập <ArrowUpRight size={20} />
            </button>
          </div>
          {productRow(products.slice(5, 10))}
        </section>
      )}
      <section className="mw-story" data-reveal>
        <div>
          <p className="mw-kicker">BEHIND THE LOOK / MONO JOURNAL</p>
          <h2>
            Không chỉ là đồ mặc.
            <br />
            <em>Là cách bạn kể chuyện.</em>
          </h2>
          <p>
            Thử một cách phối mới, tìm hiểu chất liệu và khám phá những góc nhìn
            khác về phong cách hằng ngày.
          </p>
          <button className="mw-button" onClick={() => onNav("journal")}>
            Mở trang cảm hứng <ArrowUpRight size={20} />
          </button>
        </div>
        <div className="mw-story-photo">
          <img
            loading="lazy"
            src={photo("photo-1496747611176-843222e1e57c")}
            alt="Cảm hứng phối trang phục trong không gian ngoài trời"
          />
        </div>
      </section>
      <section className="mw-help" data-reveal>
        {guides.map((item, index) => (
          <button key={item.view} onClick={() => onNav(item.view)}>
            <span>0{index + 1} /</span>
            <h3>
              {item.title} <ArrowUpRight size={20} />
            </h3>
            <p>{item.text}</p>
          </button>
        ))}
      </section>
      <section className="mw-newsletter" data-reveal>
        <div>
          <p className="mw-kicker">JOIN THE MONO CLUB</p>
          <h2>
            Đừng bỏ lỡ
            <br />
            <em>điều hay ho.</em>
          </h2>
          <p>
            Đăng ký email để nhận tin bộ sưu tập và cảm hứng phối đồ từ MONO.
          </p>
        </div>
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            if (pending) return;
            setPending(true);
            setMessage("");
            try {
              await api.subscribe(email.trim());
              setMessage("Bạn đã đăng ký nhận tin MONO thành công!");
              setEmail("");
            } catch (error) {
              setMessage(
                error instanceof Error
                  ? error.message
                  : "Chưa thể đăng ký. Vui lòng thử lại.",
              );
            } finally {
              setPending(false);
            }
          }}
        >
          <label htmlFor="mono-email">Email của bạn</label>
          <div>
            <input
              id="mono-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={180}
              placeholder="ban@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button type="submit" disabled={pending}>
              {pending ? "Đang gửi…" : "Tham gia"}
              <ArrowUpRight size={20} />
            </button>
          </div>
          <p role="status">
            {message || "Gửi biểu mẫu để đăng ký nhận email từ MONO."}
          </p>
        </form>
      </section>
      <p role="status" className={added ? "mw-cart-notice" : "mw-no-notice"}>
        {added}
        {added && (
          <button onClick={() => setAdded("")} aria-label="Đóng thông báo">
            ×
          </button>
        )}
      </p>
    </div>
  );
}
