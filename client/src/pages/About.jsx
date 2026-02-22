export default function About() {
 const stats = [
 { number: '500+', label: 'Graduates' },
 { number: '10+', label: 'Programs' },
 { number: '95%', label: 'Employment Rate' },
 { number: '5+', label: 'Years Experience' },
 ]
 return (
 <div>
 {/* HERO */}
 <section className="bg-gray-800 text-white
 py-20 px-8 text-center">
 <h1 className="text-4xl font-bold mb-4">
 About Us
 </h1>
 <p className="text-gray-300 max-w-xl mx-auto">
 Empowering individuals through skill-based
 education since 2018.
 </p>
 </section>
 {/* MISSION */}
 <section className="py-16 px-8 max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-gray-800 mb-6">
 Our Mission
 </h2>
 <p className="text-gray-600 leading-relaxed text-lg mb-6">
 We believe that everyone deserves access to
 quality skill development. Our programs are
 designed to be practical, affordable, and
 career-focused — turning beginners into
 confident professionals.
 </p>
 <h2 className="text-3xl font-bold text-gray-800 mb-6">
 Our Vision
 </h2>
 <p className="text-gray-600 leading-relaxed text-lg">
 To be the leading skills training institution
 that bridges the gap between untapped potential
 and real-world employment.
 </p>
 </section>
 {/* STATS */}
 <section className="bg-blue-600 text-white py-12 px-8">
 <div className="grid grid-cols-2 md:grid-cols-4
 gap-8 max-w-4xl mx-auto text-center">
 {stats.map((stat, i) => (
 <div key={i}>
 <div className="text-4xl font-bold mb-1">
 {stat.number}
 </div>
 <div className="text-blue-200">{stat.label}</div>
 </div>
 ))}
 </div>
 </section>
 </div>
 )
}
