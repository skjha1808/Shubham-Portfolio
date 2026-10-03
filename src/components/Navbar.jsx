import { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-white"
        >
          Shubham<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-300 transition-colors duration-200 hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-300 transition hover:border-cyan-400/40 hover:text-cyan-400 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="text-xl">
            {isMenuOpen ? '✕' : '☰'}
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-sm text-gray-300 transition-colors duration-200 hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar