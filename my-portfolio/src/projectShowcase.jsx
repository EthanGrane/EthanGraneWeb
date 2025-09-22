import { projects } from './data/Projects.jsx'

export default function ProjecShowcase({ video, icon, title, date, description, gameplayUrl = "" }) {
    return (
        <div>
            <h2 id='projects' className="text-8xl text-center m-5">Projects List</h2>

            {projects.map((project, index) => (
                <article>

                    <div className="relative w-full h-[clamp(258px,25vw,512px)]">
                        <video
                            loop
                            autoPlay
                            muted
                            playsInline
                            src={project.video}
                            className="w-full h-full object-cover"
                            style={{ filter: "brightness(0.5)" }}
                        />

                        <img
                            src={project.icon}
                            alt="Logo"
                            className="absolute top-0 left-0 right-0 bottom-0 m-auto p-9 max-w-full max-h-full object-contain"
                        />
                    </div>


                    <div className="flex flex-row">
                        <div className="m-9 p-9 mt-3 w-[50%]">
                            <h3 className="text-3xl underline">{project.title}</h3>
                            <h3 className="text-2xl">{project.date}</h3>
                            <br />
                            <p className="ml-9 mr-9 leading-relaxed">
                                <div className="ml-0 mt-3">
                                    {project.description}
                                </div>
                            </p>
                        </div>

                        <div className="m-9 p-9 mt-3 w-[50%]">
                            <div className="w-full aspect-video bg-black">

                            </div>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    )
}