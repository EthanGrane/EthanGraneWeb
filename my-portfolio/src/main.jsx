import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AboutMe from './AboutMe.jsx'
import Header from './Header.jsx'
import Title from './Title.jsx'
import Projects from './Projects.jsx'
import ProjecShowcase from './projectShowcase.jsx'
import AssetShowcase from './assetShowcase.jsx'
import Footer from './footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Header />
    <Title />
    <AboutMe />
    <Projects />
    <ProjecShowcase />
    <AssetShowcase />
    <Footer />

  </StrictMode>
);
