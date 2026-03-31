import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import marcosImg from "@/assets/marcos-adonai.jpg";
import { Instagram, Linkedin } from "lucide-react";

const team = [
  {
    name: "Marcos Adonai",
    role: "CEO & Fundador",
    image: marcosImg,
    bio: "Fundador da Arco Contents, apaixonado por storytelling e marketing de conteúdo. Lidera a equipe com visão estratégica e criatividade.",
    social: {
      instagram: "https://instagram.com/arcocontents",
      linkedin: "#",
    },
  },
];

const Equipe = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-dark">
        <div className="container mx-auto px-6">
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
        <div className="max-w-4xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={400}
                    height={533}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-gradient-gold opacity-20" />
              </div>
              <div>
                <div className="section-divider mb-6" />
                <h2 className="text-3xl font-display font-bold mb-2">{member.name}</h2>
                <p className="text-primary font-medium text-sm uppercase tracking-wider mb-6">
                  {member.role}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">{member.bio}</p>
                <div className="flex gap-4">
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Equipe;
