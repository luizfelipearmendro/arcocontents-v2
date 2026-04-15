import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = ["Todos", "Fotos", "Vídeos", "Social"];

const projects = [
    {
        id: 2,
        title: "Madeira Nobre",
        category: "Vídeos",
        type: "video",
        src: "/images/portfolio/adega.mp4",
        thumb: "/images/portfolio/thumb_adega.jpeg",
    },
    {
        id: 3,
        title: "Techduto",
        category: "Vídeos",
        type: "video",
        src: "/images/portfolio/techduto.mp4",
        thumb: "/images/portfolio/thumb_techduto.jpeg",
    },
    {
        id: 4,
        title: "Guilherme & Ana",
        category: "Vídeos",
        type: "video",
        src: "/images/portfolio/gui&ana.mp4",
        thumb: "/images/portfolio/thumb_gui&ana.jpeg",
    },
    {
        id: 5,
        title: "Por trás das câmeras - Cris & João",
        category: "Vídeos",
        type: "video",
        src: "/images/portfolio/cris&joao.mp4",
        thumb: "/images/portfolio/thumb_cris&joao.jpeg",
    },
];

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [selectedItem, setSelectedItem] = useState<any>(null);

    const filteredProjects =
        selectedCategory === "Todos"
            ? projects
            : projects.filter((p) => p.category === selectedCategory);

    const isEmpty = filteredProjects.length === 0;

    return (
        <Layout>
            {/* HERO */}
            <section className="pt-32 pb-16 bg-gradient-dark">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4">
                            Portfólio
                        </p>
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                            Nossos Trabalhos
                        </h1>
                        <p className="text-muted-foreground max-w-xl text-lg">
                            Projetos reais que mostram como transformamos marcas através de conteúdo visual.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* FILTRO */}
            <Section>
                <div className="flex flex-wrap gap-3 justify-center mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition ${selectedCategory === cat
                                    ? "bg-primary text-white"
                                    : "bg-card text-foreground/70 hover:bg-primary/10"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* EMPTY STATE */}
                {isEmpty ? (
                    <div className="flex flex-col items-center justify-center py-24 text-center">
                        <p className="text-lg text-muted-foreground">
                            Ainda não temos conteúdos nesta categoria
                        </p>
                        <span className="text-sm text-muted-foreground/60 mt-2">
                            Em breve novos projetos serão adicionados
                        </span>
                    </div>
                ) : (
                    /* GRID */
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                                onClick={() => setSelectedItem(project)}
                            >
                                {/* MEDIA */}
                                <div className="relative aspect-video overflow-hidden">
                                    {project.type === "video" ? (
                                        <>
                                            {/* THUMB */}
                                            <img
                                                src={project.thumb}
                                                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                                            />

                                            {/* VIDEO */}
                                            <video
                                                src={project.src}
                                                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-300"
                                                muted
                                                loop
                                                playsInline
                                            />
                                        </>
                                    ) : (
                                        <img
                                            src={project.src}
                                            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                        />
                                    )}
                                </div>

                                {/* OVERLAY */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-6">
                                    <h3 className="text-white text-xl font-bold">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/80 text-sm">
                                        {project.category}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </Section>

            {/* LIGHTBOX */}
            {selectedItem && (
                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedItem(null)}
                >
                    {selectedItem.type === "video" ? (
                        <video
                            src={selectedItem.src}
                            controls
                            autoPlay
                            className="max-w-5xl w-full rounded-xl"
                        />
                    ) : (
                        <img
                            src={selectedItem.src}
                            className="max-w-5xl w-full rounded-xl"
                        />
                    )}
                </div>
            )}

            {/* CTA */}
            <Section className="bg-card">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                        Gostou do que viu?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Vamos criar algo incrível para sua marca também.
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

export default Portfolio;