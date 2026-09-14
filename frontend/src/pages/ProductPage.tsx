import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  Check,
  Heart,
  Package,
  ShieldCheck,
  ShoppingBag,
  Star,
} from "lucide-react";
import { formatPrice, type Product } from "../data";
import { api, type Review } from "../api";
import ProductCard from "../components/ProductCard";

const galleryFor = (product: Product) => [
  product.image,
  `https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1000&q=85`,
  `https://images.unsplash.com/photo-1555069519-127aadedf1ee?auto=format&fit=crop&w=1000&q=85`,
];
const Stars = ({
  value,
  large = false,
}: {
  value: number;
  large?: boolean;
}) => (
  <span
    className={large ? "rating-stars rating-stars-large" : "rating-stars"}
    aria-label={`${value} trên 5 sao`}
  >
    {[1, 2, 3, 4, 5].map((n) => (
      <Star
        key={n}
        size={large ? 19 : 14}
        fill={n <= Math.round(value) ? "currentColor" : "none"}
      />
    ))}
  </span>
);

export default function ProductPage({
  product,
  catalog,
  onBack,
  onAdd,
}: {
  product: Product;
  catalog: Product[];
  onBack: () => void;
  onAdd: (p: Product) => void;
}) {
  const gallery = useMemo(() => galleryFor(product), [product]);
  const [activeImage, setActiveImage] = useState(gallery[0]);
  const [size, setSize] = useState("M");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [average, setAverage] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [breakdown, setBreakdown] = useState<Record<1 | 2 | 3 | 4 | 5, number>>(
    { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
  );
  const [reviewOpen, setReviewOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    setActiveImage(gallery[0]);
    api
      .reviews(product.id)
      .then((data) => {
        setReviews(data.reviews);
        setAverage(data.summary.average);
        setReviewCount(data.summary.count);
        setBreakdown(data.summary.breakdown);
      })
      .catch(() => {
        setReviews([]);
        setAverage(0);
        setReviewCount(0);
        setBreakdown({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });
      });
  }, [gallery, product.id]);
  async function submitReview(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
      const review = await api.review(product.id, {
        customerName: String(form.get("customerName")),
        rating: Number(form.get("rating")),
        title: String(form.get("title")),
        body: String(form.get("body")),
      });
      setReviews((current) => [review, ...current]);
      setReviewCount((current) => current + 1);
      setBreakdown((current) => ({
        ...current,
        [review.rating]: current[review.rating as 1 | 2 | 3 | 4 | 5] + 1,
      }));
      setAverage(
        (reviews.reduce((sum, item) => sum + item.rating, 0) + review.rating) /
          (reviews.length + 1),
      );
      setSubmitted(true);
    } catch {
      setSubmitted(false);
    }
  }
  return (
    <section className="detail-page">
      <button className="back-link" onClick={onBack}>
        <ArrowLeft size={15} /> Quay lại cửa hàng
      </button>
      <div className="product-detail-new">
        <div className="detail-gallery">
          <div className="gallery-thumbs">
            {gallery.map((image) => (
              <button
                key={image}
                className={activeImage === image ? "thumb active" : "thumb"}
                onClick={() => setActiveImage(image)}
                aria-label="Xem ảnh sản phẩm"
              >
                <img src={image} alt="" />
              </button>
            ))}
          </div>
          <div className="detail-photo">
            <img src={activeImage} alt={product.name} />
            <button className="detail-favorite" aria-label="Thêm vào yêu thích">
              <Heart size={20} />
            </button>
            {product.badge && (
              <span className="detail-badge">{product.badge}</span>
            )}
          </div>
        </div>
        <div className="detail-copy">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <div className="detail-rating">
            <Stars value={average} />
            <button
              onClick={() =>
                document
                  .getElementById("reviews")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {reviewCount} đánh giá
            </button>
            {reviewCount > 0 && (
              <>
                <span>•</span>
                <span>Đánh giá từ khách hàng</span>
              </>
            )}
          </div>
          <p className="detail-price">{formatPrice(product.price)}</p>
          <p className="detail-desc">
            Phom dáng thoải mái, đường nét tinh gọn và chất liệu tự nhiên để bạn
            tự do chuyển động mỗi ngày. Một thiết kế bền vững cho tủ đồ hiện
            đại.
          </p>
          <div className="stock-status">
            <span className="stock-dot" /> Còn hàng · Giao trong 1–2 ngày
          </div>
          <hr />
          <label>
            Màu sắc <b>— Charcoal</b>
          </label>
          <div className="swatches">
            <button
              className="swatch charcoal selected"
              aria-label="Màu charcoal"
            />
            <button className="swatch stone" aria-label="Màu stone" />
          </div>
          <div className="size-label">
            <label>Kích cỡ</label>
            <button className="size-guide-link">Hướng dẫn chọn size</button>
          </div>
          <div className="sizes">
            {["XS", "S", "M", "L", "XL"].map((item) => (
              <button
                className={size === item ? "selected" : ""}
                onClick={() => setSize(item)}
                key={item}
              >
                {item}
              </button>
            ))}
          </div>
          <button
            className="btn btn-dark add-large"
            onClick={() => onAdd(product)}
          >
            Thêm vào giỏ <ShoppingBag size={17} />
          </button>
          <div className="detail-perks">
            <p>
              <Package size={17} />
              <span>
                <b>Giao hàng miễn phí</b>
                <small>Cho đơn hàng từ 999.000đ</small>
              </span>
            </p>
            <p>
              <ShieldCheck size={17} />
              <span>
                <b>Đổi trả trong 30 ngày</b>
                <small>Đổi size miễn phí lần đầu</small>
              </span>
            </p>
            <p>
              <Check size={17} />
              <span>
                <b>Chất lượng MONO</b>
                <small>Kiểm tra kỹ trước khi gửi</small>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="detail-accordions">
        <details open>
          <summary>
            Thông tin sản phẩm <span>+</span>
          </summary>
          <p>
            Thân áo linen pha cotton mềm, thoáng khí. Phom boxy vừa vặn với
            đường vai tự nhiên, phù hợp để mặc riêng hoặc layer.
          </p>
        </details>
        <details>
          <summary>
            Vận chuyển & đổi trả <span>+</span>
          </summary>
          <p>
            Đơn hàng được đóng gói trong giấy tái chế và giao toàn quốc. Bạn có
            30 ngày để đổi sản phẩm còn nguyên tem, chưa qua sử dụng.
          </p>
        </details>
        <details>
          <summary>
            Chăm sóc sản phẩm <span>+</span>
          </summary>
          <p>
            Giặt lạnh, lộn trái và phơi trong bóng râm. Không vắt xoắn hoặc sấy
            ở nhiệt độ cao.
          </p>
        </details>
      </div>
      <section id="reviews" className="reviews-section">
        <div className="reviews-head">
          <div>
            <p className="eyebrow">CUSTOMER NOTES</p>
            <h2>Đánh giá từ cộng đồng MONO.</h2>
          </div>
          <button
            className="btn btn-dark"
            onClick={() => setReviewOpen((v) => !v)}
          >
            Viết đánh giá <Star size={15} />
          </button>
        </div>
        <div className="reviews-summary">
          <div className="review-score">
            <strong>{reviewCount ? average.toFixed(1) : "—"}</strong>
            {reviewCount ? (
              <Stars value={average} large />
            ) : (
              <span>Chưa có đánh giá</span>
            )}
            <span>{reviewCount} đánh giá</span>
          </div>
          <div className="rating-bars">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star}>
                <span>{star}</span>
                <div>
                  <i
                    style={{
                      width: `${reviewCount ? (breakdown[star as 1 | 2 | 3 | 4 | 5] / reviewCount) * 100 : 0}%`,
                    }}
                  />
                </div>
                <small>
                  {reviewCount
                    ? `${Math.round((breakdown[star as 1 | 2 | 3 | 4 | 5] / reviewCount) * 100)}%`
                    : "0%"}
                </small>
              </div>
            ))}
          </div>
        </div>
        {reviewOpen && (
          <form className="review-form" onSubmit={submitReview}>
            {submitted ? (
              <p className="form-success" role="status">
                Cảm ơn bạn. Đánh giá đã được ghi nhận.
              </p>
            ) : (
              <>
                <h3>Chia sẻ trải nghiệm của bạn</h3>
                <div className="form-row">
                  <label>
                    Tên hiển thị
                    <input
                      required
                      name="customerName"
                      placeholder="Tên của bạn"
                    />
                  </label>
                  <label>
                    Số sao
                    <select name="rating" defaultValue="5">
                      <option value="5">5 sao — Tuyệt vời</option>
                      <option value="4">4 sao — Rất tốt</option>
                      <option value="3">3 sao — Tốt</option>
                      <option value="2">2 sao — Cần cải thiện</option>
                      <option value="1">1 sao — Chưa hài lòng</option>
                    </select>
                  </label>
                </div>
                <label>
                  Tiêu đề
                  <input
                    required
                    name="title"
                    placeholder="Chất liệu rất dễ chịu"
                  />
                </label>
                <label>
                  Nội dung
                  <textarea
                    required
                    name="body"
                    rows={4}
                    placeholder="Bạn cảm thấy thế nào về sản phẩm?"
                  />
                </label>
                <button className="btn btn-dark" type="submit">
                  Gửi đánh giá
                </button>
              </>
            )}
          </form>
        )}
        {reviews.length > 0 ? (
          <div className="review-list">
            {reviews.map((review) => (
              <article key={review.id}>
                <div className="review-top">
                  <div>
                    <strong>{review.customerName}</strong>
                    {review.verified && (
                      <span className="verified">
                        <Check size={12} /> Đã mua hàng
                      </span>
                    )}
                  </div>
                  <Stars value={review.rating} />
                </div>
                <h3>{review.title}</h3>
                <p>{review.body}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="review-list review-empty">
            <p>
              Chưa có đánh giá cho sản phẩm này. Hãy là người đầu tiên chia sẻ
              trải nghiệm.
            </p>
          </div>
        )}
      </section>
      <div className="section related">
        <div className="section-head">
          <h2>Có thể bạn sẽ thích</h2>
        </div>
        <div className="product-grid">
          {catalog
            .filter((item) => item.id !== product.id)
            .slice(0, 3)
            .map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                onOpen={() => {}}
                onAdd={() => onAdd(item)}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
