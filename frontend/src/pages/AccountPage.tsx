import { ArrowRight, ShieldCheck } from "lucide-react";
import { useState } from "react";
import PageIntro from "../components/PageIntro";
export default function AccountPage() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [done, setDone] = useState(false);
  return (
    <section className="content-page account-page">
      <PageIntro
        kicker="MONO / ACCOUNT"
        title={mode === "login" ? "Chào mừng trở lại." : "Bắt đầu cùng MONO."}
        copy={
          mode === "login"
            ? "Đăng nhập để theo dõi đơn hàng, lưu sản phẩm yêu thích và nhận ưu đãi riêng."
            : "Tạo tài khoản để lưu lựa chọn, quản lý đơn hàng và nhận những câu chuyện mới từ MONO."
        }
      />
      <div className="account-card">
        <div className="account-tabs">
          <button
            className={mode === "login" ? "active" : ""}
            onClick={() => {
              setMode("login");
              setDone(false);
            }}
          >
            Đăng nhập
          </button>
          <button
            className={mode === "register" ? "active" : ""}
            onClick={() => {
              setMode("register");
              setDone(false);
            }}
          >
            Đăng ký
          </button>
        </div>
        {done ? (
          <div className="form-success">
            <ShieldCheck size={24} />
            <h3>
              {mode === "login"
                ? "Đăng nhập thành công."
                : "Tài khoản đã được tạo."}
            </h3>
            <p>Chào mừng bạn đến với thế giới MONO.</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            {mode === "register" && (
              <label>
                Họ và tên
                <input required placeholder="Nguyễn Minh Anh" />
              </label>
            )}
            <label>
              Email
              <input required type="email" placeholder="you@email.com" />
            </label>
            <label>
              Mật khẩu
              <input
                required
                minLength={8}
                type="password"
                placeholder="Tối thiểu 8 ký tự"
              />
            </label>
            {mode === "register" && (
              <label>
                Xác nhận mật khẩu
                <input
                  required
                  minLength={8}
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                />
              </label>
            )}
            <button className="btn btn-dark" type="submit">
              {mode === "login" ? "Đăng nhập" : "Tạo tài khoản"}{" "}
              <ArrowRight size={16} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
