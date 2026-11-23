import { MapPin, Phone, Clock, ArrowLeft, Building, Navigation, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { laborAuthorities } from "@/data/laborDirectory";

const Directorio = () => {
  const [searchLocation, setSearchLocation] = useState("");

  const tiposAutoridad = [
    { value: "all", label: "Todas las autoridades", color: "bg-primary/10 text-primary" },
    { value: "Conciliación local", label: "Conciliación local" },
    { value: "Orientación", label: "Orientación" },
    { value: "Federal", label: "Autoridades Federales", color: "bg-accent/10 text-accent-foreground" },
    { value: "Junta Local", label: "Juntas Locales", color: "bg-secondary/10 text-secondary" }
  ];

  const [filtroTipo, setFiltroTipo] = useState("all");

  const autoridadesFiltradas = laborAuthorities.filter(autoridad => {
    const query = searchLocation.trim().toLowerCase();
    const locations = [autoridad.estado, autoridad.direccion ?? "", ...(autoridad.sedes ?? [])];
    const matchesLocation = locations.some(location => location.toLowerCase().includes(query));
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
                  aria-label="Buscar por estado o ciudad"
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
                  aria-pressed={filtroTipo === tipo.value}
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
              Consulta los sitios oficiales para confirmar sedes, horarios y el tipo de atención.
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
                      {autoridad.descripcion && <CardDescription>{autoridad.descripcion}</CardDescription>}
                    </div>
                    <Building className="h-5 w-5 text-primary flex-shrink-0 ml-2" />
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {autoridad.direccion && (
                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Dirección</p>
                        <p className="text-sm text-muted-foreground">{autoridad.direccion}</p>
                      </div>
                    </div>
                  )}

                  {autoridad.telefonos && (
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Teléfonos</p>
                        <div className="flex flex-wrap gap-2">
                          {autoridad.telefonos.map(telefono => (
                            <a key={telefono} href={`tel:${telefono.replace(/\D/g, "")}`} className="text-sm text-primary hover:underline">
                              {telefono}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {autoridad.horarios && (
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Horarios</p>
                        <p className="text-sm text-muted-foreground">{autoridad.horarios}</p>
                      </div>
                    </div>
                  )}

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
                    {autoridad.direccion && <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a 
                        href={`https://maps.google.com/?q=${encodeURIComponent(autoridad.direccion)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Navigation className="mr-2 h-3 w-3" />
                        Ver en mapa
                      </a>
                    </Button>}
                    
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href={autoridad.website}
                        aria-label={autoridad.websiteLabel ?? `Consultar ${autoridad.nombre}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-3 w-3" />
                        {autoridad.websiteLabel ?? "Consultar"}
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
                <p className="mt-3 text-sm">No todas las instituciones atienden los mismos asuntos. Si tienes dudas sobre competencia local o federal, consulta los canales oficiales de orientación.</p>
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