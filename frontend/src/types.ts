export type View =
  | "home"
  | "shop"
  | "product"
  | "cart"
  | "checkout"
  | "journal"
  | "about"
  | "contact"
  | "policy"
  | "account"
  | "admin"
  | "size"
  | "care"
  | "faq"
  | "track"
  | "wishlist"
  | "stores";
export type Nav = (
  view: View,
  productId?: number,
  style?: "everyday" | "tailoring" | "accessories",
) => void;
