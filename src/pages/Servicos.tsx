import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import { Film, Camera, Smartphone, Share2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Film,
    title: "Storymaker",
    desc: "Criamos narrativas visuais envolventes que capturam a essência da sua marca e conectam emocionalmente com seu público-alvo.",
    features: ["Roteiro criativo", "Produção de stories", "Narrativa visual", "Conteúdo para redes"],
  },
  {
    icon: Camera,
    title: "Videomaker",
    desc: "Produção audiovisual profissional, desde vídeos institucionais até conteúdos para redes sociais, sempre com qualidade cinematográfica.",
    features: ["Vídeos institucionais", "Reels e shorts", "Edição profissional", "Color grading"],
  },
  {
    icon: Smartphone,
    title: "Fotógrafo Mobile",
    desc: "Conteúdo autêntico e de alta qualidade produzido diretamente do celular, ideal para quem busca agilidade sem perder a qualidade.",
    features: ["Fotos para feed", "Conteúdo espontâneo", "Edição mobile", "Banco de imagens"],
  },
  {
    icon: Share2,
    title: "Social Media",
    desc: "Gestão completa das suas redes sociais, com estratégia, planejamento e execução para crescer sua presença digital.",
    features: ["Planejamento de conteúdo", "Calendário editorial", "Análise de métricas", "Gestão de comunidade"],
  },
];

const Servicos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-dark">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4">O que fazemos</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Nossos Serviços</h1>
            <p className="text-muted-foreground max-w-xl text-lg">
              Soluções completas em marketing de conteúdo para transformar sua marca.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <Section>
        <div className="space-y-20">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <service.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8">{service.desc}</p>
                <ul className="grid grid-cols-2 gap-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`bg-card rounded-2xl border border-border aspect-video flex items-center justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <service.icon className="text-primary/20" size={80} />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-card">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Pronto para começar?
          </h2>
          <p className="text-muted-foreground mb-8">
            Entre em contato e descubra como podemos transformar seu conteúdo.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-lg font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Fale conosco <ArrowRight size={16} />
          </Link>
        </div>
      </Section>
    </Layout>
  );
};

export default Servicos;
