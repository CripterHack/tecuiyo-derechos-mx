import { Component, lazy, Suspense, type ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Link, Routes, Route, useLocation } from "react-router-dom";
import Footer from "@/components/Footer";

const Index = lazy(() => import("@/pages/Index"));
const Calculadora = lazy(() => import("@/pages/Calculadora"));
const Buscador = lazy(() => import("@/pages/Buscador"));
const Directorio = lazy(() => import("@/pages/Directorio"));
const Biblioteca = lazy(() => import("@/pages/Biblioteca"));
const Guias = lazy(() => import("@/pages/Guias"));
const Formularios = lazy(() => import("@/pages/Formularios"));
const SituacionDetalle = lazy(() => import("@/pages/SituacionDetalle"));
const GuiaDetalle = lazy(() => import("@/pages/GuiaDetalle"));
const ArticuloDetalle = lazy(() => import("@/pages/ArticuloDetalle"));
const FormularioDetalle = lazy(() => import("@/pages/FormularioDetalle"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const CasosEstudio = lazy(() => import("@/pages/CasosEstudio"));
const GlosarioLegal = lazy(() => import("@/pages/GlosarioLegal"));
const AvisoPrivacidad = lazy(() => import("@/pages/AvisoPrivacidad"));
const TerminosUso = lazy(() => import("@/pages/TerminosUso"));
const CodigoAbierto = lazy(() => import("@/pages/CodigoAbierto"));
const Contacto = lazy(() => import("@/pages/Contacto"));
const Apoyar = lazy(() => import("@/pages/Apoyar"));

const queryClient = new QueryClient();

interface PageLoadBoundaryProps {
  children: ReactNode;
}

interface PageLoadBoundaryState {
  hasError: boolean;
}

class PageLoadBoundary extends Component<PageLoadBoundaryProps, PageLoadBoundaryState> {
  state: PageLoadBoundaryState = { hasError: false };

  static getDerivedStateFromError(): PageLoadBoundaryState {
    return { hasError: true };
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <main className="container mx-auto max-w-3xl px-4 py-12 space-y-6">
        <div role="alert" className="space-y-3">
          <h1 className="text-2xl font-bold">No pudimos cargar esta página</h1>
          <p className="text-muted-foreground">
            La conexión pudo fallar o puede haber una versión nueva de Tecuiyo.
            Recarga la página para volver a intentarlo.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button type="button" onClick={() => window.location.reload()}>Recargar página</Button>
          <Button asChild variant="outline"><Link to="/">Volver al inicio</Link></Button>
        </div>
        <p className="text-sm text-muted-foreground">
          También puedes consultar estas fuentes fuera de Tecuiyo:
        </p>
        <ul className="space-y-3">
          <li>
            <a href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">
              Consultar la LFT oficial
            </a>
          </li>
          <li>
            <a href="https://www.gob.mx/profedet" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">
              Orientación de PROFEDET
            </a>
          </li>
        </ul>
      </main>
    );
  }
}

const PageRoutes = () => {
  const location = useLocation();

  return (
    // Una ruta fallida no debe impedir navegar a otra página disponible.
    <PageLoadBoundary key={location.pathname}>
      <Suspense fallback={
        <main className="container mx-auto max-w-3xl px-4 py-12" aria-busy="true">
          <p role="status" aria-live="polite" className="text-muted-foreground">Cargando página…</p>
        </main>
      }>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/buscador" element={<Buscador />} />
          <Route path="/buscador/:id" element={<SituacionDetalle />} />
          <Route path="/directorio" element={<Directorio />} />
          <Route path="/biblioteca" element={<Biblioteca />} />
          <Route path="/biblioteca/:id" element={<ArticuloDetalle />} />
          <Route path="/guias" element={<Guias />} />
          <Route path="/guias/:id" element={<GuiaDetalle />} />
          <Route path="/formularios" element={<Formularios />} />
          <Route path="/formularios/:id" element={<FormularioDetalle />} />
          <Route path="/casos-estudio" element={<CasosEstudio />} />
          <Route path="/glosario-legal" element={<GlosarioLegal />} />
          <Route path="/aviso-privacidad" element={<AvisoPrivacidad />} />
          <Route path="/terminos-uso" element={<TerminosUso />} />
          <Route path="/codigo-abierto" element={<CodigoAbierto />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/apoyar" element={<Apoyar />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </PageLoadBoundary>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <div id="main-content" tabIndex={-1} className="flex-1">
            <PageRoutes />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
