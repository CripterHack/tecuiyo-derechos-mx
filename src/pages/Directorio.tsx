import { MapPin, Phone, Clock, ArrowLeft, Building, Navigation, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";

const Directorio = () => {
  const [searchLocation, setSearchLocation] = useState("");

  // Base de datos de autoridades laborales por estado
  const autoridades = [
    {
      id: 1,
      nombre: "Junta Local de Conciliación y Arbitraje de la CDMX",
      tipo: "Junta Local",
      estado: "Ciudad de México",
      direccion: "Dr. Río de la Loza 14, Doctores, Cuauhtémoc, 06720 Ciudad de México",
      telefono: "55 5134 0770",
      horarios: "Lunes a Viernes 9:00 - 15:00",
      servicios: ["Conciliación", "Demandas laborales", "Ejecución de laudos"],
      website: "https://www.jlcacdmx.gob.mx/",
      coordenadas: { lat: 19.4205, lng: -99.1428 }
    },
    {
      id: 2,
      nombre: "Secretaría del Trabajo y Previsión Social (STPS)",
      tipo: "Federal",
      estado: "Nacional",
      direccion: "Paseo de la Reforma 51, Tabacalera, Cuauhtémoc, 06030 Ciudad de México",
      telefono: "55 2000 5300",
      horarios: "Lunes a Viernes 9:00 - 18:00",
      servicios: ["Inspección laboral", "Capacitación", "Seguridad e higiene", "Mediación"],
      website: "https://www.gob.mx/stps",
      coordenadas: { lat: 19.4326, lng: -99.1332 }
    },
    {
      id: 3,
      nombre: "Centro Federal de Conciliación y Registro Laboral",
      tipo: "Federal",
      estado: "Nacional",
      direccion: "Insurgentes Sur 1971, Florida, Álvaro Obregón, 01030 Ciudad de México",
      telefono: "55 2000 3000",
      horarios: "Lunes a Viernes 8:30 - 16:30",
      servicios: ["Conciliación prelaboral", "Registro sindical", "Contratos colectivos"],
      website: "https://centrolaboral.gob.mx/",
      coordenadas: { lat: 19.3541, lng: -99.1687 }
    },
    {
      id: 4,
      nombre: "Procuraduría Federal de la Defensa del Trabajo (PROFEDET)",
      tipo: "Federal",
      estado: "Nacional",
      direccion: "Providencia 1015, Col. Del Valle, Benito Juárez, 03100 Ciudad de México",
      telefono: "55 3003 1000",
      horarios: "Lunes a Viernes 9:00 - 15:00",
      servicios: ["Asesoría gratuita", "Representación legal", "Orientación jurídica"],
      website: "https://www.gob.mx/profedet",
      coordenadas: { lat: 19.3873, lng: -99.1710 }
    },
    {
      id: 5,
      nombre: "Junta Local de Conciliación y Arbitraje de Jalisco",
      tipo: "Junta Local",
      estado: "Jalisco",
      direccion: "Av. Alcalde 1351, Miraflores, 44270 Guadalajara, Jal.",
      telefono: "33 3668 1600",
      horarios: "Lunes a Viernes 8:30 - 15:30",
      servicios: ["Conciliación", "Arbitraje", "Ejecución de laudos"],
      website: "https://jcajalisco.gob.mx/",
      coordenadas: { lat: 20.6597, lng: -103.3496 }
    },
    {
      id: 6,
      nombre: "Junta Local de Conciliación y Arbitraje de Nuevo León",
      tipo: "Junta Local",
      estado: "Nuevo León",
      direccion: "Washington 2000 Ote., Centro, 64000 Monterrey, N.L.",
      telefono: "81 2020 5050",
      horarios: "Lunes a Viernes 8:00 - 15:00",
      servicios: ["Conciliación", "Demandas laborales", "Registro sindical"],
      website: "https://www.nl.gob.mx/junta-conciliacion-arbitraje",
      coordenadas: { lat: 25.6866, lng: -100.3161 }
    }
  ];

  const tiposAutoridad = [
    { value: "all", label: "Todas las autoridades", color: "bg-primary/10 text-primary" },
    { value: "Federal", label: "Autoridades Federales", color: "bg-accent/10 text-accent-foreground" },
    { value: "Junta Local", label: "Juntas Locales", color: "bg-secondary/10 text-secondary" }
  ];

  const [filtroTipo, setFiltroTipo] = useState("all");

  const autoridadesFiltradas = autoridades.filter(autoridad => {
    const matchesLocation = autoridad.estado.toLowerCase().includes(searchLocation.toLowerCase()) ||
                           autoridad.direccion.toLowerCase().includes(searchLocation.toLowerCase());
    const matchesType = filtroTipo === "all" || autoridad.tipo === filtroTipo;
    return matchesLocation && matchesType;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link to="/" className="inline-flex items-center mb-4 hover:text-accent transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Link>
          <div className="flex items-center gap-4">
            <Building className="h-8 w-8" />
            <div>
              <h1 className="text-3xl font-bold">Directorio de Autoridades Laborales</h1>
              <p className="text-primary-foreground/80">Encuentra juntas, procuradurías y autoridades laborales cercanas</p>
            </div>
          </div>
        </div>
      </header>

      {/* Filtros */}
      <section className="py-6 px-4 border-b bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar por estado o ciudad..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              {tiposAutoridad.map(tipo => (
                <Button
                  key={tipo.value}
                  variant={filtroTipo === tipo.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFiltroTipo(tipo.value)}
                  className="whitespace-nowrap"
                >
                  {tipo.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">
              {autoridadesFiltradas.length} autoridades encontradas
            </h2>
            <p className="text-muted-foreground">
              Información actualizada y verificada de contactos oficiales
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {autoridadesFiltradas.map(autoridad => (
              <Card key={autoridad.id} className="legal-card group hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge 
                          className={
                            autoridad.tipo === "Federal" 
                              ? "bg-accent/10 text-accent-foreground"
                              : "bg-secondary/10 text-secondary"
                          }
                        >
                          {autoridad.tipo}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {autoridad.estado}
                        </Badge>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors text-lg">
                        {autoridad.nombre}
                      </CardTitle>
                    </div>
                    <Building className="h-5 w-5 text-primary flex-shrink-0 ml-2" />
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Dirección */}
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Dirección</p>
                      <p className="text-sm text-muted-foreground">{autoridad.direccion}</p>
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Teléfono</p>
                      <a 
                        href={`tel:${autoridad.telefono}`}
                        className="text-sm text-primary hover:underline"
                      >
                        {autoridad.telefono}
                      </a>
                    </div>
                  </div>

                  {/* Horarios */}
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Horarios</p>
                      <p className="text-sm text-muted-foreground">{autoridad.horarios}</p>
                    </div>
                  </div>

                  {/* Servicios */}
                  <div>
                    <p className="text-sm font-medium mb-2">Servicios principales</p>
                    <div className="flex flex-wrap gap-1">
                      {autoridad.servicios.map(servicio => (
                        <Badge key={servicio} variant="outline" className="text-xs">
                          {servicio}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Acciones */}
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a 
                        href={`https://maps.google.com/?q=${encodeURIComponent(autoridad.direccion)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Navigation className="mr-2 h-3 w-3" />
                        Ver en mapa
                      </a>
                    </Button>
                    
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href={autoridad.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Sitio web
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {autoridadesFiltradas.length === 0 && (
            <div className="text-center py-12">
              <Building className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">No se encontraron autoridades</h3>
              <p className="text-muted-foreground mb-4">
                Intenta buscar por otro estado o explora todas las autoridades
              </p>
              <Button onClick={() => { setSearchLocation(""); setFiltroTipo("all"); }}>
                Ver todas las autoridades
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Información adicional */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-8">Información importante</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="legal-card">
              <CardHeader>
                <CardTitle className="text-lg">¿Cuándo acudir a estas autoridades?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Despido injustificado o problemas laborales</li>
                  <li>• Falta de pago de salarios o prestaciones</li>
                  <li>• Registro o problemas sindicales</li>
                  <li>• Accidentes de trabajo</li>
                  <li>• Violaciones a la seguridad e higiene</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="legal-card">
              <CardHeader>
                <CardTitle className="text-lg">Documentos a llevar</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Identificación oficial vigente</li>
                  <li>• Contrato de trabajo (si existe)</li>
                  <li>• Recibos de nómina</li>
                  <li>• Comprobantes de prestaciones</li>
                  <li>• Documentos relacionados al caso</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Directorio;