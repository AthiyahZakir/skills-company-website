import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 text-gray-400">

      {/* TOP */}
      <div className="max-w-6xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl font-black text-white tracking-tight">
              TEJA<span className="text-red-600">.</span>
            </span>
            <span className="text-xs font-black tracking-widest uppercase text-red-600">
              SKILLS
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-5 text-gray-500">
            Your trusted partner in building in-demand skills. We turn beginners into confident professionals.
          </p>
          <div className="flex gap-3">
            {[['📘','Facebook'],['📷','Instagram'],['💼','LinkedIn'],['🐦','Twitter']].map(([icon, label]) => (
              <a key={label} href="#" aria-label={label}
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-red-600 flex items-center justify-center text-sm transition">
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-xs font-black tracking-widest uppercase text-white mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {[['Home','/'],['About Us','/about'],['Apply Now','/signup']].map(([label, to]) => (
              <li key={label}>
                <Link to={to} className="text-sm text-gray-500 hover:text-white transition font-medium">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* PROGRAMS */}
        <div>
          <h4 className="text-xs font-black tracking-widest uppercase text-white mb-5">Programs</h4>
          <ul className="space-y-3">
            {['Digital Marketing','Graphic Design','Web Development','Data Analysis'].map(p => (
              <li key={p}>
                <a href="#" className="text-sm text-gray-500 hover:text-white transition font-medium">{p}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-xs font-black tracking-widest uppercase text-white mb-5">Contact Us</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li className="flex items-center gap-2">📞 +60 12-345 6789</li>
            <li className="flex items-center gap-2">✉️ info@tejaskills.com</li>
            <li className="flex items-center gap-2">📍 Kuala Lumpur, Malaysia</li>
          </ul>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-800" />

      {/* BOTTOM */}
      <div className="max-w-6xl mx-auto px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-600">
          © {currentYear} Teja Skills. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-gray-600">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Cookie Policy</a>
        </div>
      </div>

    </footer>
  )
}