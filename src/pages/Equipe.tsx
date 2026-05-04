import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import marcosImg from "/images/team/MA.jpeg";
import lemuelImg from "/images/team/LB.jpeg";
import yanImg from "/images/team/YR.jpeg";
import teamBg from "/images/team/team1.jpg";
import { Instagram, Linkedin } from "lucide-react";

const team = [
  {
    name: "Marcos Adonai",
    role: "Sócio e Diretor de Marketing",
    image: marcosImg,
    bio: "Apaixonado por storytelling e marketing de conteúdo. Traduzindo estratégia em direção criativa visual.",
    social: {
      instagram: "https://www.instagram.com/marcosvasconcelox/",
    },
  },
  {
    name: "Lemuel Guilherme",
    role: "Sócio e Gestor Executivo e Comercial",
    image: lemuelImg,
    bio: "Responsável pelo setor comercial, transformando ideias em experiências visuais impactantes e alinhadas com cada marca.",
    social: {
      instagram: "https://www.instagram.com/lemuel.bezerra?igsh=MXZxbW93MTVuNGh3bw==",
    },
  },
  {
    name: "Yan Richard",
    role: "Produtor e Editor de Vídeos",
    image: yanImg,
    bio: "Especialista em produção audiovisual e edição, garantindo qualidade cinematográfica e narrativas envolventes em cada projeto.",
    social: {
      instagram: "https://www.instagram.com/yanrichard.santos?igsh=MWw0czA4dTEycWpoOQ==",
    },
  },
];

const Card = ({ member }: any) => (
  <div className="relative text-center">
    <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-6">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover"
      />
      {/* detalhe */}
      <div className="pointer-events-none absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-gradient-gold opacity-20" />
    </div>

    <h3 className="text-xl font-bold">{member.name}</h3>
    <p className="text-primary text-sm uppercase tracking-wider mb-3">
      {member.role}
    </p>
    <p className="text-muted-foreground text-sm mb-4">
      {member.bio}
    </p>

    <div className="flex justify-center gap-4">
      <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
        {member.name_user}
      </a>
      <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
        <Instagram size={12} />
      </a>
    </div>
  </div>
);

const Equipe = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={teamBg} alt="Equipe Arco Contents" className="w-full h-full object-cover" width={1920} height={900} />
          <div className="absolute inset-0 bg-warm-overlay" />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-muted-foreground text-sm uppercase tracking-[0.3em] mb-4">Nossa equipe</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Quem faz acontecer</h1>
            <p className="text-muted-foreground max-w-xl text-lg">
              Conheça as pessoas por trás das histórias inesquecíveis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <Section>
        <div className="max-w-5xl mx-auto space-y-12">

          {/* LINHA DE CIMA (2 CARDS) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.slice(0, 2).map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="relative mx-auto w-full max-w-[320px]">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* detalhe */}
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-xl bg-white opacity-20" />
                </div>

                <h3 className="text-xl font-bold mt-6">{member.name}</h3>
                <p className="text-primary text-sm uppercase tracking-wider mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CARD CENTRAL (EMBAIXO) */}
          {team[2] && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="text-center max-w-[320px]">
                <div className="relative mx-auto">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                    <img
                      src={team[2].image}
                      alt={team[2].name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* detalhe */}
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-xl bg-white opacity-20" />
                </div>

                <h3 className="text-xl font-bold mt-6">{team[2].name}</h3>
                <p className="text-primary text-sm uppercase tracking-wider mb-3">
                  {team[2].role}
                </p>
                <p className="text-muted-foreground text-sm">
                  {team[2].bio}
                </p>
              </div>
            </motion.div>
          )}

        </div>
      </Section>
    </Layout>
  );
};

export default Equipe;