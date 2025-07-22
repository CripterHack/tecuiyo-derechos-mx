import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Calculadora from "./pages/Calculadora";
import Buscador from "./pages/Buscador";
import Directorio from "./pages/Directorio";
import Biblioteca from "./pages/Biblioteca";
import Guias from "./pages/Guias";
import Formularios from "./pages/Formularios";
import SituacionDetalle from "./pages/SituacionDetalle";
import GuiaDetalle from "./pages/GuiaDetalle";
import ArticuloDetalle from "./pages/ArticuloDetalle";
import FormularioDetalle from "./pages/FormularioDetalle";
import NotFound from "./pages/NotFound";
import CasosEstudio from "./pages/CasosEstudio";
import GlosarioLegal from "./pages/GlosarioLegal";
import AvisoPrivacidad from "./pages/AvisoPrivacidad";
import TerminosUso from "./pages/TerminosUso";
import CodigoAbierto from "./pages/CodigoAbierto";
import Contacto from "./pages/Contacto";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
