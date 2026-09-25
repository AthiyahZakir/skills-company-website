import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, animate } from 'framer-motion'
import Ticker from '../components/Ticker'

const stats = [
  { value: 500, suffix: '+', label: 'Graduates' },
  { value: 12, suffix: '+', label: 'Programs' },
  { value: 95, suffix: '%', label: 'Employment Rate' },
  { value: 5, suffix: '+', label: 'Years Running' },
]

const courses = [
  { title: 'Digital Marketing', desc: 'SEO, paid ads & social strategy that actually moves the needle.', icon: '📢' },
  { title: 'Graphic Design', desc: 'Visual storytelling, brand systems & the tools to build them.', icon: '🎨' },
  { title: 'Web Development', desc: 'Front-to-back web builds using modern, in-demand frameworks.', icon: '💻' },
  { title: 'Data Analysis', desc: 'Turning raw numbers into decisions people actually act on.', icon: '📊' },
  { title: 'UI/UX Design', desc: 'Research-driven design that makes products feel effortless.', icon: '🖌️' },
  { title: 'Project Management', desc: 'Planning, leading & shipping projects without the chaos.', icon: '🗂️' },
]

const team = [
  { name: 'Aisha Rahman', role: 'Founder & Director', photo: 'https://picsum.photos/seed/aisha-rahman/300/300' },
  { name: 'Daniel Osei', role: 'Lead Web Instructor', photo: 'https://picsum.photos/seed/daniel-osei/300/300' },
  { name: 'Priya Nair', role: 'Head of Design', photo: 'https://picsum.photos/seed/priya-nair/300/300' },
  { name: 'Marcus Tan', role: 'Data & Analytics Coach', photo: 'https://picsum.photos/seed/marcus-tan/300/300' },
  { name: 'Sofia Cruz', role: 'Student Success Manager', photo: 'https://picsum.photos/seed/sofia-cruz/300/300' },
  { name: 'Ben Whitfield', role: 'Career Placement Lead', photo: 'https://picsum.photos/seed/ben-whitfield/300/300' },
]

const slides = [
  { type: 'image', src: '/hero.jpg', caption: 'Orientation day — where every cohort begins.' },
  { type: 'image', src: '/hero2.jpg', caption: 'Hands-on, every single day.' },
  { type: 'image', src: 'https://picsum.photos/seed/graduation-2024/1200/675', caption: 'Graduation Day 2024' },
  { type: 'image', src: 'https://picsum.photos/seed/campus-hackathon/1200/675', caption: 'Campus Hackathon Weekend' },
  { type: 'image', src: 'https://picsum.photos/seed/student-showcase/1200/675', caption: 'Student Showcase Night' },
]

const tickerItems = [
  'BUILD SKILLS', 'CHANGE YOUR FUTURE', 'REAL RESULTS', 'NO FLUFF',
  'APPLY NOW', 'JOIN THE STAGE', 'YOUR MOVE',
]

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  }
}

const sections = [
  { id: 'beginning', label: 'The Beginning' },
  { id: 'today', label: 'Today' },
  { id: 'founder', label: 'Founder' },
  { id: 'courses', label: 'Courses' },
  { id: 'team', label: 'Team' },
  { id: 'moments', label: 'Moments' },
]

function SectionNav() {
  return (
    <div className="sticky top-16 z-40 bg-red-900 border-b border-red-950 shadow-md">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-center gap-1 overflow-x-auto no-scrollbar">
        <span className="shrink-0 mr-3 text-xs font-black uppercase tracking-widest text-white/60">
          In This Page
        </span>
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="shrink-0 mx-1 my-2.5 px-4 py-1.5 rounded-full border border-white/40 text-sm font-black uppercase tracking-wide text-white hover:bg-white/10 hover:border-white transition"
          >
            {s.label}
          </a>
        ))}
      </div>
    </div>
  )
}

function CountUp({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, to])

  return (
    <span ref={ref}>{display}{suffix}</span>
  )
}

export default function About() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % slides.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 overflow-x-hidden">

      <SectionNav />

      {/* HERO — STAGE LIGHTS */}
      <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden text-center px-6">
        {/* Spinning spotlight beams */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(220,38,38,0.35) 8deg, transparent 20deg, transparent 160deg, rgba(220,38,38,0.25) 172deg, transparent 190deg, transparent 340deg, rgba(220,38,38,0.3) 352deg, transparent 360deg)',
            animation: 'spotlight-spin 18s linear infinite',
          }}
        />
        {/* Stage floor glow */}
        <div style={{
          position: 'absolute', bottom: '-20%', left: '50%', transform: 'translateX(-50%)',
          width: '140%', height: 500, borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(220,38,38,0.35), transparent 65%)',
          pointerEvents: 'none',
          animation: 'glow-pulse 4s ease-in-out infinite',
        }} />
        {/* Grid floor */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 opacity-20" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'linear-gradient(to top, black, transparent)',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-red-600/40 bg-red-600/10">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-[glow-pulse_1.6s_ease-in-out_infinite]" />
            <span className="text-red-400 font-black text-xs tracking-[0.25em] uppercase">Live Since 2018</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] mb-8 tracking-tight">
            BUILDING<br />
            <span className="text-red-600">SKILLS.</span>{' '}
            BUILDING<br />
            <span className="text-red-600">FUTURES.</span>
          </h1>
          <p className="text-base md:text-xl text-gray-400 max-w-xl mx-auto leading-relaxed font-medium">
            This isn't a classroom. It's a stage. Every cohort walks in unsure
            and walks out ready for the spotlight.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs font-black tracking-[0.3em] uppercase">Scroll</span>
          <span className="w-px h-10 bg-linear-to-b from-gray-500 to-transparent" />
        </motion.div>
      </section>

      <Ticker items={tickerItems} />

      {/* THE BEGINNING */}
      <section id="beginning" className="scroll-mt-32 py-24 md:py-36 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp()} className="relative rounded-2xl overflow-hidden aspect-video bg-gray-100 border border-gray-200 order-2 md:order-1">
            <img src="https://picsum.photos/seed/founding-team-2018/800/450" alt="Founding team, 2018" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div {...fadeUp(0.15)} className="order-1 md:order-2">
            <p className="text-red-600 font-black text-xs tracking-[0.25em] uppercase mb-3">Act One</p>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-[1.02]">The Beginning</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              It started in a small rented room with three instructors, a handful of secondhand
              laptops, and a stubborn belief that talent doesn't care about your background. In
              2018, we opened our doors to twelve students who wanted more than a certificate —
              they wanted a real shot at a real career. We taught what we knew, listened to what
              didn't work, and rebuilt the program more times than we can count.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHERE WE ARE TODAY — BIG STATS */}
      <section id="today" className="scroll-mt-32 relative py-24 md:py-36 px-6 md:px-12 bg-black text-white overflow-hidden">
        <div style={{
          position: 'absolute', top: '-20%', right: '-5%',
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(220,38,38,0.18), transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="relative max-w-6xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-20 max-w-2xl mx-auto">
            <p className="text-red-500 font-black text-xs tracking-[0.25em] uppercase mb-3">Act Two</p>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-[1.02]">Where We Are Today</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              Today we've grown into a full campus with dedicated labs, industry partnerships,
              and a growing alumni network spread across the country. What hasn't changed is the
              mission we started with.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl mx-auto text-center">
            {stats.map((s, i) => (
              <motion.div key={s.label} {...fadeUp(i * 0.1)}>
                <div className="text-5xl md:text-7xl font-black text-white tracking-tight">
                  <CountUp to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sm md:text-base text-gray-500 mt-2 font-bold uppercase tracking-widest">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div {...fadeUp()} className="bg-gray-50 rounded-3xl p-10 md:p-12 border border-gray-100 hover:border-red-200 hover:shadow-2xl transition-all duration-300">
            <div className="text-4xl mb-5">🎯</div>
            <h3 className="text-3xl font-black text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              We believe that everyone deserves access to quality skill development. Our programs
              are designed to be practical, affordable, and career-focused — turning beginners
              into confident professionals.
            </p>
          </motion.div>
          <motion.div {...fadeUp(0.15)} className="bg-gray-50 rounded-3xl p-10 md:p-12 border border-gray-100 hover:border-red-200 hover:shadow-2xl transition-all duration-300">
            <div className="text-4xl mb-5">🚀</div>
            <h3 className="text-3xl font-black text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              To be the leading skills training institution that bridges the gap between untapped
              potential and real-world employment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FOUNDER'S SPOTLIGHT */}
      <section id="founder" className="scroll-mt-32 py-24 md:py-36 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp()} className="relative rounded-2xl overflow-hidden aspect-square md:aspect-4/5 bg-gray-100 border border-gray-200">
            <img src="https://picsum.photos/seed/founder-portrait/600/750" alt="Aisha Rahman, Founder & Director" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div {...fadeUp(0.15)}>
            <p className="text-red-600 font-black text-xs tracking-[0.25em] uppercase mb-3">A Word From Our Founder</p>
            <p className="text-2xl md:text-3xl font-black text-gray-900 leading-snug mb-8">
              "I built this place because I was tired of watching talented people get overlooked
              for arbitrary reasons — no degree, no connections, no 'right' background. Every
              student who walks through our doors gets the same shot I wish someone had given me."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-white font-black text-lg">
                AR
              </div>
              <div>
                <h4 className="font-black text-gray-900">Aisha Rahman</h4>
                <p className="text-gray-500 text-sm">Founder & Director</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Ticker items={tickerItems} />

      {/* COURSES */}
      <section id="courses" className="scroll-mt-32 py-24 md:py-36 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <p className="text-red-600 font-black text-xs tracking-[0.25em] uppercase mb-3">The Lineup</p>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-3 leading-[1.02]">Our Courses</h2>
            <p className="text-gray-500 max-w-md mx-auto text-lg">
              Six career tracks, built with input from the people actually doing the hiring.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((c, i) => (
              <motion.div key={c.title} {...fadeUp((i % 3) * 0.1)}
                className="relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-red-600 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-bl-full group-hover:bg-red-600/10 transition-colors" />
                <div className="text-4xl mb-5 relative">{c.icon}</div>
                <h3 className="font-black text-gray-900 text-xl mb-2 group-hover:text-red-600 transition relative">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed relative">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM — SPOTLIGHT CARDS */}
      <section id="team" className="scroll-mt-32 py-24 md:py-36 px-6 md:px-12 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-20">
            <p className="text-red-500 font-black text-xs tracking-[0.25em] uppercase mb-3">Act Three</p>
            <h2 className="text-4xl md:text-6xl font-black mb-3 leading-[1.02]">Meet the Team</h2>
            <p className="text-gray-500 max-w-md mx-auto text-lg">
              A small crew of instructors and mentors obsessed with seeing students succeed.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div key={member.name} {...fadeUp((i % 3) * 0.1)} className="text-center group relative">
                {/* Spotlight beam */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'linear-gradient(to bottom, rgba(220,38,38,0.4), transparent)', clipPath: 'polygon(35% 0%, 65% 0%, 100% 100%, 0% 100%)' }}
                />
                <img
                  src={member.photo}
                  alt={member.name}
                  className="relative w-24 h-24 md:w-28 md:h-28 mx-auto rounded-full object-cover mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl ring-4 ring-transparent group-hover:ring-red-600/30"
                />
                <h4 className="font-black text-white">{member.name}</h4>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MOMENTS SLIDESHOW — NOW SHOWING */}
      <section id="moments" className="scroll-mt-32 py-24 md:py-36 px-6 md:px-12 bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-red-600/40 bg-red-600/10">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-[glow-pulse_1.6s_ease-in-out_infinite]" />
              <span className="text-red-400 font-black text-xs tracking-[0.25em] uppercase">Now Showing</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-3 leading-[1.02]">Moments That Define Us</h2>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="relative rounded-3xl overflow-hidden aspect-video border-2 border-gray-800 shadow-2xl shadow-red-950/40">
            {slides.map((slide, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-opacity duration-1000"
                style={{ opacity: i === active ? 1 : 0, pointerEvents: i === active ? 'auto' : 'none' }}
              >
                <div className="w-full h-full overflow-hidden">
                  {slide.type === 'image' ? (
                    <img
                      src={slide.src}
                      alt={slide.caption}
                      className="w-full h-full object-cover"
                      style={{ animation: i === active ? 'kenburns 6s ease-out forwards' : 'none' }}
                    />
                  ) : (
                    <div
                      className="w-full h-full bg-gray-800 flex items-center justify-center"
                      style={{ animation: i === active ? 'kenburns 6s ease-out forwards' : 'none' }}
                    >
                      <p className="text-gray-500 font-semibold text-sm">[ {slide.caption} ]</p>
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-transparent" />
                <p className="absolute bottom-8 left-8 right-8 text-white font-black text-xl md:text-2xl">
                  {slide.caption}
                </p>
              </div>
            ))}

            {/* ARROWS */}
            <button
              onClick={() => setActive(a => (a - 1 + slides.length) % slides.length)}
              aria-label="Previous slide"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-red-600 text-white flex items-center justify-center text-xl transition z-10 backdrop-blur-sm"
            >
              ‹
            </button>
            <button
              onClick={() => setActive(a => (a + 1) % slides.length)}
              aria-label="Next slide"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-red-600 text-white flex items-center justify-center text-xl transition z-10 backdrop-blur-sm"
            >
              ›
            </button>
          </motion.div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === active ? 'w-10 bg-red-600' : 'w-2 bg-gray-700 hover:bg-gray-600'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FINALE — CTA */}
      <section className="relative py-28 md:py-40 px-6 md:px-12 text-center bg-red-600 overflow-hidden">
        <div style={{
          position: 'absolute', top: '-50%', left: '-10%',
          width: 700, height: 700, borderRadius: '50%',
          background: 'rgba(0,0,0,0.1)', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-40%', right: '-10%',
          width: 600, height: 600, borderRadius: '50%',
          background: 'rgba(0,0,0,0.08)', pointerEvents: 'none',
        }} />
        <motion.div {...fadeUp()} className="relative z-10 max-w-3xl mx-auto">
          <p className="text-red-100 font-black text-xs tracking-[0.25em] uppercase mb-5">Final Act</p>
          <h2 className="text-4xl md:text-7xl font-black text-white mb-6 leading-[0.95]">
            Ready to Be Part<br />of Our Story?
          </h2>
          <p className="text-red-100 text-lg md:text-xl mb-12">
            Join the next cohort of graduates who transformed their careers with us.
          </p>
          <Link to="/signup"
            className="bg-white text-red-600 px-12 py-5 rounded-full font-black text-lg md:text-xl hover:bg-gray-100 hover:scale-105 transition-all shadow-2xl inline-block">
            Apply Today →
          </Link>
        </motion.div>
      </section>

    </div>
  )
}
