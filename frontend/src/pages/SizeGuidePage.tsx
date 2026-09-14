import { Sparkles } from "lucide-react";
import PageIntro from "../components/PageIntro";
export default function SizeGuidePage() {
  const rows = [
    ["XS", "80–84", "62–66", "86–90"],
    ["S", "84–88", "66–70", "90–94"],
    ["M", "88–92", "70–74", "94–98"],
    ["L", "92–96", "74–78", "98–102"],
    ["XL", "96–100", "78–82", "102–106"],
  ];
  return (
    <section className="content-page utility-page">
      <PageIntro
        kicker="MONO / FIT GUIDE"
        title="Tìm đúng phom dáng."
        copy="Số đo chỉ là điểm bắt đầu. Hãy chọn size khiến bạn cảm thấy tự nhiên nhất khi chuyển động."
      />
      <div className="guide-table">
        <div className="guide-row guide-head">
          <span>Size</span>
          <span>Ngực</span>
          <span>Eo</span>
          <span>Hông</span>
        </div>
        {rows.map((row) => (
          <div className="guide-row" key={row[0]}>
            {row.map((cell) => (
              <span key={cell}>{cell} cm</span>
            ))}
          </div>
        ))}
      </div>
      <div className="tip-card">
        <Sparkles size={20} />
        <div>
          <h3>Nếu bạn ở giữa hai size</h3>
          <p>
            Chọn size lớn hơn để có cảm giác thoải mái, hoặc liên hệ MONO để
            được tư vấn riêng.
          </p>
        </div>
      </div>
    </section>
  );
}
