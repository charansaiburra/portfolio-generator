"use client"

import { useState, useEffect } from "react"
//import { motion } from "framer-motion"
import { useScroll, motion } from "framer-motion"

import { Typewriter } from "react-simple-typewriter"
export default function Home() {
  const [dark, setDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const [loading, setLoading] = useState(true)

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false)
  }, 2000)
  
  return () => clearTimeout(timer)
}, [])
if (loading) {
  return (
    <div className="h-screen flex items-center justify-center animated-bg text-white text-4xl font-bold">
      Charansai Burra
    </div>
  )
}
  return (
  <main
    className={`min-h-screen transition-all duration-500 ${
      dark
        ? "bg-gray-900 text-white"
        :"animated-bg text-white"
       // : "bg-gradient-to-br from-gray-100 to-blue-100 text-gray-900"
    }`}
  >
 <motion.div
  style={{ scaleX: scrollYProgress }}
  className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
/>
      {/* NAVBAR */}
      <nav
  className={`flex justify-between items-center px-6 md:px-10 py-6 shadow-md sticky top-0 z-50 ${
    "backdrop-blur-md bg-white/20 border-b border-white/30"
  }`}
>
  <h1 className="text-2xl font-bold text-blue-600">Charansai</h1>

  {/* Desktop Menu */}
 <div className={`hidden md:flex gap-6 font-medium items-center ${
  dark ? "text-white" : "text-black"
}`}>
    <a href="#about" className="hover:text-blue-500 transition">About</a>
    <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
    <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
    <a href="#experience" className="hover:text-blue-500 transition">Experience</a>
    <a href="#certifications" className="hover:text-blue-500 transition">Certifications</a>
    <a href="#contact" className="hover:text-blue-500 transition">Contact</a>

    <button
      onClick={() => setDark(!dark)}
      className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:scale-105 transition"
    >
      {dark ? "Light" : "Dark"}
    </button>
  </div>

  {/* Mobile Hamburger */}
  <div className="md:hidden flex items-center gap-4">
    <button
      onClick={() => setDark(!dark)}
      className="px-3 py-1 rounded bg-blue-600 text-white"
    >
      {dark ? "☀" : "🌙"}
    </button>

    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="text-3xl"
    >
      ☰
    </button>
  </div>

  {/* Mobile Dropdown */}
  {menuOpen && (
    <div className={`absolute top-20 left-0 w-full flex flex-col items-center gap-4 py-6 ${
      dark ? "bg-gray-800 text-white" : "bg-white text-black"
    } shadow-lg md:hidden`}>
      <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
      <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
      <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
      <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
      <a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a>
      <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      <a
  href="#about"
  className={`transition ${
    dark ? "hover:text-blue-400" : "hover:text-blue-500"
  }`}
>
  About
</a>
    </div>
  )}
</nav>

      {/* HERO */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-center py-24 flex flex-col items-center"
>

  {/* Profile Image */}
  <div className="relative mb-6">
    <div className="absolute inset-0 rounded-full bg-blue-500 blur-xl opacity-40"></div>
<img
  src="/portfolio-generator/profile.jpeg"
  alt="Charansai"
  className="relative w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg"
/>
  </div>

  <h1 className="text-5xl font-bold mb-4">
    Charansai Burra
  </h1>

  <p className="text-xl mb-8">
    <Typewriter
      words={[
        "Full Stack Developer",
        "AI & ML Student",
        "React Developer",
        "Java Backend Developer"
      ]}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  </p>

  <div className="flex justify-center gap-4 flex-wrap">

    <a
      href="https://github.com/charansaiburra"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black text-white px-6 py-3 rounded-lg hover:scale-105 transition"
    >
      GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/charansai-burra-635b5231b/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition"
    >
      LinkedIn
    </a>

    <a
      href="/portfolio-generator/resume.pdf"
      download
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition"
    >
      Resume
    </a>

  </div>

</motion.section>

      {/* ABOUT */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p>
          Passionate Full Stack Developer pursuing B.Tech in AI & ML. 
          I build scalable web applications using modern technologies 
          with focus on clean architecture and performance.
        </p>
      </section>
{/* PROJECTS */}
<section id="projects" className="max-w-6xl mx-auto px-6 py-16">
  <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>

  <div className="grid md:grid-cols-2 gap-8">

    {/* E-Commerce */}
    <div className={`rounded-xl shadow-lg p-8 hover:-translate-y-2 transition duration-300 ${
      dark ? "bg-gray-800" : "bg-white"
    }`}>
      <h3 className="text-2xl font-bold text-blue-500 mb-4">
        E-Commerce Store
      </h3>

      <p className="mb-4">
        Full-stack e-commerce platform using React.js, Spring Boot & SQL 
        with cart, authentication and order management.
      </p>

      <div className="flex gap-4 flex-wrap">

        <a
          href="https://github.com/charansaiburra"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-4 py-2 rounded-lg hover:scale-105 transition"
        >
          View Code
        </a>

        <a
          href="#"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition"
        >
          Live Demo
        </a>

      </div>
    </div>

    {/* Portfolio Generator */}
    <div className={`rounded-xl shadow-lg p-8 hover:-translate-y-2 transition duration-300 ${
      dark ? "bg-gray-800" : "bg-white"
    }`}>
      <h3 className="text-2xl font-bold text-blue-500 mb-4">
        Portfolio Generator
      </h3>

      <p className="mb-4">
        Markdown-based portfolio builder using Next.js & Tailwind CSS 
        with GitHub deployment support.
      </p>

      <div className="flex gap-4 flex-wrap">

        <a
          href="https://github.com/charansaiburra/portfolio-generator"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-4 py-2 rounded-lg hover:scale-105 transition"
        >
          View Code
        </a>

        <a
          href="https://charansaiburra.github.io/portfolio-generator/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition"
        >
          Live Demo
        </a>

      </div>
    </div>

  </div>
</section>

      {/* SKILLS */}
      <section id="skills" className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-8">Skills</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Java",
            "Python",
            "React.js",
            "Next.js",
            "Spring Boot",
            "SQL",
            "Git",
            "Tailwind CSS"
          ].map((skill) => (
            <span
              key={skill}
              className="bg-gray-600 text-white px-5 py-2 rounded-full hover:scale-110 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-10">Experience</h2>

        <div className={`rounded-xl shadow-lg p-8 ${
          dark ? "bg-gray-800" : "bg-white"
        }`}>
          <h3 className="text-2xl font-bold text-blue-500 mb-4">
            Full Stack Development Projects
          </h3>
          <p>
            Designed and developed multiple full-stack applications with 
            REST APIs, responsive UI, and optimized database management.
          </p>
        </div>
      </section>
{/* CERTIFICATIONS */}
<section id="certifications" className="max-w-6xl mx-auto px-6 py-16 text-center">
  <h2 className="text-3xl font-semibold mb-10">Certifications & Achievements</h2>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Math Relay Winner */}
    <div className={`rounded-xl shadow-lg p-6 border-2 border-yellow-400 ${
      dark ? "bg-gray-800" : "bg-white"
    }`}>
      <h3 className="font-bold text-lg mb-2 text-yellow-500">
        🏆 Math Relay Winner
      </h3>
      <p className="mb-4">
        First Prize – Kalasalingam Academy of Research and Education
      </p>

      <a
        href="/portfolio-generator/certificates/mathrelay-winner-certificate.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition"
      >
        Download Certificate
      </a>
    </div>

    {/* Java Certificate */}
    <div className={`rounded-xl shadow-lg p-6 ${
      dark ? "bg-gray-800" : "bg-white"
    }`}>
      <h3 className="font-bold text-lg mb-2">Java Programming</h3>
      <p className="mb-4">CodeTantra Certification</p>

      <a
        href="/portfolio-generator/certificates/java-certificate.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition"
      >
        Download Certificate
      </a>
    </div>

    {/* UI/UX Certificate */}
    <div className={`rounded-xl shadow-lg p-6 ${
      dark ? "bg-gray-800" : "bg-white"
    }`}>
      <h3 className="font-bold text-lg mb-2">UI/UX Design Challenge</h3>
      <p className="mb-4">CSI KARE</p>

      <a
        href="/portfolio-generator/certificates/uiux-certificate.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition"
      >
        Download Certificate
      </a>
    </div>

  </div>
</section>
{/* GITHUB STATS */}
<section id="github" className="max-w-6xl mx-auto px-6 py-16 text-center">
  <h2 className="text-3xl font-semibold mb-10">GitHub Activity</h2>

  <div className="flex flex-col md:flex-row gap-8 justify-center items-center">

    {/* GitHub Stats Card */}
    <img
      src="https://github-readme-stats.vercel.app/api?username=charansaiburra&show_icons=true&theme=default"
      alt="GitHub Stats"
      className="rounded-lg shadow-lg"
    />

    {/* Contribution Graph */}
    <img
      src="https://github-readme-activity-graph.vercel.app/graph?username=charansaiburra&theme=github"
      alt="GitHub Contribution Graph"
      className="rounded-lg shadow-lg"
    />

  </div>
</section>
      {/* CONTACT */}
<section id="contact" className="py-20 bg-blue-600 text-white">
  <h2 className="text-3xl font-semibold mb-8 text-center">Contact Me</h2>

  <form
    action="mailto:charansaiburra5@gmail.com"
    method="POST"
    encType="text/plain"
    className="max-w-xl mx-auto flex flex-col gap-4"
  >
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="p-3 rounded-lg text-black"
    />

    <input
  type="text"
  name="name"
  placeholder="Your Name"
  required
  autoComplete="off"
  suppressHydrationWarning
  className="p-3 rounded-lg text-black"
/>
    <textarea
      name="message"
      placeholder="Your Message"
      rows={4}
      required
      className="p-3 rounded-lg text-black"
    ></textarea>

    <button
  type="submit"
  suppressHydrationWarning
  className="bg-black text-white py-3 rounded-lg hover:scale-105 transition"
>
  Send Message
</button>
  </form>

  <p className="text-center mt-8">📍Anantapur, Andhra Pradesh, India-515721</p>
</section>

    </main>
  )
}