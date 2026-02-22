import { Link } from 'react-router-dom'
export default function Navbar() {
 return (
 <nav className="bg-white shadow-md px-8 py-4 flex
 justify-between items-center">
 <Link to="/" className="text-2xl font-bold text-blue-600">
 SkillsUp
 </Link>
 <div className="flex gap-6 items-center">
 <Link to="/"
 className="text-gray-600 hover:text-blue-600
 font-medium transition">
 Home
 </Link>
 <Link to="/about"
 className="text-gray-600 hover:text-blue-600
 font-medium transition">
 About Us
 </Link>
 <Link to="/signup"
 className="bg-blue-600 text-white px-5 py-2
 rounded-full font-medium
 hover:bg-blue-700 transition">
 Sign Up
 </Link>
 </div>
 </nav>
 )
}
