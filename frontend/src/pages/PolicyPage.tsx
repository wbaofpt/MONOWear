import { Plus } from "lucide-react";
import PageIntro from "../components/PageIntro";
export default function PolicyPage() {
  const rows = [
    [
      "Vận chuyển",
      "Miễn phí vận chuyển cho đơn hàng từ 999.000đ. Đơn hàng được xử lý trong 1–2 ngày làm việc và giao toàn quốc.",
    ],
    [
      "Đổi trả",
      "Bạn có thể đổi sản phẩm trong vòng 30 ngày kể từ ngày nhận hàng, sản phẩm còn nguyên tem và chưa qua sử dụng.",
    ],
    [
      "Thanh toán",
      "Hỗ trợ thanh toán qua thẻ nội địa, Visa/Mastercard và COD. Mọi giao dịch đều được bảo mật.",
    ],
    [
      "Bảo mật",
      "MONO chỉ sử dụng thông tin của bạn để xử lý đơn hàng và cải thiện trải nghiệm mua sắm.",
    ],
  ];
  return (
    <section className="content-page">
      <PageIntro
        kicker="MONO / SUPPORT"
        title="Chính sách & hỗ trợ"
        copy="Tất cả thông tin bạn cần để mua sắm tại MONO thật dễ dàng."
      />
      <div className="policy-list">
        {rows.map(([title, body]) => (
          <details key={title} open>
            <summary>
              {title}
              <Plus size={17} />
            </summary>
            <p>{body}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
