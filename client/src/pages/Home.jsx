import { Link } from 'react-router-dom'

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

export default function Home() {
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

          <div className="relative rounded-2xl overflow-hidden aspect-video bg-gray-800 border border-gray-700 flex items-center justify-center">
            <p className="text-gray-500 font-semibold text-sm">[ Client Image Here ]</p>
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'linear-gradient(135deg, rgba(220,38,38,0.08), transparent)'
            }} />
          </div>
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