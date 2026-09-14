import { ArrowRight, ShoppingBag, X } from "lucide-react";
import { formatPrice, type Product } from "../data";
import type { Nav } from "../types";
export default function CartPage({
  cart,
  onNav,
  onRemove,
}: {
  cart: Product[];
  onNav: Nav;
  onRemove: (id: number) => void;
}) {
  const total = cart.reduce((a, p) => a + p.price, 0);
  return (
    <section className="cart-page">
      <p className="eyebrow">MONO / CART</p>
      <h1>
        Giỏ hàng <span>({cart.length})</span>
      </h1>
      {!cart.length ? (
        <div className="empty">
          <ShoppingBag size={32} />
          <h2>Giỏ hàng đang trống.</h2>
          <p>Hãy bắt đầu với những thiết kế được chọn lọc cho bạn.</p>
          <button className="btn btn-dark" onClick={() => onNav("shop")}>
            Xem sản phẩm <ArrowRight size={16} />
          </button>
        </div>
      ) : (
        <div className="cart-layout">
          <div>
            {cart.map((p) => (
              <div className="cart-item" key={p.id}>
                <img src={p.image} alt={p.name} />
                <div>
                  <h3>{p.name}</h3>
                  <p>{p.category}</p>
                  <strong>{formatPrice(p.price)}</strong>
                </div>
                <button
                  onClick={() => onRemove(p.id)}
                  aria-label={`Xóa ${p.name}`}
                >
                  <X size={17} />
                </button>
              </div>
            ))}
          </div>
          <aside className="summary">
            <h2>Tóm tắt đơn hàng</h2>
            <div>
              <span>Tạm tính</span>
              <b>{formatPrice(total)}</b>
            </div>
            <div>
              <span>Vận chuyển</span>
              <span>
                {total >= 999000 ? "Miễn phí" : "Tính ở bước tiếp theo"}
              </span>
            </div>
            <hr />
            <div className="sum-total">
              <span>Tổng cộng</span>
              <b>{formatPrice(total)}</b>
            </div>
            <button className="btn btn-dark" onClick={() => onNav("checkout")}>
              Tiến hành thanh toán <ArrowRight size={16} />
            </button>
          </aside>
        </div>
      )}
    </section>
  );
}
