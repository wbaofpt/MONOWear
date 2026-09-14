import { Heart } from "lucide-react";
import type { Product } from "../data";
import PageIntro from "../components/PageIntro";
export default function WishlistPage({ products }: { products: Product[] }) {
  return (
    <section className="content-page utility-page">
      <PageIntro
        kicker="MONO / WISHLIST"
        title="Những món bạn để tâm."
        copy="Một tuyển chọn nhỏ từ đội ngũ MONO để bắt đầu tủ đồ của bạn."
      />
      <div className="wishlist-note">
        <Heart size={18} />
        <span>
          Đăng nhập để lưu sản phẩm và đồng bộ danh sách trên mọi thiết bị.
        </span>
        <button className="text-link">Đăng nhập</button>
      </div>
      <div className="product-grid wishlist-grid">
        {products.slice(0, 3).map((p) => (
          <article className="product-card" key={p.id}>
            <div className="product-image">
              <img src={p.image} alt={p.name} />
              <button
                className="heart active-heart"
                aria-label={`Bỏ thích ${p.name}`}
              >
                <Heart size={17} fill="currentColor" />
              </button>
            </div>
            <div className="product-info">
              <div>
                <h3>{p.name}</h3>
                <p>{p.category}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
