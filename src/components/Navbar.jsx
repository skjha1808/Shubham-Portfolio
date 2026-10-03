function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-white"
        >
          Shubham<span className="text-cyan-400">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#about" className="text-sm text-gray-300 transition hover:text-white">
            About
          </a>

          <a href="#skills" className="text-sm text-gray-300 transition hover:text-white">
            Skills
          </a>

          <a href="#projects" className="text-sm text-gray-300 transition hover:text-white">
            Projects
          </a>

          <a href="#achievements" className="text-sm text-gray-300 transition hover:text-white">
            Achievements
          </a>

          <a href="#contact" className="text-sm text-gray-300 transition hover:text-white">
            Contact
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar