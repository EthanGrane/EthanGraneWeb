import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AboutMe from './AboutMe.jsx'
import Header from './Header.jsx'
import Title from './Title.jsx'
import Projects from './Projects.jsx'
import ProjecShowcase from './projectShowcase.jsx'

import { projects } from './data/Projects.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Title />
    <AboutMe />
    <Projects />

    {projects.map((project, index) => (
      <ProjecShowcase
        key={index}
        video={project.video}
        icon={project.icon}
        title={project.title}
        date={project.date}
        description={project.description}
      />
    ))}
  </StrictMode>
);
