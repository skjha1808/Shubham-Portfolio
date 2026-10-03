function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center px-6 pt-20"
    >
      <div className="mx-auto max-w-4xl text-center">

        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Full-Stack Developer
        </p>

        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
          Hi, I'm Shubham Kumar.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          I build practical web applications using modern technologies
          and enjoy solving real-world problems through software.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <a
            href="#projects"
            className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Download Resume
          </a>

        </div>

        <div className="mt-10 flex justify-center gap-6 text-sm text-gray-400">
          <a
            href="https://github.com/skjha1808"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/skjha1808/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="https://leetcode.com/u/skjha1808/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            LeetCode
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero