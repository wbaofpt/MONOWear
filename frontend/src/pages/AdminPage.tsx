import { useEffect, useState } from "react";
import { api } from "../api";
import { formatPrice, type Product } from "../data";

type ProductDraft = Omit<Product, "id"> & { id?: number };

export default function AdminPage() {
  const [tab, setTab] = useState("Tổng quan");
  const [items, setItems] = useState<Product[]>([]);
  const [editing, setEditing] = useState<ProductDraft | null>(null);
  const [message, setMessage] = useState("");
  const tabs = ["Tổng quan", "Sản phẩm", "Đơn hàng", "Khách hàng", "Tin nhắn"];
  const load = () => api.products().then((data) => setItems(data as Product[]));
  useEffect(() => {
    load().catch(() => setMessage("Không thể tải dữ liệu từ MySQL."));
  }, []);
  async function save(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!editing) return;
    const payload = {
      ...editing,
      price: Number(editing.price),
      badge: editing.badge || null,
    };
    const response = await fetch(
      editing.id ? `/api/products/${editing.id}` : "/api/products",
      {
        method: editing.id ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
    );
    if (response.ok) {
      setEditing(null);
      setMessage("Đã lưu sản phẩm vào MySQL.");
      await load();
    } else setMessage("Không thể lưu sản phẩm.");
  }
  async function remove(id: number) {
    if (!window.confirm("Xóa sản phẩm này?")) return;
    const response = await fetch(`/api/products/${id}`, { method: "DELETE" });
    if (response.ok) {
      setItems(items.filter((item) => item.id !== id));
      setMessage("Đã xóa sản phẩm.");
    }
  }
  return (
    <section className="admin">
      <aside className="admin-side">
        <button className="admin-logo">
          MONO<small>ADMIN</small>
        </button>
        <p className="admin-label">WORKSPACE</p>
        {tabs.map((item) => (
          <button
            className={tab === item ? "selected" : ""}
            onClick={() => setTab(item)}
            key={item}
          >
            {item}
          </button>
        ))}
      </aside>
      <div className="admin-main">
        <div className="admin-top">
          <div>
            <p className="eyebrow">MONO / ADMIN</p>
            <h1>{tab}</h1>
          </div>
          {tab === "Sản phẩm" && (
            <button
              className="btn btn-dark"
              onClick={() =>
                setEditing({
                  name: "",
                  category: "",
                  price: 0,
                  image: "",
                  badge: "",
                })
              }
            >
              + Thêm sản phẩm
            </button>
          )}
        </div>
        {message && (
          <p className="admin-message" role="status">
            {message}
          </p>
        )}
        {tab === "Sản phẩm" ? (
          <>
            <div className="admin-product-list">
              {items.map((item) => (
                <div className="admin-product-row" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <b>{item.name}</b>
                    <small>
                      {item.category} · {formatPrice(item.price)}
                    </small>
                  </div>
                  <button
                    className="text-link"
                    onClick={() => setEditing(item)}
                  >
                    Chỉnh sửa
                  </button>
                  <button
                    className="icon-btn"
                    aria-label={`Xóa ${item.name}`}
                    onClick={() => remove(item.id)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            {editing && (
              <form className="admin-editor" onSubmit={save}>
                <h2>{editing.id ? "Chỉnh sửa sản phẩm" : "Thêm sản phẩm"}</h2>
                {(["name", "category", "price", "image", "badge"] as const).map(
                  (field) => (
                    <label key={field}>
                      {field}
                      <input
                        required={field !== "badge"}
                        value={editing[field] as string | number}
                        onChange={(event) =>
                          setEditing({
                            ...editing,
                            [field]:
                              field === "price"
                                ? Number(event.target.value)
                                : event.target.value,
                          })
                        }
                      />
                    </label>
                  ),
                )}
                <div>
                  <button className="btn btn-dark" type="submit">
                    Lưu thay đổi
                  </button>
                  <button
                    className="text-link"
                    type="button"
                    onClick={() => setEditing(null)}
                  >
                    Hủy
                  </button>
                </div>
              </form>
            )}
          </>
        ) : (
          <div className="admin-placeholder">
            <h2>
              {tab === "Tổng quan"
                ? "Dữ liệu vận hành"
                : `Quản lý ${tab.toLowerCase()}`}
            </h2>
            <p>
              Dữ liệu của khu vực này được đọc từ MySQL thông qua các API admin.
              Chọn Sản phẩm để chỉnh sửa catalog trực tiếp.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
