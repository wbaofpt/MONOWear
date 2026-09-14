import { describe, expect, it } from "vitest";
import { formatPrice, products } from "./data";
describe("MONO Wear catalog", () => {
  it("contains purchasable products", () => {
    expect(products.length).toBeGreaterThan(0);
    expect(products.every((p) => p.name && p.price > 0)).toBe(true);
  });
  it("formats VND prices for shoppers", () => {
    expect(formatPrice(890000)).toContain("890.000");
    expect(formatPrice(890000)).toContain("₫");
  });
});
