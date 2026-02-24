import { Link } from 'react-router-dom'

const skills = [
  { title: 'Digital Marketing', desc: 'Learn SEO, social media & ads to grow any brand online.', icon: '📢' },
  { title: 'Graphic Design', desc: 'Master design tools & visual principles that stand out.', icon: '🎨' },
  { title: 'Web Development', desc: 'Build modern, responsive websites & web applications.', icon: '💻' },
  { title: 'Data Analysis', desc: 'Excel, Power BI & reporting to make data-driven decisions.', icon: '📊' },
]

const stats = [
  { value: '500+', label: 'Graduates' },
  { value: '95%', label: 'Job Placement' },
  { value: '4.9★', label: 'Student Rating' },
  { value: '12+', label: 'Programs' },
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
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 py-32">
          <p className="text-blue-300 font-semibold text-sm tracking-widest uppercase mb-4">
            Transform Your Career
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Build Skills.{' '}
            <span className="text-yellow-400">Build Your Future.</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-lg">
            We take individuals with zero experience and equip them with
            in-demand professional skills that employers are looking for.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/signup"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition">
              Apply Now →
            </Link>
            <Link to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition">
              Learn More
            </Link>
          </div>

          {/* STATS BAR */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold text-white">{s.value}</div>
                <div className="text-sm text-blue-300 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-2">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Our Programs</h2>
            <p className="text-gray-500 max-w-md mx-auto">
              Choose from a range of skill-based programs designed to launch your career.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div key={skill.title}
                className="bg-gray-50 p-7 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="text-3xl mb-5">{skill.icon}</div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{skill.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-2">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Real Skills. Real Results.</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Our hands-on programs are designed by industry professionals. We focus on practical
              skills that employers actually need — no fluff, no outdated theory.
            </p>
            <div className="space-y-4">
              {whyUs.map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-xl">
                    {item.icon}
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-blue-200 flex items-center justify-center">
            <p className="text-blue-600 font-semibold">[ Client Image Here ]</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 md:px-12 text-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-blue-100 text-lg mb-10">
          Join hundreds of graduates who transformed their careers with us.
        </p>
        <Link to="/signup"
          className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition">
          Sign Up Today →
        </Link>
      </section>

    </div>
  )
}