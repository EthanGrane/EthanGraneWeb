import { p } from "framer-motion/client"

export const projects = [
  {
    video: "ClickerFactorio_Gameplay.webm",
    icon: "",
    title: "Factorio Clicker",
    date: "2025-2025",
    description: (
      <>
        <p>
          This is a small game I made in a week. It's an automation and clicker game at the same time.
          The gameplay loop consists of building mechanisms to get money, and to get upgrades you must complete achievements by clicking.
        </p>
        <br />
        <p>
          I created this project to continue improving my portfolio. 
          I've written three articles on rendering techniques so other developers can recreate some mechanics or visual styles that aren't complex but are intricate.
        </p>
      </>

    ),
  gameplay_url: "https://www.youtube.com/embed/RlD0FcA5vko"
  },
  {
    video: "SpyOnTheMobTown_Gameplay.webm",
    icon: "SpyOnTheMobTown_Logo.png",
    title: "Spy on the Mob Town",
    date: "2023-2024",
    description: (
      <>
        <p>
          Spy on the Mob Town is a private online multiplayer shooter I developed to play with friends. Each round begins with players collecting weapons before being assigned a hidden role—Innocent or Traitor.
        </p>
        <p>
          Traitors must eliminate the Innocents, while Innocents must survive, identify, and stop the Traitors, creating a tense psychological game where anyone could be the enemy.
        </p>
        <p>
          This project taught me how to build online multiplayer systems, including client-server architecture and server prediction, drawing inspiration from Valve’s technical manuals.
        </p>
        <p>
          Beyond programming, I also created the models and designed all the sound effects from scratch, sampling music and transforming everyday kitchen noises into weapons, footsteps, and ambient audio.
        </p>
      </>
    )
  },
  {
    video: "TheOutsider_Gameplay.webm",
    icon: "TheOutsider_Logo.png",
    title: "The Outsider",
    date: "2021-2022",
    description: (
      <>
        <p>
          The Outsider was my first major solo project, a first-person puzzle game inspired by Amnesia Games.
        </p>
        <p>
          Over a year and a half, I designed immersive puzzles and built a narrative voice-over system that revealed the protagonist’s inner thoughts.
        </p>
        <p>
          Although I already knew C#, this was my first large-scale project. Managing scope and keeping the code consistent became my biggest challenges, pushing me to improve my structure, refactoring, and long-term planning.
        </p>
        <p>
          Beyond programming, I also created the models and designed all the sound effects from scratch, sampling music and transforming everyday kitchen noises into weapons, footsteps, and ambient audio.
        </p>
      </>
    )
  },
  {
    video: "TheWayOfCreator_Gameplay.webm",
    icon: "TheWayOfCreator_Logo.png",
    title: "The Way of Creator",
    date: "2021-2021",
    description: (
      <>
        <p>
          The Way of Creator was my first game, built in just a few weeks as a personal challenge to see if I could finish a complete project.
        </p>
        <p>
          Despite its simplicity, it featured bug-fighting sections, trap-filled paths, and a final boss battle with music synchronized to the combat rhythm.
        </p>
        <p>
          Completing it gave me the confidence to continue developing larger and more ambitious games.
        </p>
      </>
    )
  },
];
