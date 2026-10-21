import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Asterisk, Menu, X } from 'lucide-react'
import Reveal from './components/Reveal'
import ProjectCard from './components/ProjectCard'
import { projects } from './data/projects'

const filters = ['All work', 'Business Systems', 'Digital Experience', 'Creative'] as const
type Filter = typeof filters[number]

export default function App() {
  const [filter, setFilter] = useState<Filter>('All work')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const artParallax = useTransform(scrollY, [0, 700], [0, 90])

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(max > 0 ? window.scrollY / max : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  const visibleProjects = filter === 'All work' ? projects : projects.filter(project => project.category === filter)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} aria-hidden="true" />
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Fahral, kembali ke atas"><span className="wordmark-mark">F.</span><span>FAHRAL<span className="wordmark-dot">.</span></span></a>
        <nav className={`desktop-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navigasi utama">
          <a href="#work" onClick={closeMenu}>Selected work <span>01</span></a>
          <a href="#about" onClick={closeMenu}>About <span>02</span></a>
          <a href="#contact" onClick={closeMenu}>Contact <span>03</span></a>
        </nav>
        <a className="header-cta" href="#contact">Let’s talk <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-topline">
            <span><span className="status-dot" /> AVAILABLE FOR SELECT PROJECTS</span>
            <span>BASED IN INDONESIA · 2026</span>
          </div>
          <div className="hero-layout">
            <div className="hero-copy">
              <Reveal delay={0.08}><p className="eyebrow">INDUSTRIAL ENGINEERING · DIGITAL SYSTEMS · CREATIVE DESIGN</p></Reveal>
              <motion.h1
                initial={reduceMotion ? false : 'hidden'}
                animate="show"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.18 } } }}
              >
                <motion.span variants={{ hidden: { opacity: 0, y: 45 }, show: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.85, ease: 'easeOut' } } }}>Portfolio of</motion.span>
                <motion.span className="hero-serif" variants={{ hidden: { opacity: 0, y: 45 }, show: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.85, ease: 'easeOut' } } }}><em>Ideas in motion.</em></motion.span>
              </motion.h1>
              <Reveal delay={0.55}><p className="hero-intro">Industrial Engineering graduate exploring business systems, data management, and creative digital experiences. I turn practical needs into thoughtful, useful work.</p></Reveal>
              <Reveal delay={0.65}>
                <div className="hero-actions">
                  <a className="button button-dark" href="#work">Explore selected work <ArrowDownRight size={17} /></a>
                  <a className="text-link" href="#about">A little about me <ArrowRight size={15} /></a>
                </div>
              </Reveal>
              <div className="hero-footnote"><span>01 — 06</span><span>SYSTEMS / EXPERIENCES / DESIGN</span></div>
            </div>

            <motion.div className="hero-art" style={reduceMotion ? undefined : { y: artParallax }} initial={reduceMotion ? false : { opacity: 0, scale: 0.94, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: reduceMotion ? 0 : 1.1, delay: 0.25, ease: 'easeOut' }}>
              <div className="art-orbit orbit-one" />
              <div className="art-orbit orbit-two" />
              <motion.div className="art-paper" animate={reduceMotion ? undefined : { y: [0, -7, 0], rotate: [0, 0.6, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
                <div className="paper-top"><span>FIELD NOTES / 2026</span><Asterisk size={19} /></div>
                <div className="paper-title">Ideas made<br /><em>tangible.</em></div>
                <div className="paper-image">
                  <img src="https://i.vgy.me/e6ciEi.png" alt="Portrait of Fahral Athallah Chandra" fetchPriority="high" />
                  <span>FIG. 01 — WORK IN PROGRESS</span>
                </div>
                <div className="paper-bottom"><span>DESIGN / SYSTEMS / STORIES</span><span>FM—26</span></div>
              </motion.div>
              <motion.div className="floating-stamp" animate={reduceMotion ? undefined : { rotate: [9, 14, 9] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}><span>CURIOUS<br />BY NATURE</span><Asterisk size={22} /></motion.div>
              <span className="art-caption">A collection of things I care about ↗</span>
            </motion.div>
          </div>
          <a className="scroll-cue" href="#work"><span>SCROLL TO DISCOVER</span><ArrowDown size={15} /></a>
        </section>

        <section className="intro-band">
          <div className="section-shell intro-band-inner">
            <Reveal><span className="eyebrow">A PRACTICAL CREATIVE</span></Reveal>
            <Reveal delay={0.1}><p>Not just screens. <em>Solutions.</em> Not just features. <em>Experiences.</em></p></Reveal>
            <Reveal delay={0.18}><span className="intro-side-note">A balance of logic<br />and imagination.</span></Reveal>
          </div>
        </section>

        <section className="work-section section-shell" id="work">
          <div className="section-heading">
            <Reveal><div><p className="eyebrow">A FEW THINGS I’VE MADE</p><h2>Selected <em>work.</em></h2></div></Reveal>
            <Reveal delay={0.12}><p className="section-description">Business systems, digital experiences, and visual design. A selection of work built to organize information, support people, and make moments memorable.</p></Reveal>
          </div>
          <div className="filter-bar" role="group" aria-label="Filter project">
            {filters.map(item => <button key={item} type="button" className={filter === item ? 'filter-button active' : 'filter-button'} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}<span>{item === 'All work' ? String(projects.length).padStart(2, '0') : String(projects.filter(p => p.category === item).length).padStart(2, '0')}</span></button>)}
          </div>
          <motion.div className="project-grid" layout>
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
            </AnimatePresence>
          </motion.div>
          <div className="work-endnote"><span>END OF SELECTION</span><span>MORE EXPERIMENTS IN PROGRESS <Asterisk size={13} /></span></div>
        </section>

        <section className="education-section section-shell" id="education">
          <div className="education-visual">
            <img src="https://i.vgy.me/IHgLMD.png" alt="Education background" loading="lazy" decoding="async" />
            <span>EDUCATION / BACKGROUND</span>
          </div>
          <div className="education-copy">
            <p className="eyebrow">01 / THE FOUNDATION</p>
            <h2>Learning shapes<br /><em>the way forward.</em></h2>
            <p>My background in Industrial Engineering informs how I approach systems, operations, data, and problem-solving — with an eye for both structure and people.</p>
            <a className="text-link" href="#contact">Connect with me <ArrowRight size={15} /></a>
          </div>
        </section>

        <section className="manifesto-section" id="about">
          <div className="section-shell manifesto-layout">
            <Reveal><div className="manifesto-label"><span className="eyebrow">02 / THE APPROACH</span><span className="manifesto-star"><Asterisk size={35} strokeWidth={1} /></span></div></Reveal>
            <div className="manifesto-content">
              <Reveal><h2>Good work lives<br />between <em>clarity</em><br />and character.</h2></Reveal>
              <Reveal delay={0.12}><p>I’m an Industrial Engineering graduate interested in data management, business administration, digital systems, and creative design. I enjoy making information easier to manage and digital experiences more thoughtful.</p></Reveal>
              <Reveal delay={0.2}>
                <div className="principles">
                  <div><span>01</span><strong>Useful by design</strong><p>Make the complicated feel manageable.</p></div>
                  <div><span>02</span><strong>Details matter</strong><p>Typography, motion, and spacing all speak.</p></div>
                  <div><span>03</span><strong>Built to be used</strong><p>Responsive, accessible, and fast enough.</p></div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="contact-section section-shell" id="contact">
          <Reveal><p className="eyebrow">HAVE SOMETHING IN MIND?</p></Reveal>
          <Reveal delay={0.08}><h2>Let’s make<br />something <em>matter.</em></h2></Reveal>
          <Reveal delay={0.16}><p className="contact-copy">Open to professional opportunities, collaborations, and creative projects. Feel free to get in touch.</p></Reveal>
          <Reveal delay={0.22}><a className="button button-light" href="https://github.com/mistermocay" target="_blank" rel="noreferrer">Find me on GitHub <ArrowUpRight size={17} /></a></Reveal>
          <div className="contact-decoration" aria-hidden="true">F<span>.</span></div>
          <div className="contact-bottom"><span>FAHRAL / DIGITAL WORKS</span><span>MADE WITH INTENTION <Asterisk size={13} /></span></div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <span>© 2026 FAHRAL. A WORK IN PROGRESS.</span>
        <a href="#top">BACK TO TOP <ArrowUpRight size={13} /></a>
        <span>DESIGNED WITH INTENTION.</span>
      </footer>
    </>
  )
}
