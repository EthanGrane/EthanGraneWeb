import { motion } from "framer-motion";

export default function Projects() {
    return (
        <section className="m-[clamp(4px, 15vw, 64px)] flex flex-row">
            {/*
            Projects
            */}

            <div className="p-5 mt-9 w-[50%]">
                <h2 className="text-8xl text text-center lg:text-left mb-8">Projects</h2>
                <div className="grid grid-cols-1 lg:grid-cols-1">
                    <ProjectComponent 
                    title="Shade It!: Post Processing Effects Collection (2025)"
                    description="30+ stackable post-processing effects and a runtime API for total creative control."
                    img="/ShadeitIcon.png"
                    />

                    <ProjectComponent 
                    title="Sound It!: Adaptive Audio Source (2025)"
                    description="Sound Shapes is an intuitive Unity tool for effortlessly creating immersive audio environments directly in your scenes."
                    img="/SounditIcon.png"
                    />

                    <ProjectComponent 
                    title="Shade It!: Post Processing Effects Collection (2025)"
                    description="30+ stackable post-processing effects and a runtime API for total creative control."
                    img="/ShadeitIcon.png"
                    />

                    <ProjectComponent 
                    title="Shade It!: Post Processing Effects Collection (2025)"
                    description="30+ stackable post-processing effects and a runtime API for total creative control."
                    img="/ShadeitIcon.png"
                    />
                </div>
            </div>

            <div className="p-5 mt-9 w-[50%]">
                {/*
                Education
                */}
                <div>
                    <h2 className="text-8xl text text-center lg:text-left mb-8">Education</h2>
                    <div className="mt-3">
                        <h3 className="text-2xl">INS Bernat el Ferrer - 2023/2025</h3>
                        <ul className="list-disc ml-9">
                            <li>
                                Development of websites, digital/multimedia content, and IT resources
                                <br />
                                <i>
                                    Grado superior de Desarrollo de Aplicaciones Web (DAW)
                                </i>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-3">
                        <h3 className="text-2xl">INS Bernat el Ferrer - 2021/2023</h3>
                        <ul className="list-disc ml-9">
                            <li>
                                Microcomputer systems and networks
                                <br />
                                <i>
                                    Grado medio de Sistemas Microinformaticos en Red (SMX)
                                </i>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-9">
                    <h2 className="text-8xl text text-center lg:text-left mb-2">Languages</h2>

                    <div className="mt-3">
                        <h3 className="text-2xl">English</h3>
                        <LanguageBar level="B1" showNative={false} />
                    </div>

                    <div className="mt-3">
                        <h3 className="text-2xl">Spanish</h3>
                        <LanguageBar level="Native" />
                    </div>

                    <div className="mt-3">
                        <h3 className="text-2xl">Catalan</h3>
                        <LanguageBar level="Native" />
                    </div>

                </div>
            </div>
        </section>
    );
}


export function ProjectComponent({title, description, img}) {
    return (
        <article className="flex flex-col pl-1 mt-5 lg:flex-row lg:pl-9">
            <h3 className="text-2xl underline text-center mb-1 flex lg:hidden">{title}</h3>

            <img className="aspect-square w-[clamp(64px,25vw,128px)] h-[clamp(64px,25vw,128px)]"  src={img} alt="" />
            <div>
                <div>
                    <h3 className="text-2xl ml-2 underline hidden lg:flex">{title}</h3>
                </div>
                <ul className="list-disc ml-9 mt-3">
                    <li>
                        {description}
                    </li>
                </ul>
            </div>
        </article>
    )
}

export function LanguageBar({ level, showNative = true }) {
    const baseLevels = ["A1", "A2", "B1", "B2", "C1", "C2"];
    const levels = showNative ? [...baseLevels, "Native"] : baseLevels;
    const activeIndex = levels.indexOf(level);

    return (
        <div className="flex w-full h-8 rounded overflow-hidden relative bg-gray-200">
            {/* Barra animada */}
            <motion.div
                className="absolute top-0 left-0 h-full bg-sky-400"
                style={{background: "linear-gradient(to right, #5daeffff , #0080ffff)"}}
                initial={{ width: 0 }}
                whileInView={{ width: `${((activeIndex + 1) / levels.length) * 100}%` }}
                viewport={{ once: true, amount: .9 }} 
                transition={{ duration: 1, ease: "easeOut" }}
            />

            {/* Etiquetas encima */}
            {levels.map((lvl, i) => (
                <div
                    key={lvl}
                    className={`flex-1 flex items-center justify-center text-xs font-bold relative z-10 select-none
                        ${i <= activeIndex ? "text-white" : "text-gray-400"}`}
                >
                    {lvl}
                </div>
            ))}
        </div>
    );
}