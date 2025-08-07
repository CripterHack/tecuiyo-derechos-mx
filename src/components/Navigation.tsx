import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Scale, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

interface NavigationItem {
  label: string;
  href: string;
  description?: string;
  children?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
  {
    label: "Inicio",
    href: "/",
    description: "Página principal de Tecuiyo"
  },
  {
    label: "Herramientas",
    href: "#",
    description: "Herramientas legales",
    children: [
      {
        label: "Buscador Legal",
        href: "/buscador",
        description: "Busca información por situación laboral"
      },
      {
        label: "Calculadora",
        href: "/calculadora", 
        description: "Calcula tu liquidación laboral"
      },
      {
        label: "Formularios",
        href: "/formularios",
        description: "Documentos y plantillas legales"
      },
      {
        label: "Directorio",
        href: "/directorio",
        description: "Autoridades laborales"
      }
    ]
  },
  {
    label: "Recursos",
    href: "#",
    description: "Recursos educativos",
    children: [
      {
        label: "Biblioteca Legal",
        href: "/biblioteca",
        description: "Ley Federal del Trabajo completa"
      },
      {
        label: "Guías",
        href: "/guias", 
        description: "Guías paso a paso"
      },
      {
        label: "Casos de Estudio",
        href: "/casos-estudio",
        description: "Ejemplos reales de casos laborales"
      },
      {
        label: "Glosario",
        href: "/glosario-legal",
        description: "Términos legales explicados"
      }
    ]
  },
  {
    label: "Contacto",
    href: "/contacto",
    description: "Información de contacto"
  }
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpenDropdown(null);
  };

  const isActiveLink = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      action();
    }
  };

  return (
    <nav 
      className="glass-effect border-b border-border/30 sticky top-0 z-50 shadow-lg shadow-primary/5"
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="container mx-auto max-w-6xl px-4 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg p-2 group"
            aria-label="Tecuiyo - Ir a inicio"
          >
            <Scale className="h-7 w-7 text-primary icon-rotate group-hover:text-secondary transition-colors duration-300" aria-hidden="true" />
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Tecuiyo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                        "hover:bg-accent hover:text-accent-foreground",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        openDropdown === item.label && "bg-accent text-accent-foreground"
                      )}
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                      aria-describedby={`${item.label}-desc`}
                      onKeyDown={(e) => handleKeyDown(e, () => {
                        setOpenDropdown(openDropdown === item.label ? null : item.label);
                      })}
                    >
                      {item.label}
                      <ChevronDown 
                        className={cn(
                          "h-3 w-3 transition-transform",
                          openDropdown === item.label && "rotate-180"
                        )}
                        aria-hidden="true"
                      />
                    </button>
                    <span id={`${item.label}-desc`} className="sr-only">
                      {item.description}
                    </span>

                    {/* Dropdown Menu */}
                    {openDropdown === item.label && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-72 glass-effect rounded-xl shadow-2xl shadow-primary/10 z-[100] animate-fade-in border border-border/20"
                        style={{ position: 'absolute', zIndex: 100 }}
                        role="menu"
                        aria-label={`Menú de ${item.label}`}
                      >
                        <div className="p-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className={cn(
                                "block px-3 py-2 text-sm rounded-md transition-colors",
                                "hover:bg-accent hover:text-accent-foreground",
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                                isActiveLink(child.href) && "bg-accent text-accent-foreground font-medium"
                              )}
                              role="menuitem"
                              onClick={() => setOpenDropdown(null)}
                            >
                              <div className="font-medium">{child.label}</div>
                              {child.description && (
                                <div className="text-xs text-muted-foreground mt-0.5">
                                  {child.description}
                                </div>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      "block px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      "hover:bg-accent hover:text-accent-foreground",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isActiveLink(item.href) && "bg-accent text-accent-foreground"
                    )}
                    aria-describedby={`${item.label}-desc`}
                  >
                    {item.label}
                    <span id={`${item.label}-desc`} className="sr-only">
                      {item.description}
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Theme toggle and mobile menu button */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            id="mobile-menu"
            className="lg:hidden border-t border-border/50 py-4 animate-fade-in"
            role="menu"
            aria-label="Navegación móvil"
          >
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        className={cn(
                          "flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md transition-colors",
                          "hover:bg-accent hover:text-accent-foreground",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                          openDropdown === item.label && "bg-accent text-accent-foreground"
                        )}
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        aria-expanded={openDropdown === item.label}
                        aria-describedby={`mobile-${item.label}-desc`}
                      >
                        {item.label}
                        <ChevronDown 
                          className={cn(
                            "h-4 w-4 transition-transform",
                            openDropdown === item.label && "rotate-180"
                          )}
                          aria-hidden="true"
                        />
                      </button>
                      <span id={`mobile-${item.label}-desc`} className="sr-only">
                        {item.description}
                      </span>

                      {openDropdown === item.label && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className={cn(
                                "block px-3 py-2 text-sm rounded-md transition-colors",
                                "hover:bg-accent hover:text-accent-foreground",
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                                isActiveLink(child.href) && "bg-accent text-accent-foreground font-medium"
                              )}
                              role="menuitem"
                              onClick={() => {
                                setIsOpen(false);
                                setOpenDropdown(null);
                              }}
                            >
                              <div className="font-medium">{child.label}</div>
                              {child.description && (
                                <div className="text-xs text-muted-foreground mt-0.5">
                                  {child.description}
                                </div>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={cn(
                        "block px-3 py-2 text-sm font-medium rounded-md transition-colors",
                        "hover:bg-accent hover:text-accent-foreground",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        isActiveLink(item.href) && "bg-accent text-accent-foreground"
                      )}
                      role="menuitem"
                      onClick={() => setIsOpen(false)}
                      aria-describedby={`mobile-${item.label}-desc`}
                    >
                      {item.label}
                      <span id={`mobile-${item.label}-desc`} className="sr-only">
                        {item.description}
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}