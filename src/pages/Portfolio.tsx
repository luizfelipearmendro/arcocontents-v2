import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "/images/team/team2.jpg";
import { useEffect } from "react";

const categories = ["Todos", "Fotos", "Vídeos"];

const projects = [
    {
        id: 1,
        title: "Casamento Guilherme & Ana",
        category: "Vídeos",
        type: "video",
        src: "/images/portfolio/videos/Casamento/Casamento.mp4",
        thumb: "/images/portfolio/fotos/Casamento/Casamento.jpg",
    },
    {
        id: 2,
        title: "AgroBruna - Farm Show",
        category: "Vídeos",
        type: "video",
        src: "/images/portfolio/videos/Farmshow/Farmshow.mp4",
        thumb: "/images/portfolio/fotos/Farmshow/SaveClip.App_656278081_18097161502969089_8641588775414507447_n.jpg",
    },
    {
        id: 3,
        title: "Simonetto Móveis Planejados",
        category: "Vídeos",
        type: "video",
        src: "/images/portfolio/videos/Móveis Planejados/Móveis planejados.mp4",
        thumb: "/images/portfolio/fotos/Móveis Planejados/Móveis planejados.jpg",
    },
    {
        id: 4,
        title: "Aniversário Infantil",
        category: "Vídeos",
        type: "video",
        src: "/images/portfolio/videos/Aniversário Infantil/Aniversário infantil.mp4",
        thumb: "/images/portfolio/fotos/Aniversário Infantil/Aniversário infantil.jpg",
    },
    {
        id: 5,
        title: "Arquitetura",
        category: "Vídeos",
        type: "video",
        src: "/images/portfolio/videos/Arquitetura/Arquitetura.mp4",
        thumb: "/images/portfolio/fotos/Arquitetura/Arquitetura.jpg",
    },
    {
        id: 6,
        title: "Mundo Animal Primavera do Leste",
        category: "Vídeos",
        type: "video",
        src: "/images/portfolio/videos/Alimentação/Alimentação.mp4",
        thumb: "/images/portfolio/fotos/Alimentação/Alimentação.jpg",
    },
    {
        id: 7,
        title: "AgroBruna - Farm Show",
        category: "Fotos",
        type: "image",
        src: "/images/portfolio/fotos/Farmshow/SaveClip.App_655179194_18097161493969089_1567782925287913821_n.jpg",
    },
    {
        id: 8,
        title: "AgroBruna - Farm Show",
        category: "Fotos",
        type: "image",
        src: "/images/portfolio/fotos/Farmshow/SaveClip.App_655628671_18097161436969089_8643876481399381994_n.jpg",
    },
    {
        id: 9,
        title: "AgroBruna - Farm Show",
        category: "Fotos",
        type: "image",
        src: "/images/portfolio/fotos/Farmshow/SaveClip.App_656269372_18097161466969089_7310442008583359931_n.jpg",
    },
    {
        id: 10,
        title: "AgroBruna - Farm Show",
        category: "Fotos",
        type: "image",
        src: "/images/portfolio/fotos/Farmshow/SaveClip.App_656272596_18097161445969089_8081892630138001511_n.jpg",
    },
    {
        id: 11,
        title: "AgroBruna - Farm Show",
        category: "Fotos",
        type: "image",
        src: "/images/portfolio/fotos/Farmshow/SaveClip.App_656275400_18097161484969089_1454986293272835517_n.jpg",
    },
    {
        id: 12,
        title: "AgroBruna - Farm Show",
        category: "Fotos",
        type: "image",
        src: "/images/portfolio/fotos/Farmshow/SaveClip.App_656278081_18097161502969089_8641588775414507447_n.jpg",
    },
    {
        id: 13,
        title: "AgroBruna - Farm Show",
        category: "Fotos",
        type: "image",
        src: "/images/portfolio/fotos/Farmshow/SaveClip.App_656279476_18097161454969089_1847904480787573672_n.jpg",
    },
    {
        id: 14,
        title: "Mobiliário Alto Padrão",
        category: "Fotos",
        type: "image",
        src: "/images/portfolio/fotos/Mobiliário alto padrão/SaveClip.App_658281873_17942743803159594_1887209892620676480_n.jpg",
    },
    {
        id: 15,
        title: "Mobiliário Alto Padrão",
        category: "Fotos",
        type: "image",
        src: "/images/portfolio/fotos/Mobiliário alto padrão/SaveClip.App_658289747_17942743794159594_5868292326560167029_n.jpg",
    },
    {
        id: 16,
        title: "Moda",
        category: "Fotos",
        type: "image",
        src: "/images/portfolio/fotos/Moda/SaveClip.App_628331111_17939773383121308_2310068790051783405_n.jpg",
    },
    {
        id: 17,
        title: "Moda",
        category: "Fotos",
        type: "image",
        src: "/images/portfolio/fotos/Moda/SaveClip.App_629460048_17939773371121308_6628112673907354295_n.jpg",
    },
    {
        id: 18,
        title: "Moda",
        category: "Fotos",
        type: "image",
        src: "/images/portfolio/fotos/Moda/SaveClip.App_630123125_17939773362121308_6746459249797651178_n.jpg",
    },
    {
        id: 19,
        title: "Moda",
        category: "Fotos",
        type: "image",
        src: "/images/portfolio/fotos/Moda/SaveClip.App_631281234_17939773389121308_6417604450759066268_n.jpg",
    },
    {
        id: 20,
        title: "Móveis Planejados",
        category: "Fotos",
        type: "image",
        src: "/images/portfolio/fotos/Móveis Planejados/SaveClip.App_670404017_17934785010227910_1694543563150235811_n.jpg",
    },
    {
        id: 21,
        title: "Móveis Planejados",
        category: "Fotos",
        type: "image",
        src: "/images/portfolio/fotos/Móveis Planejados/SaveClip.App_670796816_17934784995227910_4533122310092285529_n.jpg",
    },
    {
        id: 22,
        title: "Móveis Planejados",
        category: "Fotos",
        type: "image",
        src: "/images/portfolio/fotos/Móveis Planejados/SaveClip.App_671153391_17934784986227910_5838548136573295251_n.jpg",
    },
    {
        id: 23,
        title: "Móveis Planejados",
        category: "Fotos",
        type: "image",
        src: "/images/portfolio/fotos/Móveis Planejados/SaveClip.App_671803887_17934785013227910_2117613875345580683_n.jpg",
    },
    {
        id: 24,
        title: "Móveis Planejados",
        category: "Fotos",
        type: "image",
        src: "/images/portfolio/fotos/Móveis Planejados/SaveClip.App_673121652_17934785025227910_4487472699842013851_n.jpg",
    },
    {
        id: 25,
        title: "Alimentação",
        category: "Fotos",
        type: "image",
        src: "/images/portfolio/fotos/Alimentação/SaveClip.App_465938048_18061184617783581_8256071441917483153_n.jpg",
    },
    {
        id: 26,
        title: "Alimentação",
        category: "Fotos",
        type: "image",
        src: "/images/portfolio/fotos/Alimentação/SaveClip.App_466371267_18061184656783581_8730460539590162067_n.jpg",
    },
    {
        id: 27,
        title: "Alimentação",
        category: "Fotos",
        type: "image",
        src: "/images/portfolio/fotos/Alimentação/SaveClip.App_466606918_18061184647783581_7275672454803860527_n.jpg",
    },
    {
        id: 28,
        title: "Alimentação",
        category: "Fotos",
        type: "image",
        src: "/images/portfolio/fotos/Alimentação/SaveClip.App_466688580_18061184608783581_6964296893145881256_n.jpg",
    },
    {
        id: 29,
        title: "Alimentação",
        category: "Fotos",
        type: "image",
        src: "/images/portfolio/fotos/Alimentação/SaveClip.App_466755155_18061184635783581_4664799649174767892_n.jpg",
    },
    {
        id: 30,
        title: "Arquitetura",
        category: "Fotos",
        type: "image",
        src: "/images/portfolio/fotos/Arquitetura/SaveClip.App_620917620_18549019003015788_8708618323546212646_n.jpg",
    },
    {
        id: 31,
        title: "Arquitetura",
        category: "Fotos",
        type: "image",
        src: "/images/portfolio/fotos/Arquitetura/SaveClip.App_620919868_18549019042015788_7449575233977589927_n.jpg",
    },
    {
        id: 32,
        title: "Arquitetura",
        category: "Fotos",
        type: "image",
        src: "/images/portfolio/fotos/Arquitetura/SaveClip.App_620927517_18549019033015788_4975621687643883668_n.jpg",
    },
    {
        id: 33,
        title: "Arquitetura",
        category: "Fotos",
        type: "image",
        src: "/images/portfolio/fotos/Arquitetura/SaveClip.App_622099505_18549019015015788_6064220277019667071_n.jpg",
    },
    {
        id: 34,
        title: "Arquitetura",
        category: "Fotos",
        type: "image",
        src: "/images/portfolio/fotos/Arquitetura/SaveClip.App_622124288_18549018994015788_4822446298346158543_n.jpg",
    },
    {
        id: 35,
        title: "Arquitetura",
        category: "Fotos",
        type: "image",
        src: "/images/portfolio/fotos/Arquitetura/SaveClip.App_622166667_18549019024015788_1734634191155193337_n.jpg",
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

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedItem(null);
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    return (
        <Layout>
            {/* HERO */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src={heroBg} alt="Equipe Arco Contents" className="w-full h-full object-cover" width={1920} height={900} />
                    <div className="absolute inset-0 bg-warm-overlay" />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <p className="text-muted-foreground text-sm uppercase tracking-[0.3em] mb-4">
                            Portfólio
                        </p>
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
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
                                ? "bg-primary text-black/90"
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
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedItem(null)}
                    >
                        {/* fundo */}
                        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

                        {/* conteúdo */}
                        <motion.div
                            className="relative z-10 flex items-center justify-center"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >

                            {/* BOTÃO FECHAR */}
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute -top-12 right-0 text-white text-2xl hover:opacity-70 transition"
                            >
                                ✕
                            </button>

                            {selectedItem.type === "video" ? (
                                <video
                                    src={selectedItem.src}
                                    controls
                                    autoPlay
                                    className="max-h-[80vh] w-auto max-w-full rounded-xl shadow-2xl"
                                />
                            ) : (
                                <img
                                    src={selectedItem.src}
                                    className="max-h-[80vh] w-auto max-w-full rounded-xl shadow-2xl"
                                />
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

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
                        className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
                    >
                        Fale conosco <ArrowRight size={16} />
                    </Link>
                </div>
            </Section>
        </Layout>
    );
};

export default Portfolio;