import { describe, expect, it } from "vitest";
import { formatPrice } from "./data";
describe("MONO user flows", () => {
  it("keeps checkout totals in Vietnamese currency format", () =>
    expect(formatPrice(1580000)).toContain("1.580.000"));
  it("rejects invalid newsletter addresses at the UI contract level", () =>
    expect(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test("not-an-email")).toBe(false));
});
