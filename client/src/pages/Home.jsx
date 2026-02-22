import { Link } from 'react-router-dom'
export default function Home() {
 const skills = [
 { title: 'Digital Marketing', desc: 'Learn SEO, social media & ads' },
 { title: 'Graphic Design', desc: 'Master design tools & principles' },
 { title: 'Web Development', desc: 'Build modern websites & apps' },
 { title: 'Data Analysis', desc: 'Excel, Power BI & reporting' },
 ]
 return (
 <div>
 {/* HERO SECTION */}
 <section className="bg-gradient-to-br from-blue-600
 to-blue-800 text-white py-24 px-8
 text-center">
 <h1 className="text-5xl font-bold mb-4">
 Build Skills. Build Your Future.
 </h1>
 <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
 We take individuals with zero experience and equip
 them with in-demand professional skills.
 </p>
 <div className="flex gap-4 justify-center">
 <Link to="/signup"
 className="bg-white text-blue-600 px-8 py-3
 rounded-full font-bold
 hover:bg-blue-50 transition">
 Apply Now
 </Link>
 <Link to="/about"
 className="border-2 border-white text-white
 px-8 py-3 rounded-full font-bold
 hover:bg-white hover:text-blue-600
 transition">
 Learn More
 </Link>
 </div>
 </section>
 {/* SKILLS / SERVICES SECTION */}
 <section className="py-16 px-8 bg-gray-50">
 <h2 className="text-3xl font-bold text-center
 text-gray-800 mb-2">
 Our Programs
 </h2>
 <p className="text-center text-gray-500 mb-10">
 Choose from a range of skill-based programs
 </p>
 <div className="grid grid-cols-1 md:grid-cols-2
 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
 {skills.map((skill, i) => (
 <div key={i}
 className="bg-white p-6 rounded-xl shadow-sm
 border border-gray-100
 hover:shadow-md transition">
 <div className="w-12 h-12 bg-blue-100
 rounded-lg mb-4"></div>
 <h3 className="font-bold text-gray-800
 text-lg mb-2">
 {skill.title}
 </h3>
 <p className="text-gray-500 text-sm">
 {skill.desc}
 </p>
 </div>
 ))}
 </div>
 </section>
 {/* CTA BANNER */}
 <section className="bg-blue-600 text-white
 py-16 px-8 text-center">
 <h2 className="text-3xl font-bold mb-4">
 Ready to Start Your Journey?
 </h2>
 <p className="mb-8 text-blue-100">
 Join hundreds of graduates who transformed
 their careers with us.
 </p>
 <Link to="/signup"
 className="bg-white text-blue-600 px-10 py-4
 rounded-full font-bold text-lg
 hover:bg-blue-50 transition">
 Sign Up Today
 </Link>
 </section>
 </div>
 )
}