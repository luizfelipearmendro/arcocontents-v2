import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import aboutBg from "@/assets/about-bg.jpg";
import { Target, Eye, Heart } from "lucide-react";

const values = [
  { icon: Target, title: "Missão", desc: "Produzir conteúdo assertivo que gere resultados reais para nossos clientes, conectando marcas a pessoas." },
  { icon: Eye, title: "Visão", desc: "Ser referência em marketing de conteúdo no Brasil, levando inovação e criatividade a cada projeto." },
  { icon: Heart, title: "Valores", desc: "Autenticidade, excelência, compromisso e paixão por cada história que contamos." },
];

const Sobre = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutBg} alt="Equipe Arco Contents" className="w-full h-full object-cover" width={1920} height={900} />
          <div className="absolute inset-0 bg-warm-overlay" />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4">Quem somos</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold">Sobre a Arco Contents</h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-divider mb-8" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Transformando marcas em histórias{" "}
              <span className="text-gradient-gold italic">inesquecíveis</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A Arco Contents nasceu da paixão por contar histórias que fazem a diferença. Somos uma
                agência de marketing de conteúdo focada em ajudar empresas a se conectarem com seu
                público de forma autêntica e impactante.
              </p>
              <p>
                Se sua empresa precisa de produção de conteúdo assertivo, a A.C. é a agência certa
                para contratar. Combinamos criatividade, estratégia e tecnologia para entregar
                resultados que vão além das expectativas.
              </p>
            </div>
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border">
            <blockquote className="text-lg font-display italic text-foreground/90 leading-relaxed mb-6">
              "Estamos no melhor momento da história para quem deseja construir algo. Com apenas uns
              minutos você coloca uma startup de pé, um ecommerce ou outro modelo de negócios. Não
              existe mais desculpa para não ter um case de sucesso."
            </blockquote>
            <p className="text-sm text-primary font-semibold">— Thiago Cid</p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-warm-dark">
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4">Nosso propósito</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold">Missão, Visão e Valores</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center p-8"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <v.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-display font-semibold mb-4">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Sobre;
