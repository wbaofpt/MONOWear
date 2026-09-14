import { ArrowRight } from "lucide-react";
import PageIntro from "../components/PageIntro";
export default function JournalPage() {
  return (
    <section className="content-page">
      <PageIntro
        kicker="MONO JOURNAL"
        title="Mặc đẹp, sống có chủ đích."
        copy="Những câu chuyện về chất liệu, phong cách và cách xây dựng một tủ đồ bền vững hơn."
      />
      <div className="journal-grid">
        <article className="journal-feature">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85"
            alt="Người mẫu trong trang phục MONO"
          />
          <p className="eyebrow">01 / STYLE NOTE</p>
          <h2>Đơn giản là một tuyên ngôn.</h2>
          <p>
            Không chạy theo mùa vụ. Chúng tôi tin vào những món đồ ở lại lâu hơn
            trong tủ đồ và trong ký ức.
          </p>
          <button className="text-link">
            Đọc bài viết <ArrowRight size={16} />
          </button>
        </article>
        <div className="journal-list">
          <article>
            <img
              src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=700&q=85"
              alt="Chất liệu linen"
            />
            <p className="eyebrow">02 / MATERIAL</p>
            <h3>Linen: nhịp thở của mùa hè</h3>
            <p>Từ sợi vải tự nhiên đến cảm giác mềm dần theo thời gian.</p>
          </article>
          <article>
            <img
              src="https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=700&q=85"
              alt="Áo sơ mi cotton"
            />
            <p className="eyebrow">03 / CARE GUIDE</p>
            <h3>Chăm sóc những điều bạn yêu</h3>
            <p>Một vài thói quen nhỏ để quần áo đồng hành lâu hơn.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
