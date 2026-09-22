import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const work = [
  { number: '01', type: 'PYTHON + DJANGO / OFFLINE SYSTEM', title: 'Point of Sale', copy: 'A Python and Django system that keeps sales, billing, and inventory moving even when the internet does not.', tech: 'PYTHON / DJANGO / OFFLINE WORKFLOWS', tone: 'red', visual: 'pos' },
  { number: '02', type: 'REACT.JS / FINAL YEAR PROJECT', title: 'School Management System', copy: 'A React.js experience for student records, attendance, and the daily rhythm of school administration.', tech: 'REACT.JS / USER FLOWS / SCHOOL ADMIN', tone: 'blue', visual: 'school' },
]

const capabilities = ['PYTHON', 'DJANGO', 'REACT.JS', 'DATA ANALYSIS', 'PROMPT ENGINEERING', 'AI AUTOMATION', 'SOCIAL MEDIA MARKETING', 'DIGITAL MARKETING & SEO', 'HTML / CSS']

function Portrait({ className = '' }) {
  return <div className={`portrait ${className}`}><img src="/profile.jpg" alt="Idrees Khan wearing a blue suit" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.parentElement.classList.add('missing-photo') }} /><div className="portrait-fallback">IK</div></div>
}

function SocialIcon({ name }) {
  const paths = {
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></>,
    facebook: <path d="M14 21v-8h2.8l.4-3H14V8.1c0-.9.3-1.6 1.7-1.6h1.7V3.8c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V10H7.6v3h2.8v8H14Z" fill="currentColor" stroke="none" />,
    github: <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.3-2.2-.3-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.7-2.3 4.5-4.5 4.8.4.4.7 1.1.7 2.1v3.1c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z" fill="currentColor" stroke="none" />,
    linkedin: <path d="M5.1 7.3A1.7 1.7 0 1 1 5.1 4a1.7 1.7 0 0 1 0 3.3ZM3.6 9h3v9.6h-3V9Zm4.8 0h2.9v1.3h.1c.4-.8 1.4-1.7 2.9-1.7 3.1 0 3.7 2 3.7 4.7v5.3h-3v-4.7c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5v4.8h-3V9Z" fill="currentColor" stroke="none" />
  }

  return <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const items = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')), { threshold: 0.12 })
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  const goTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false) }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new URLSearchParams(new FormData(form))
    data.append('form-name', 'contact')
    try {
      await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: data.toString() })
      form.reset()
      setSent(true)
    } catch {
      setSent(false)
    }
  }

  return <div className="portfolio">
    <div className="noise" />
    <header className="topbar">
      <button className="wordmark" onClick={() => goTo('top')}>IDREES KHAN<span>®</span></button>
      <nav className={menuOpen ? 'nav open' : 'nav'}><button onClick={() => goTo('work')}>Work</button><button onClick={() => goTo('about')}>About</button><button onClick={() => goTo('contact')}>Contact</button></nav>
      <button className="work-button" onClick={() => goTo('contact')}>Let’s work <span>↗</span></button>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu"><i /><i /></button>
    </header>

    <main id="top">
      <section className="hero-new">
        <div className="hero-kicker reveal">SOFTWARE ENGINEER <span>+</span> BUILDER</div>
        <div className="hero-title reveal delay-1"><p>Useful ideas,</p><h1>built to<br /><em>matter.</em></h1></div>
        <div className="hero-photo-wrap reveal delay-2"><Portrait /><span className="photo-note">IDREES / 001</span></div>
        <p className="hero-copy reveal delay-2">I’m Idrees Khan, a software engineer from Swat, Pakistan. I build practical digital experiences with code, data, and a fast-learning mindset.</p>
        <button className="scroll-prompt" onClick={() => goTo('work')}><span>↓</span> SCROLL TO EXPLORE</button><span className="hero-index">A / 001</span>
      </section>

      <div className="marquee"><div>{capabilities.concat(capabilities).map((item, index) => <span key={`${item}-${index}`}>{item} <b>✳</b></span>)}</div></div>

      <section className="story-section work-section" id="work">
        <div className="section-intro reveal"><span className="section-number">01</span><div><p className="mini-label">SELECTED WORK</p><h2>Things I make<br /><em>useful.</em></h2><p className="section-copy">Systems, tools, and experiences shaped around the people who use them.</p></div></div>
        <div className="work-grid">{work.map((item, index) => <article className={`work-card ${item.tone} reveal delay-${index + 1}`} key={item.number}><div className="work-card-image"><span>{item.type} / {item.number}</span>{item.visual === 'pos' ? <img className="project-dashboard-image" src="/pos-dashboard.png" alt="Point of Sale dashboard" /> : <img className="school-management-image" src="/school-management.png" alt="School Management System interface" />}</div><div className="work-card-info"><h3>{item.title}</h3><span className="round-arrow">↗</span><p>{item.copy}</p><small>{item.tech}</small></div></article>)}</div>
      </section>

      <section className="story-section about-section" id="about"><div className="section-intro reveal"><span className="section-number">02</span><div><p className="mini-label">THE HUMAN BEHIND THE CODE</p><h2>Hi, I’m<br /><em>Idrees Khan.</em></h2></div></div><div className="about-layout"><Portrait className="about-image reveal" /><div className="about-text reveal delay-1"><p className="about-lead">A software engineering graduate who likes understanding how things work, then making them work a little better.</p><p>From a fully offline POS application to a React-based school management system, I enjoy projects where technology solves a real, human-sized problem.</p><p>I bring an organized mind, strong communication, and the curiosity to keep learning after the brief is finished.</p><button className="line-link" onClick={() => goTo('contact')}>Tell me about your project <span>↗</span></button></div></div><div className="facts reveal delay-2"><div><strong>BS</strong><span>SOFTWARE<br />ENGINEERING</span></div><div><strong>02</strong><span>REAL-WORLD<br />PROJECTS</span></div><div><strong>∞</strong><span>ROOM TO<br />GROW</span></div></div></section>

      <section className="skills-section"><div className="skills-heading reveal"><span className="section-number">03</span><div><p className="mini-label">WHAT I BRING</p><h2>Built with<br /><em>intention.</em></h2></div></div><div className="skills-list">{['Web development', 'Data analysis', 'AI automation', 'Social media marketing', 'Digital marketing & SEO', 'Customer support'].map((item, index) => <div className="skill-row reveal" key={item}><span>0{index + 1}</span><h3>{item}</h3><b>↗</b><p>{['Python, Django, React.js, HTML, and CSS for useful web experiences.', 'Pandas, NumPy, cleaning, and visual thinking for clearer decisions.', 'Prompt design and AI tools that turn repetitive work into momentum.', 'Content strategy, audience thinking, and social presence built around clear communication.', 'Search-friendly content, digital campaigns, and practical online growth strategies.', 'Clear, timely communication with care for the person on the other side.'][index]}</p></div>)}</div></section>

      <section className="contact-section" id="contact"><div className="contact-heading reveal"><span className="section-number">04</span><p className="mini-label">HAVE A GOOD ONE?</p><h2>Let’s make<br /><em>something</em><br />matter.</h2></div><div className="contact-lower reveal delay-1"><div><p>Have a product, a project, or a half-formed idea? Tell me what you’re building. I’ll bring a clear next step.</p><a href="mailto:idreekhan122@gmail.com">idreekhan122@gmail.com <span>↗</span></a></div><form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}><input type="hidden" name="form-name" value="contact" /><label>Your name<input name="name" required placeholder="Your name" /></label><label>Work email<input name="email" required type="email" placeholder="you@email.com" /></label><label>What are we making?<textarea name="message" required placeholder="A product, a website, a useful thing..." rows="2" /></label><button type="submit">{sent ? 'Message sent ✓' : 'Send inquiry ↗'}</button></form></div><footer><span>IK®</span><span className="social-links"><a href="https://www.instagram.com/im_idrees7?stkn=MWJxejRucDB3b2Nlag==" target="_blank" rel="noreferrer" aria-label="Instagram"><SocialIcon name="instagram" /></a><a href="https://www.facebook.com/share/1bthVv2jFq/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="Facebook"><SocialIcon name="facebook" /></a><a href="https://github.com/imidrees7" target="_blank" rel="noreferrer" aria-label="GitHub"><SocialIcon name="github" /></a><a href="https://www.linkedin.com/in/idrees-khan-826079290" target="_blank" rel="noreferrer" aria-label="LinkedIn"><SocialIcon name="linkedin" /></a></span><span>SWAT · PAKISTAN · 2026</span></footer></section>
    </main>
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
