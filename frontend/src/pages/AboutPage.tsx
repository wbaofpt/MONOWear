import PageIntro from "../components/PageIntro";
export default function AboutPage() {
  return (
    <section className="content-page">
      <PageIntro
        kicker="THE MONO STANDARD"
        title="Làm ít hơn. Làm tốt hơn."
        copy="MONO Wear là thương hiệu thời trang độc lập, được xây dựng quanh tinh thần tối giản và sự tử tế với đời sống."
      />
      <div className="about-split">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1100&q=85"
          alt="Không gian thời trang MONO"
        />
        <div>
          <p className="eyebrow">OUR POINT OF VIEW</p>
          <h2>Thiết kế tốt bắt đầu từ việc lắng nghe.</h2>
          <p>
            Mỗi sản phẩm MONO được nghiên cứu để dễ mặc, dễ phối và có thể trở
            thành một phần tự nhiên trong nhịp sống của bạn.
          </p>
          <p>
            Chúng tôi ưu tiên các chất liệu có nguồn gốc rõ ràng, sản xuất theo
            lô nhỏ và những đối tác cùng chia sẻ tiêu chuẩn về chất lượng.
          </p>
        </div>
      </div>
      <div className="values">
        <div>
          <span>01</span>
          <h3>Vượt thời gian</h3>
          <p>Phom dáng không bị giới hạn bởi một mùa mốt.</p>
        </div>
        <div>
          <span>02</span>
          <h3>Có chủ đích</h3>
          <p>Mỗi chi tiết đều có lý do để tồn tại.</p>
        </div>
        <div>
          <span>03</span>
          <h3>Gần gũi</h3>
          <p>Thời trang tốt bắt đầu từ cảm giác thoải mái.</p>
        </div>
      </div>
    </section>
  );
}
