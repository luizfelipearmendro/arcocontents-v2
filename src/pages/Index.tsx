import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Camera, Film, Smartphone, Share2 } from "lucide-react";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import heroBg from "/images/team/team3.jpg";

const services = [
  { icon: Share2, title: "Social Media", desc: "Gestão estratégica das suas redes sociais." },
  { icon: Camera, title: "Videomaker", desc: "Produção audiovisual profissional para sua marca." },
  { icon: Smartphone, title: "Fotógrafo Mobile", desc: "Conteúdo autêntico direto do seu celular." },
  { icon: Film, title: "Storymaker", desc: "Histórias visuais que conectam e engajam seu público." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Estúdio criativo Arco Contents"
            className="w-full h-full md:h-[1300px] object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-warm-overlay" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-6">
              Marketing de Conteúdo
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-muted-foreground leading-tight mb-8">
              Não existe tamanho para os seus{" "}
              <span className="text-primary italic">sonhos</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light">
              Enquanto alguns esperam ser notados, outros escolhem ser{" "}
              <strong className="text-foreground">inesquecíveis</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                Nossos serviços
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 rounded-lg font-semibold text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
              >
                Fale conosco
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <Section className="bg-warm-dark">
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4">O que fazemos</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">Nossos Serviços</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/30 transition-colors group"
            >
              <service.icon className="text-primary mb-4" size={32} />
              <h3 className="text-lg font-display font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/servicos"
            className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider hover:gap-3 transition-all"
          >
            Ver todos os serviços <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      {/* Quote */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-divider mx-auto mb-8" />
          <blockquote className="text-xl md:text-2xl font-display italic text-foreground/90 leading-relaxed mb-6">
            "Por trás de cada obrigado está o motivo pelo qual nunca desistimos. Cada história, cada
            transformação, é o combustível para continuarmos fazendo a diferença."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src={heroBg}
                alt="Time AC"
                className="w-full h-full object-cover scale-110"
                loading="lazy"
              />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold">Arco Contents</p>
              <p className="text-xs text-muted-foreground">Agência de Marketing de Conteúdo</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-card">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Comece, não importa de onde!
          </h2>
          <p className="text-muted-foreground mb-8">
            Pronto para transformar sua marca em algo inesquecível? Vamos conversar.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5566996306201"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Venha conosco
            <ArrowRight size={16} />
          </a>
        </div>
      </Section>
    </Layout>
  );
};

export default Index;
