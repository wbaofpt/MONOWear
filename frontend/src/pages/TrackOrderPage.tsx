import { Search } from "lucide-react";
import { useState } from "react";
import PageIntro from "../components/PageIntro";
export default function TrackOrderPage() {
  const [searched, setSearched] = useState(false);
  return (
    <section className="content-page utility-page">
      <PageIntro
        kicker="MONO / ORDER TRACKING"
        title="Đơn hàng đang ở đâu?"
        copy="Nhập mã đơn hàng để xem trạng thái giao hàng mới nhất."
      />
      <div className="track-card">
        <label>
          Mã đơn hàng
          <input aria-label="Mã đơn hàng" placeholder="#MW-1042" />
        </label>
        <button className="btn btn-dark" onClick={() => setSearched(true)}>
          Tra cứu đơn hàng <Search size={16} />
        </button>
        {searched && (
          <div className="tracking-result" aria-live="polite">
            <b>#MW-1042</b>
            <div className="track-line">
              <span className="done">✓</span>
              <p>
                <strong>Đã giao cho đơn vị vận chuyển</strong>
                <small>14:20 · 12/09/2025</small>
              </p>
            </div>
            <div className="track-line">
              <span>3</span>
              <p>
                <strong>Dự kiến giao hàng</strong>
                <small>13–14/09/2025</small>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
