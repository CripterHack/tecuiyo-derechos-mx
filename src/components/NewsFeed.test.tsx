
import { render, screen } from "@testing-library/react";
import { NewsFeed } from "./NewsFeed";
import { useNewsData } from "@/hooks/useNewsData";
import { vi, Mock, describe, it, expect, beforeEach } from "vitest";

// Mock the hook
vi.mock("@/hooks/useNewsData");

describe("NewsFeed Component", () => {
  const mockNews = [
    {
      id: "1",
      title: "Reforma Laboral 2025",
      date: "2025-01-01",
      summary: "Resumen de la reforma",
      link: "https://example.com/1",
      source: "Diario Oficial",
    },
    {
      id: "2",
      title: "Aumento Salarial",
      date: "2025-02-01",
      summary: "Nuevos salarios mínimos",
      link: "https://example.com/2",
      source: "STPS",
    },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders loading state", () => {
    (useNewsData as Mock).mockReturnValue({ news: [], loading: true, error: null });
    render(<NewsFeed />);
    expect(screen.getByText("Cargando noticias...")).toBeInTheDocument();
  });

  it("renders error state", () => {
    (useNewsData as Mock).mockReturnValue({ news: [], loading: false, error: "Error de red" });
    render(<NewsFeed />);
    expect(screen.getByText("No se pudieron cargar las noticias")).toBeInTheDocument();
    expect(screen.getByText("Error de red")).toBeInTheDocument();
  });

  it("renders empty state", () => {
    (useNewsData as Mock).mockReturnValue({ news: [], loading: false, error: null });
    render(<NewsFeed />);
    expect(screen.getByText("Sin actualizaciones recientes")).toBeInTheDocument();
  });

  it("renders news items correctly", () => {
    (useNewsData as Mock).mockReturnValue({ news: mockNews, loading: false, error: null });
    render(<NewsFeed />);
    expect(screen.getByText("Reforma Laboral 2025")).toBeInTheDocument();
    expect(screen.getByText("Aumento Salarial")).toBeInTheDocument();
  });
});
