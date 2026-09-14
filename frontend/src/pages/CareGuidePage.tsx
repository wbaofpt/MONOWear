import PageIntro from "../components/PageIntro";
export default function CareGuidePage() {
  const items = [
    [
      "01",
      "Giặt nhẹ nhàng",
      "Ưu tiên giặt tay hoặc chế độ delicate với nước lạnh. Không vắt xoắn.",
    ],
    [
      "02",
      "Phơi trong bóng râm",
      "Lộn trái sản phẩm và phơi nơi thoáng mát để màu vải bền hơn.",
    ],
    [
      "03",
      "Cất giữ đúng cách",
      "Dùng móc có đệm vai cho áo khoác; gấp đồ knit để tránh bai dáng.",
    ],
    [
      "04",
      "Sửa chữa thay vì bỏ đi",
      "Liên hệ MONO khi cần thay nút, sửa đường may hoặc chăm sóc chuyên sâu.",
    ],
  ];
  return (
    <section className="content-page utility-page">
      <PageIntro
        kicker="MONO / CARE GUIDE"
        title="Mặc lâu hơn, đẹp hơn."
        copy="Chăm sóc đúng cách giúp chất liệu giữ được phom dáng, màu sắc và câu chuyện riêng của nó."
      />
      <div className="care-grid">
        {items.map(([n, t, d]) => (
          <article key={n}>
            <span>{n}</span>
            <h3>{t}</h3>
            <p>{d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
