import { cleanup, render } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { SidebarMenuSkeleton } from "./sidebar";

afterEach(cleanup);

it("conserva el ancho del esqueleto durante un cambio de props", () => {
  const { container, rerender } = render(<SidebarMenuSkeleton />);
  const text = container.querySelector<HTMLElement>('[data-sidebar="menu-skeleton-text"]')!;
  const width = text.style.getPropertyValue("--skeleton-width");
  expect(parseInt(width, 10)).toBeGreaterThanOrEqual(50);
  expect(parseInt(width, 10)).toBeLessThan(90);
  rerender(<SidebarMenuSkeleton showIcon />);
  expect(text.style.getPropertyValue("--skeleton-width")).toBe(width);
  expect(container.querySelector('[data-sidebar="menu-skeleton-icon"]')).not.toBeNull();
});
