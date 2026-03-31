import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import { Phone, Mail, Instagram, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Phone, label: "WhatsApp", value: "(66) 99630-6201", href: "https://api.whatsapp.com/send/?phone=5566996306201" },
  { icon: Mail, label: "E-mail", value: "contato@arcocontents.com", href: "mailto:contato@arcocontents.com" },
  { icon: Instagram, label: "Instagram", value: "@arcocontents", href: "https://instagram.com/arcocontents" },
  { icon: MapPin, label: "Localização", value: "Brasil", href: "#" },
];

const Contato = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappText = `Olá! Meu nome é ${form.name}. ${form.message}`;
    window.open(
      `https://api.whatsapp.com/send/?phone=5566996306201&text=${encodeURIComponent(whatsappText)}`,
      "_blank"
    );
    toast({ title: "Redirecionando para o WhatsApp!", description: "Aguarde um momento." });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-dark">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4">Fale conosco</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Contato</h1>
            <p className="text-muted-foreground max-w-xl text-lg">
              Pronto para dar o próximo passo? Estamos aqui para ajudar.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Nome</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">E-mail</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Mensagem</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Como podemos ajudar?"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-lg font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity w-full justify-center"
            >
              Enviar via WhatsApp <Send size={16} />
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                  <p className="text-foreground font-medium">{item.value}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contato;
