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
import NotFound from "./pages/NotFound";

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
          <Route path="/directorio" element={<Directorio />} />
          <Route path="/biblioteca" element={<Biblioteca />} />
          <Route path="/guias" element={<Guias />} />
          <Route path="/formularios" element={<Formularios />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
