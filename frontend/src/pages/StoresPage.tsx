import { ArrowRight } from "lucide-react";
import PageIntro from "../components/PageIntro";
export default function StoresPage() {
  return (
    <section className="content-page utility-page">
      <PageIntro
        kicker="MONO / STORES"
        title="Ghé MONO ngoài đời."
        copy="Thử chất liệu, chạm vào phom dáng và tìm nhịp riêng của bạn tại cửa hàng."
      />
      <div className="store-grid">
        <article>
          <div className="store-photo store-hcm">
            <span>HỒ CHÍ MINH</span>
          </div>
          <h2>MONO Nguyễn Siêu</h2>
          <p>
            12 Nguyễn Siêu, Bến Nghé, Quận 1<br />
            10:00 — 21:00 mỗi ngày
          </p>
          <button className="text-link">
            Chỉ đường <ArrowRight size={16} />
          </button>
        </article>
        <article>
          <div className="store-photo store-hn">
            <span>HÀ NỘI</span>
          </div>
          <h2>MONO Nhà Thờ</h2>
          <p>
            18 Nhà Chung, Hoàn Kiếm
            <br />
            10:00 — 21:00 mỗi ngày
          </p>
          <button className="text-link">
            Chỉ đường <ArrowRight size={16} />
          </button>
        </article>
      </div>
    </section>
  );
}
