import gameCard from "../public/GamesCard.png";
import * as React from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';

let skills = [
    "Unity 3D",
    "Advanced C#",
    "Blender",
    "HLSL",
    "Shader Graph",
    "Compute Shaders",
    "VFX Graph",
    "UI Design",
    "Network For Gameobjects",
    "Photon Networking",
    "Inkscape",
    "Ilustrator",
    "Gimp",
    "Photoshop",
    "Davinci Resolve",
    "Audacity",
    "OBS"]

export default function AboutMe() {

    return (
        <section className="m-[clamp(4px, 15vw, 64px)] flex flex-col lg:flex-row lg:m-auto">

            <div className="flex flex-col w-full lg:w-[33%]">

                {/*
                AboutMe
            */}
                <div className="p-3 ml-5">
                    <h2 className="text-8xl text-center">
                        Hello!
                    </h2>
                    <p>
                        Unity Developer with over 6 years of experience specializing in <strong>C# programming</strong> and
                        <strong> gameplay programming</strong>. I have designed and implemented a wide range of interactive
                        systems, tools, and gameplay mechanics, with additional expertise in <strong>graphics programming</strong>
                        (HLSL, Shader Graph, ComputeShaders) to enhance player experience and visual fidelity.
                        <br />
                        <br />
                        I have hands-on experience developing <strong>online multiplayer systems</strong> using Netcode for
                        GameObjects and Photon Networking, ensuring scalable and reliable player interactions. Throughout my
                        career, I have delivered <strong>5 complete projects</strong> and published <strong>4 Unity Asset Store
                            packages</strong>, demonstrating the ability to transform concepts into polished, user-ready products
                        that meet both technical and creative goals.
                        <br />
                        <br />
                        My work is guided by clean architecture, maintainable code, and a strong focus on gameplay feel and
                        player engagement. Beyond game development, I bring complementary knowledge in <strong>web development</strong>,
                        <strong>databases (SQL/NoSQL)</strong>, and <strong>digital content creation</strong>, allowing me to
                        collaborate across disciplines and adapt to a variety of project requirements.
                    </p>

                </div>

                {/*
                Skills
                */}
                <div className="p-5 ml-5 mt-9">
                    <h2 className="text-8xl  text-center lg:text-left">Skills</h2>

                    <div className="flex">
                        <ul className="list-disc leading-9 m-5 w-[40%]">
                            {skills.slice(0, skills.length / 2).map((skill, i) => (
                                <li key={i}>{skill}</li>
                            ))}
                        </ul>

                        <div className="mt-auto mb-auto mr-5" style={{ height: "312px", width: "1px", background: "white" }}></div>

                        <ul className="list-disc leading-9 m-5  w-[40%]">
                            {skills.slice(skills.length / 2).map((skill, i) => (
                                <li key={i}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/*
                Image
            */}
            <div className="w-full lg:w-[33%]">
                <img src={gameCard} className="w-fit p-9" />
            </div>


            {/*
                Contact
                */}
            <div className="w-full lg:w-[33%] p-3">
                <h2 className="text-8xl text-center">Contact</h2>

                <div className="leading-9">
                    <a href="mailto:EthanGraneGarcia.Job@gmail.com?subject=Interested%20on%20your%20portfolio"
                        className="flex flex-row m-3"
                        target="_blank"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="white"
                            className="size-6">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                            />
                        </svg>

                        <p className="ml-3">EthanGraneGarcia.Job@gmail.com</p>
                    </a>

                    <a
                        href="https://github.com/EthanGrane"
                        target="_blank"
                        className="flex flex-row m-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="white"
                            className="size-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.85 10.94c.57.1.78-.25.78-.55 0-.27-.01-1.15-.02-2.09-3.19.69-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.52-2.55-.29-5.23-1.27-5.23-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.47.11-3.07 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.2-1.48 3.15-1.17 3.15-1.17.62 1.6.23 2.78.11 3.07.74.8 1.18 1.82 1.18 3.07 0 4.39-2.68 5.36-5.24 5.65.41.35.77 1.04.77 2.1 0 1.51-.01 2.72-.01 3.09 0 .3.21.65.79.54A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <p className="ml-3">Github.com/EthanGrane</p>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/EthanGrane"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row m-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="white"
                            className="size-6"
                        >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.039-1.852-3.039-1.853 0-2.136 1.445-2.136 2.939v5.669H9.351V9h3.414v1.561h.049c.477-.9 1.637-1.852 3.372-1.852 3.606 0 4.271 2.373 4.271 5.455v6.288zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                        </svg>

                        <p className="ml-3">Linkedin.com/in/EthanGrane</p>
                    </a>

                    <a
                        href="https://assetstore.unity.com/publishers/43932"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row m-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 256"
                            fill="white"
                            className="size-6"
                        >
                            <path d="M128 0 29 57v57l35 20V77l64-37 64 37v57l-64 37-35-20v40l35 20 99-57V57L128 0Z" />
                        </svg>

                        <p className="ml-3">Assetstore.unity.com</p>
                    </a>

                    <a
                        href="/EthanGrane_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row m-3"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                        </svg>

                        <p className="ml-3">Open Resume</p>
                    </a>


                </div>

            </div>

        </section >
    );
}