import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary py-12 px-4 text-primary-foreground" role="contentinfo">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Tecuiyo</h3>
            <p className="text-sm text-primary-foreground/80">
              Empoderando a trabajadores mexicanos con conocimiento legal accesible
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Herramientas</h3>
            <nav aria-label="Enlaces de herramientas">
              <ul className="space-y-2 text-sm">
                <li><Link to="/calculadora" className="link-underline hover:text-accent">Estimación de prestaciones</Link></li>
                <li><Link to="/formularios" className="link-underline hover:text-accent">Formularios legales</Link></li>
                <li><Link to="/buscador" className="link-underline hover:text-accent">Buscador legal</Link></li>
                <li><Link to="/directorio" className="link-underline hover:text-accent">Directorio de autoridades</Link></li>
              </ul>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/biblioteca" className="link-underline hover:text-accent">Biblioteca LFT</Link></li>
              <li><Link to="/guias" className="link-underline hover:text-accent">Guías por temas</Link></li>
              <li><Link to="/casos-estudio" className="link-underline hover:text-accent">Casos de estudio</Link></li>
              <li><Link to="/glosario-legal" className="link-underline hover:text-accent">Glosario legal</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/aviso-privacidad" className="link-underline hover:text-accent">Aviso de privacidad</Link></li>
              <li><Link to="/terminos-uso" className="link-underline hover:text-accent">Términos de uso</Link></li>
              <li><Link to="/contacto" className="link-underline hover:text-accent">Contacto</Link></li>
              <li><Link to="/apoyar" className="link-underline hover:text-accent">Apoyar Tecuiyo</Link></li>
              <li><Link to="/codigo-abierto" className="link-underline hover:text-accent">Código abierto</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p>
            © {new Date().getFullYear()} Tecuiyo. Edgar Zorrilla. •
            Información educativa en revisión •
            <a href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf" className="link-underline hover:text-accent ml-1">
              Consultar la LFT oficial
            </a>
            <br/>
            <Link to="/apoyar" className="link-underline hover:text-accent">¿Te fue útil? Puedes apoyar su mantenimiento con una aportación voluntaria.</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
