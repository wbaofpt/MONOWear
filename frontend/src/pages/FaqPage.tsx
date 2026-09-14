import { Plus } from "lucide-react";
import PageIntro from "../components/PageIntro";
export default function FaqPage() {
  const rows = [
    [
      "Làm sao để chọn size phù hợp?",
      "Bạn có thể tham khảo bảng size của từng sản phẩm hoặc gửi số đo cho đội ngũ MONO để được tư vấn.",
    ],
    [
      "Đơn hàng sẽ được giao trong bao lâu?",
      "Đơn hàng nội thành thường đến trong 1–2 ngày; các tỉnh thành khác từ 3–5 ngày làm việc.",
    ],
    [
      "Tôi có thể đổi sản phẩm không?",
      "MONO hỗ trợ đổi trong vòng 30 ngày, với sản phẩm còn nguyên tem và chưa qua sử dụng.",
    ],
    [
      "MONO có cửa hàng vật lý không?",
      "Có. Ghé trang Cửa hàng để xem địa chỉ, giờ mở cửa và đặt lịch thử đồ.",
    ],
  ];
  return (
    <section className="content-page utility-page">
      <PageIntro
        kicker="MONO / FAQ"
        title="Bạn hỏi, MONO trả lời."
        copy="Những câu hỏi phổ biến về sản phẩm, đơn hàng và trải nghiệm mua sắm."
      />
      <div className="faq-list">
        {rows.map(([q, a]) => (
          <details key={q}>
            <summary>
              {q}
              <Plus size={17} />
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
