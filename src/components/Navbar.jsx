import { Menu, X } from "lucide-react"
import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", link: "/" },
    { name: "History", link: "/our-story" },
    { name: "Family Tree", link: "/family-tree" },
    { name: "Eulogy", link: "/eulogy" },
    { name: "Contact", link: "/contact" },
  ]

  return (
    <nav className="bg-linear-to-r from-amber-900 via-amber-800 to-amber-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
            Ajaiyeoba Family
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="hover:text-yellow-300 transition"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
   {isOpen && (
  <div className="absolute top-16 left-0 w-full md:hidden bg-amber-800 border-t border-amber-700 shadow-lg">
    <div className="flex flex-col space-y-2 px-4 py-4">
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.link}
          className="py-2 text-white hover:text-yellow-300"
          onClick={() => setIsOpen(false)}
        >
          {item.name}
        </a>
      ))}
    </div>
  </div>
)}
    </nav>
  )
}

export default Navbar
