import { ArrowRight, ShieldCheck } from "lucide-react";
import { useState } from "react";
import PageIntro from "../components/PageIntro";
export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <section className="content-page contact-page">
      <PageIntro
        kicker="MONO / CONTACT"
        title="Chúng tôi đang lắng nghe."
        copy="Bạn cần tư vấn về size, đơn hàng hay chất liệu? Hãy gửi tin cho MONO."
      />
      <div className="contact-grid">
        <div className="contact-details">
          <h2>Trò chuyện cùng MONO</h2>
          <p>
            Thứ Hai — Thứ Sáu
            <br />
            09:00 — 18:00 (GMT+7)
          </p>
          <p>
            hello@monowear.vn
            <br />
            +84 28 3838 2025
          </p>
        </div>
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          {sent ? (
            <div className="form-success">
              <ShieldCheck size={24} />
              <h3>Cảm ơn bạn đã liên hệ.</h3>
              <p>MONO sẽ phản hồi trong vòng 1 ngày làm việc.</p>
            </div>
          ) : (
            <>
              <label>
                Họ và tên
                <input required name="name" placeholder="Nguyễn Minh Anh" />
              </label>
              <label>
                Email
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                />
              </label>
              <label>
                Nội dung
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Bạn muốn hỏi MONO điều gì?"
                />
              </label>
              <button className="btn btn-dark" type="submit">
                Gửi tin nhắn <ArrowRight size={16} />
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
