function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="border-t border-white/10 pt-16">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <div className="mt-5 grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-end">
            <div>
              <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Let's build something useful.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
                I'm open to discussing software development, backend
                engineering, projects, and new opportunities.
              </p>
            </div>

            <div className="md:text-right">
              <a
                href="mailto:shubhamkumar.it27@gmail.com"
                className="text-lg font-medium text-cyan-400 transition hover:text-cyan-300"
              >
                shubhamkumar.it27@gmail.com
              </a>

              <div className="mt-5 flex gap-5 md:justify-end">
                <a
                  href="https://github.com/skjha1808"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/skjha1808/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  LinkedIn
                </a>

                <a
                  href="https://leetcode.com/u/skjha1808/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  LeetCode
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact