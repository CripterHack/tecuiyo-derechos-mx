import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { Carousel, CarouselNext, CarouselPrevious } from "./carousel";

const store = vi.hoisted(() => {
  const events = new Map<string, Set<(api: unknown) => void>>();
  const state = { prev: false, next: true };
  const api = {
    canScrollPrev: () => state.prev,
    canScrollNext: () => state.next,
    on: (event: string, listener: (api: unknown) => void) => {
      if (!events.has(event)) events.set(event, new Set());
      events.get(event)!.add(listener);
    },
    off: (event: string, listener: (api: unknown) => void) => events.get(event)?.delete(listener),
  };
  return { events, state, api };
});

vi.mock("embla-carousel-react", () => ({
  default: () => [() => undefined, store.api],
}));
afterEach(cleanup);

it("sincroniza las flechas y retira las dos suscripciones de Embla", () => {
  const { unmount } = render(<Carousel><CarouselPrevious /><CarouselNext /></Carousel>);
  expect(screen.getByRole("button", { name: "Previous slide" })).toBeDisabled();
  expect(screen.getByRole("button", { name: "Next slide" })).toBeEnabled();
  act(() => {
    store.state.prev = true;
    store.state.next = false;
    store.events.get("select")?.forEach(listener => listener(store.api));
  });
  expect(screen.getByRole("button", { name: "Previous slide" })).toBeEnabled();
  expect(screen.getByRole("button", { name: "Next slide" })).toBeDisabled();
  unmount();
  expect(store.events.get("select")?.size).toBe(0);
  expect(store.events.get("reInit")?.size).toBe(0);
});
