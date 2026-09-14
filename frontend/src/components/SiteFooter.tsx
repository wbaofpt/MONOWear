import type { Nav } from "../types";
export default function SiteFooter({ onNav }: { onNav: Nav }) {
  return (
    <footer>
      <div>
        <button className="logo brand-logo" onClick={() => onNav("home")}>
          <img src="/mono-logo.svg" alt="MONO Wear" />
        </button>
        <p>Everyday, elevated.</p>
      </div>
      <div>
        <h4>Khám phá</h4>
        <button className="footer-link" onClick={() => onNav("shop")}>
          Nam & Nữ
        </button>
        <button className="footer-link" onClick={() => onNav("journal")}>
          Journal
        </button>
        <button className="footer-link" onClick={() => onNav("about")}>
          Về MONO
        </button>
      </div>
      <div>
        <h4>Hỗ trợ</h4>
        <button className="footer-link" onClick={() => onNav("contact")}>
          Liên hệ
        </button>
        <button className="footer-link" onClick={() => onNav("policy")}>
          Vận chuyển & đổi trả
        </button>
        <button className="footer-link" onClick={() => onNav("faq")}>
          Câu hỏi thường gặp
        </button>
      </div>
      <div>
        <h4>Hướng dẫn</h4>
        <button className="footer-link" onClick={() => onNav("size")}>
          Chọn size
        </button>
        <button className="footer-link" onClick={() => onNav("care")}>
          Chăm sóc đồ
        </button>
        <button className="footer-link" onClick={() => onNav("stores")}>
          Cửa hàng
        </button>
      </div>
      <small className="copyright">
        © 2025 MONO Wear. Made with intention.
      </small>
    </footer>
  );
}
