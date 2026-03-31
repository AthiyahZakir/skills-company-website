import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="bg-white border-b border-gray-100 px-8 py-4 flex justify-between items-center sticky top-0 z-50 shadow-sm">
      
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-2">
        <span className="text-2xl font-black text-gray-900 tracking-tight">
          TEJA<span className="text-red-600">.</span>
        </span>
        <span className="text-xs font-black tracking-widest uppercase text-red-600 mt-1">
          SKILLS
        </span>
      </Link>

      {/* NAV LINKS */}
      <div className="flex gap-2 items-center">
        <Link to="/"
          className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
            pathname === '/' ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
          }`}>
          Home
        </Link>
        <Link to="/about"
          className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
            pathname === '/about' ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
          }`}>
          About Us
        </Link>
        <Link to="/signup"
          className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-red-700 transition shadow-sm ml-2">
          Apply Now
        </Link>
      </div>

    </nav>
  )
}