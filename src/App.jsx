import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Recommendations from './components/Recommendations'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <>
      <div className="mesh-gradient" />
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Recommendations />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/"        element={<HomePage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms"   element={<Terms />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  )
}
