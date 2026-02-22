import { Link } from 'react-router-dom'
export default function Footer() {
 return (
 <footer className="bg-gray-800 text-gray-400
 py-8 px-8 text-center">
 <p className="mb-2 text-white font-semibold">
 SkillsUp Training Centre
 </p>
 <div className="flex justify-center gap-6 mb-4 text-sm">
 <Link to="/" className="hover:text-white transition">
 Home
 </Link>
 <Link to="/about" className="hover:text-white transition">
 About
 </Link>
 <Link to="/signup" className="hover:text-white transition">
 Sign Up
 </Link>
 </div>
 <p className="text-xs">
 © 2025 SkillsUp. All rights reserved.
 </p>
 </footer>
 )
}