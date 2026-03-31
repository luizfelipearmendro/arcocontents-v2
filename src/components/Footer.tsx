import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-warm-dark border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold text-gradient-gold mb-4">
              Arco Contents
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Criamos conteúdos que transformam marcas em histórias inesquecíveis.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-4">
              Navegação
            </h4>
            <div className="flex flex-col gap-3">
              {["Sobre", "Serviços", "Equipe", "Contato"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace("ç", "c")}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-4">
              Contato
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://api.whatsapp.com/send/?phone=5566996306201"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Phone size={14} />
                (66) 99630-6201
              </a>
              <a
                href="mailto:contato@arcocontents.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Mail size={14} />
                contato@arcocontents.com
              </a>
              <a
                href="https://instagram.com/arcocontents"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Instagram size={14} />
                @arcocontents
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Arco Contents. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
