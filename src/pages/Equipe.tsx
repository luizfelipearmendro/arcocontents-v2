import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import marcosImg from "/images/team/marcos.jpg";
import lemuelImg from "/images/team/lemuel.jpg";
import yanImg from "/images/team/yan.jpg";
import teamBg from "/images/team/team1 - Editado.jpg";
import { Instagram, Linkedin } from "lucide-react";

const team = [
  {
    name: "Marcos Adonai",
    role: "CEO & Fundador",
    image: marcosImg,
    bio: "Fundador da Arco Contents, apaixonado por storytelling e marketing de conteúdo. Lidera a equipe com visão estratégica e criatividade.",
    social: {
      instagram: "https://www.instagram.com/marcosvasconcelox/",
    },
    name_user: "marcosvasconcelox",
  },
  {
    name: "Lemuel Bezerra",
    role: "Diretora Criativa",
    image: lemuelImg,
    bio: "Responsável pela direção criativa dos projetos, transformando ideias em experiências visuais impactantes e alinhadas com cada marca.",
    social: {
      instagram: "https://www.instagram.com/lemuel.bezerra?igsh=MXZxbW93MTVuNGh3bw==",
    },
    name_user: "lemuel.bezerra",
  },
  {
    name: "Yan Richard",
    role: "Videomaker & Editor",
    image: yanImg,
    bio: "Especialista em produção audiovisual e edição, garantindo qualidade cinematográfica e narrativas envolventes em cada projeto.",
    social: {
      instagram: "https://www.instagram.com/yanrichard.santos?igsh=MWw0czA4dTEycWpoOQ==",
    },
    name_user: "yanrichard.santos",
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
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4">Nossa equipe</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Quem faz acontecer</h1>
            <p className="text-muted-foreground max-w-xl text-lg">
              Conheça as pessoas por trás das histórias inesquecíveis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <Section>
        <div className="max-w-6xl mx-auto space-y-20">

          {/* CEO (LAYOUT ORIGINAL - MELHOR) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Container da imagem com largura fit-content para o detalhe grudar nela */}
            <div className="relative w-fit isolate">
              <div className="aspect-[3/4] w-full max-w-md rounded-2xl overflow-hidden relative">
                <img
                  src={team[0].image}
                  alt={team[0].name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Detalhe agora posicionado corretamente no canto da foto */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-gradient-gold opacity-20" />
            </div>

            <div>
              <div className="section-divider mb-6" />
              <h2 className="text-3xl font-bold mb-2">{team[0].name}</h2>
              <p className="text-primary text-sm uppercase tracking-wider mb-4">
                {team[0].role}
              </p>
              <p className="text-muted-foreground mb-6">
                {team[0].bio}
              </p>

              <div className="flex items-center gap-4">
                <a href={team[0].social.instagram} target="_blank" rel="noopener noreferrer" className="text-primary text-xs uppercase tracking-wider italic">
                  @{team[0].name_user}
                </a>
                <a href={team[0].social.instagram} target="_blank" rel="noopener noreferrer" className="text-primary">
                  <Instagram size={16} />
                </a>
              </div>

            </div>
          </motion.div>

          {/* TIME (PADRÃO MENOR) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.slice(1).map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 items-center justify-items-center md:justify-items-start text-center md:text-left"
              >
                {/* IMAGEM MENOR */}
                <div className="relative w-full max-w-[300px] md:w-[300px] isolate">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-xl bg-gradient-gold opacity-20" />
                </div>

                {/* TEXTO AO LADO */}
                <div className="flex flex-col items-center md:items-start">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm uppercase tracking-wider mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground mb-5 max-w-md">
                    {member.bio}
                  </p>
                  <div className="flex items-center gap-4">
                    <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="text-primary text-xs uppercase tracking-wider italic">
                      @{member.name_user}
                    </a>
                    <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="text-primary">
                      <Instagram size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </Section>
    </Layout>
  );
};

export default Equipe;