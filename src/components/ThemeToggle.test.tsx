import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { ThemeToggle } from "./ThemeToggle";

afterEach(() => {
  cleanup();
  localStorage.clear();
  document.documentElement.classList.remove("dark");
});

it("restaura el tema oscuro y guarda el cambio a claro", () => {
  localStorage.setItem("theme", "dark");
  render(<ThemeToggle />);
  expect(document.documentElement).toHaveClass("dark");
  fireEvent.click(screen.getByRole("button", { name: "Cambiar a modo claro" }));
  expect(document.documentElement).not.toHaveClass("dark");
  expect(localStorage.getItem("theme")).toBe("light");
});

it("usa el tema claro cuando la preferencia guardada no es válida", () => {
  localStorage.setItem("theme", "invalid");
  render(<ThemeToggle />);
  expect(screen.getByRole("button", { name: "Cambiar a modo oscuro" })).toBeInTheDocument();
  expect(document.documentElement).not.toHaveClass("dark");
});
