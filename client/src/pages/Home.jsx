import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Ticker from '../components/Ticker'

const skills = [
  { title: 'Digital Marketing', desc: 'Learn SEO, social media & ads to grow any brand online.', icon: '📢' },
  { title: 'Graphic Design', desc: 'Master design tools & visual principles that stand out.', icon: '🎨' },
  { title: 'Web Development', desc: 'Build modern, responsive websites & web applications.', icon: '💻' },
  { title: 'Data Analysis', desc: 'Excel, Power BI & reporting to make data-driven decisions.', icon: '📊' },
]

const stats = [
  { value: '500+', label: 'Graduates' },
  { value: '95%',  label: 'Job Placement' },
  { value: '4.9★', label: 'Student Rating' },
  { value: '12+',  label: 'Programs' },
]

const whyUs = [
  { icon: '👥', text: 'Small class sizes for personalized attention' },
  { icon: '🏆', text: 'Industry-recognized certifications' },
  { icon: '💼', text: 'Career placement support after graduation' },
]

const tickerItems = [
  'BUILD SKILLS', 'CHANGE YOUR FUTURE', 'REAL RESULTS', 'NO FLUFF',
  'APPLY NOW', 'GET HIRED', 'YOUR MOVE',
]

const steps = [
  { n: '01', title: 'Apply', desc: 'Fill out a short application — no experience or portfolio required to start.' },
  { n: '02', title: 'Learn', desc: 'Hands-on classes with working instructors, not recycled slide decks.' },
  { n: '03', title: 'Build', desc: 'Ship real projects for your portfolio before you ever apply for a job.' },
  { n: '04', title: 'Get Hired', desc: 'Career coaching, resume support & warm intros to hiring partners.' },
]

const testimonials = [
  {
    quote: "I had zero design background. Six months later I landed my first job as a junior designer — this program actually delivers.",
    name: 'Nadia Yusof', role: 'Graphic Design Graduate', color: 'bg-red-600',
  },
  {
    quote: "The instructors actually work in the industry. Every lesson felt like it was preparing me for a real job, not just a certificate.",
    name: 'Farid Ismail', role: 'Web Development Graduate', color: 'bg-gray-800',
  },
  {
    quote: "Small class sizes made all the difference. I could ask questions without feeling like I was slowing anyone down.",
    name: 'Wei Ling Tan', role: 'Data Analysis Graduate', color: 'bg-red-700',
  },
]

const badges = [
  { icon: '🏅', title: 'Most Trusted Training Brand', year: '2024' },
  { icon: '🥇', title: 'Excellence in Skills Education', year: '2023' },
  { icon: '⭐', title: 'Top Career Outcomes Award', year: '2024' },
  { icon: '🛡️', title: 'Certified Training Provider', year: 'Ongoing' },
]

const partners = [
  'Nexora Digital', 'BrightPixel Studio', 'CodeHarbor', 'Momentum Media',
  'Vantage Analytics', 'Skyline Hospitality', 'Forge & Co', 'Northline Retail',
]

const paymentPlans = [
  { icon: '💳', title: 'Pay in Full', price: 'From RM 1,800', desc: 'One-time payment with a 10% early-bird discount applied.' },
  { icon: '📅', title: 'Monthly Plan', price: 'From RM 350/mo', desc: 'Spread your tuition over up to 6 months, interest-free.' },
  { icon: '🎓', title: 'Scholarships & Aid', price: 'Apply at Signup', desc: 'Merit-based scholarships available for qualifying students.' },
]

const faqs = [
  { q: 'Do I need prior experience to apply?', a: "No — most of our students start with zero experience. Our programs are built for beginners who are serious about learning." },
  { q: 'How long do the programs take?', a: 'Most programs run 8–12 weeks, part-time or full-time depending on the track you choose.' },
  { q: 'Is there job placement support after graduation?', a: 'Yes — every graduate gets resume support, mock interviews, and introductions to our hiring partner network.' },
  { q: 'Are classes online or in person?', a: 'Both. Choose whichever fits your schedule — most students mix in-person labs with online lectures.' },
]

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }
}

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-800">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-6 text-left"
      >
        <span className="font-black text-white text-lg">{faq.q}</span>
        <span className={`shrink-0 w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-red-500 font-black transition-transform ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      {isOpen && (
        <p className="text-gray-400 leading-relaxed pb-6 max-w-2xl">{faq.a}</p>
      )}
    </div>
  )
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="min-h-screen">

      {/* HERO */}
     <section className="relative min-h-screen flex items-center overflow-hidden">

      <img 
  src="/hero.jpg" 
  alt="hero" 
  className="absolute inset-0 w-full h-full object-cover"
/>
<div className="absolute inset-0 bg-black/60" />
        {/* Background decoration */}
        <div style={{
          position: 'absolute', top: '10%', right: '5%',
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(220,38,38,0.12), transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute', bottom: '5%', left: '-5%',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(220,38,38,0.07), transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 py-32">
          <p className="text-red-500 font-black text-xs tracking-widest uppercase mb-6">
            Transform Your Career
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Build Skills.{' '}
            <span className="text-red-600">Build Your Future.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
            We take individuals with zero experience and equip them with
            in-demand professional skills that employers are looking for.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/signup"
              className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition shadow-lg">
              Apply Now →
            </Link>
            <Link to="/about"
              className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-full font-bold text-lg hover:border-white hover:text-white transition">
              Learn More
            </Link>
          </div>

          {/* STATS */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-black text-white">{s.value}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Ticker items={tickerItems} />

      {/* PROGRAMS */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-red-600 font-black text-xs tracking-widest uppercase mb-3">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Our Programs</h2>
            <p className="text-gray-500 max-w-md mx-auto">
              Choose from a range of skill-based programs designed to launch your career.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div key={skill.title}
                className="bg-gray-50 p-7 rounded-2xl border border-gray-100 hover:border-red-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                <div className="text-3xl mb-5">{skill.icon}</div>
                <h3 className="font-black text-gray-900 text-lg mb-2 group-hover:text-red-600 transition">{skill.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.p {...fadeUp()} className="text-center text-red-600 font-black text-xs tracking-widest uppercase mb-10">
            Recognized For Excellence
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {badges.map((b, i) => (
              <motion.div key={b.title} {...fadeUp(i * 0.08)}
                className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-red-600/10 flex items-center justify-center text-2xl">
                  {b.icon}
                </div>
                <h4 className="font-black text-gray-900 text-sm leading-snug mb-1">{b.title}</h4>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-wide">{b.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <p className="text-red-600 font-black text-xs tracking-widest uppercase mb-3">The Process</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">How It Works</h2>
            <p className="text-gray-500 max-w-md mx-auto">
              From application to job offer — here's the path most students follow.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div key={step.n} {...fadeUp(i * 0.1)} className="relative">
                <div className="text-6xl font-black text-gray-200 mb-3">{step.n}</div>
                <h3 className="font-black text-gray-900 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 -right-4 text-2xl text-red-300">→</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-gray-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-red-600 font-black text-xs tracking-widest uppercase mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Real Skills.<br />Real Results.</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Our hands-on programs are designed by industry professionals. We focus on practical
              skills that employers actually need — no fluff, no outdated theory.
            </p>
            <div className="space-y-4">
              {whyUs.map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-600/10 border border-red-600/20 flex items-center justify-center flex-shrink-0 text-xl">
                    {item.icon}
                  </div>
                  <span className="text-gray-300 font-medium text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-video bg-gray-800 border border-gray-700">
            <img src="https://picsum.photos/seed/client-classroom/900/506" alt="Students in class" className="w-full h-full object-cover" />
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'linear-gradient(135deg, rgba(220,38,38,0.08), transparent)'
            }} />
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-16 px-6 md:px-12 bg-white overflow-hidden">
        <p className="text-center text-gray-400 font-black text-xs tracking-widest uppercase mb-10">
          Our Graduates Get Hired At
        </p>
        <div className="flex whitespace-nowrap animate-[marquee_28s_linear_infinite]">
          {[0, 1].map((rep) => (
            <div key={rep} className="flex shrink-0">
              {[...partners, ...partners].map((name, i) => (
                <span key={`${rep}-${i}`}
                  className="mx-4 px-6 py-3 rounded-xl border border-gray-200 text-gray-500 font-black text-sm md:text-base tracking-wide">
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <p className="text-red-600 font-black text-xs tracking-widest uppercase mb-3">Success Stories</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">What Our Graduates Say</h2>
            <p className="text-gray-500 max-w-md mx-auto">
              Real people, real career changes.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} {...fadeUp(i * 0.1)}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col">
                <div className="text-red-600 text-3xl font-black mb-4">"</div>
                <p className="text-gray-700 leading-relaxed mb-6 flex-1">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center text-white font-black text-sm shrink-0`}>
                    {t.name.split(' ').map(w => w[0]).join('')}
                  </div>
                  <div>
                    <div className="font-black text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEES & FINANCING */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <p className="text-red-600 font-black text-xs tracking-widest uppercase mb-3">Investing In Your Future</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Fees & Financing</h2>
            <p className="text-gray-500 max-w-md mx-auto">
              Flexible ways to pay, so cost is never the reason you don't start.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paymentPlans.map((plan, i) => (
              <motion.div key={plan.title} {...fadeUp(i * 0.1)}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-red-200 hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-4xl mb-5">{plan.icon}</div>
                <h3 className="font-black text-gray-900 text-lg mb-1">{plan.title}</h3>
                <p className="text-red-600 font-black text-sm mb-4">{plan.price}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{plan.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.p {...fadeUp(0.2)} className="text-center text-gray-400 text-sm mt-10">
            Prices vary by program. Speak to our admissions team for a personalized quote.
          </motion.p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-gray-950">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <p className="text-red-600 font-black text-xs tracking-widest uppercase mb-3">Got Questions?</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Frequently Asked</h2>
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            {faqs.map((faq, i) => (
              <FaqItem
                key={faq.q}
                faq={faq}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 md:px-12 text-center bg-red-600 relative overflow-hidden">
        <div style={{
          position: 'absolute', top: '-50%', left: '-10%',
          width: 600, height: 600, borderRadius: '50%',
          background: 'rgba(0,0,0,0.08)', pointerEvents: 'none'
        }} />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-red-100 text-lg mb-10">
            Join hundreds of graduates who transformed their careers with us.
          </p>
          <Link to="/signup"
            className="bg-white text-red-600 px-10 py-4 rounded-full font-black text-lg hover:bg-gray-100 transition shadow-lg">
            Apply Today →
          </Link>
        </div>
      </section>

    </div>
  )
}