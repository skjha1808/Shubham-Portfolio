function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute right-[12%] top-1/2 -z-10 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[120px]"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        
        {/* Left Content */}
        <div>
          <p className="mb-5 text-lg font-medium text-cyan-400">
            Hi, I'm
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Shubham Kumar
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-gray-300 sm:text-3xl">
            MERN-Stack Developer
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
            I build full-stack web applications with a focus on
            backend development, practical problem-solving, and
            clean, maintainable code.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-400 px-7 py-3.5 text-center font-semibold text-black transition duration-200 hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/15 px-7 py-3.5 text-center font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-white/5"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Developer Card */}
        <div className="hidden justify-center lg:flex">
          <div className="relative h-[420px] w-[380px]">
            
            {/* Outer frame */}
            <div className="absolute inset-0 rounded-[2rem] border border-cyan-400/30 bg-cyan-400/[0.02]" />

            {/* Inner frame */}
            <div className="absolute inset-6 flex items-center justify-center rounded-[1.5rem] border border-white/10 bg-white/[0.015]">
              <div className="text-center">
                <p className="text-sm font-medium uppercase tracking-[0.4em] text-cyan-400">
                  Developer
                </p>

                <p className="mt-7 text-7xl font-bold tracking-tight text-white">
                  SK
                </p>

                <p className="mt-6 text-sm text-gray-500">
                  MERN · Backend · DSA
                </p>
              </div>
            </div>

            {/* Decorative dots */}
            <span className="absolute -right-2 top-12 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.7)]" />

            <span className="absolute -bottom-2 left-1/4 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.7)]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero