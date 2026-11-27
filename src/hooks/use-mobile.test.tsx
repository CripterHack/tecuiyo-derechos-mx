import { act, renderHook } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { useIsMobile } from "./use-mobile";

afterEach(() => vi.unstubAllGlobals());

it("lee la consulta de medios, actualiza al cambiar y elimina el listener", () => {
  let mobile = true;
  const listeners = new Set<() => void>();
  const query = {
    get matches() { return mobile; },
    addEventListener: (_type: string, callback: () => void) => listeners.add(callback),
    removeEventListener: (_type: string, callback: () => void) => listeners.delete(callback),
  };
  const matchMedia = vi.fn(() => query);
  vi.stubGlobal("matchMedia", matchMedia);
  const { result, unmount } = renderHook(useIsMobile);
  expect(matchMedia).toHaveBeenCalledWith("(max-width: 767px)");
  expect(result.current).toBe(true);
  act(() => {
    mobile = false;
    listeners.forEach(callback => callback());
  });
  expect(result.current).toBe(false);
  unmount();
  expect(listeners.size).toBe(0);
});
