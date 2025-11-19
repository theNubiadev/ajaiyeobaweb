import { Menu, X } from 'lucide-react'
import { useState } from 'react'

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'History', link: '/our-story' },
    { name: "Family Tree", link: '/family-tree' },
    { name: 'Eulogy', link: '/eulogy' },
    { name: 'Contact', link: '/contact' }
  ]
  return (
    <nav className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl font-bold tracking-wide">Ajaiyeoba Family</h1>
          </div>


          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          <Menu onClick={() => setIsOpen(!isOpen)} />
          {isOpen ? (
            <Menu size={28} />
          ) : (
            <X size={28} />
          )}
        </div>
      </div>


      {isOpen && (
        <div className="md:hidden bg-amber-800 border-t border-amber-700">
          {navItems.map((item) => {
            <a
              key={item.name}
              href={item.link}
              className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              {item.name}
            </a>
          })}
        </div>
      )}




    </nav>
  )
}

export default Navbar