import { Heart, Plus } from "lucide-react";
import { formatPrice, type Product } from "../data";
export default function ProductCard({
  product,
  onOpen,
  onAdd,
}: {
  product: Product;
  onOpen: () => void;
  onAdd: () => void;
}) {
  return (
    <article className="product-card">
      <div className="product-image">
        <a
          className="product-image-link"
          href={`/product/${product.id}`}
          onClick={(event) => {
            event.preventDefault();
            onOpen();
          }}
          aria-label={`Xem ${product.name}`}
        >
          <img src={product.image} alt={product.name} />
          {product.badge && <span className="badge">{product.badge}</span>}
        </a>
        <button
          className="heart"
          aria-label={`Thêm ${product.name} vào yêu thích`}
          onClick={(e) => e.stopPropagation()}
        >
          <Heart size={17} />
        </button>
        <button
          className="quick-add"
          onClick={(e) => {
            e.stopPropagation();
            onAdd();
          }}
        >
          Thêm vào giỏ <Plus size={15} />
        </button>
      </div>
      <div className="product-info">
        <div>
          <h3>{product.name}</h3>
          <p>{product.category}</p>
        </div>
        <strong>{formatPrice(product.price)}</strong>
      </div>
    </article>
  );
}
