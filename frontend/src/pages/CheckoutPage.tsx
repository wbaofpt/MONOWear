import { ArrowRight, ShieldCheck } from "lucide-react";
import { formatPrice, type Product } from "../data";
import { useState } from "react";
import PageIntro from "../components/PageIntro";
export default function CheckoutPage({
  cart,
  onDone,
}: {
  cart: Product[];
  onDone: () => void;
}) {
  const [done, setDone] = useState(false);
  const total = cart.reduce((sum, p) => sum + p.price, 0);
  return (
    <section className="content-page checkout-page">
      <PageIntro
        kicker="MONO / CHECKOUT"
        title="Hoàn tất đơn hàng."
        copy="Thông tin của bạn được bảo mật và chỉ dùng để giao đơn hàng."
      />
      {done ? (
        <div className="form-success checkout-success">
          <ShieldCheck size={34} />
          <h2>Đặt hàng thành công.</h2>
          <p>Cảm ơn bạn đã lựa chọn MONO. Mã đơn hàng của bạn là #MW-1043.</p>
          <button className="btn btn-dark" onClick={onDone}>
            Về trang chủ
          </button>
        </div>
      ) : (
        <div className="checkout-layout">
          <form
            className="checkout-form"
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <h2>Thông tin giao hàng</h2>
            <div className="form-row">
              <label>
                Họ và tên
                <input required placeholder="Nguyễn Minh Anh" />
              </label>
              <label>
                Số điện thoại
                <input required placeholder="090 000 0000" />
              </label>
            </div>
            <label>
              Địa chỉ nhận hàng
              <input required placeholder="Số nhà, đường, phường/xã..." />
            </label>
            <label>
              Tỉnh / thành phố
              <input required placeholder="Thành phố Hồ Chí Minh" />
            </label>
            <h2>Phương thức thanh toán</h2>
            <label className="payment-option">
              <input type="radio" defaultChecked name="payment" /> Thanh toán
              khi nhận hàng (COD)
            </label>
            <button className="btn btn-dark" type="submit">
              Đặt hàng · {formatPrice(total)} <ArrowRight size={16} />
            </button>
          </form>
          <aside className="summary">
            <h2>Đơn hàng của bạn</h2>
            {cart.map((p) => (
              <div key={p.id}>
                <span>{p.name}</span>
                <b>{formatPrice(p.price)}</b>
              </div>
            ))}
            <hr />
            <div className="sum-total">
              <span>Tổng cộng</span>
              <b>{formatPrice(total)}</b>
            </div>
          </aside>
        </div>
      )}
    </section>
  );
}
