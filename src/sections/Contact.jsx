function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">

        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Contact
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Let's connect.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          I'm always open to discussing software development,
          projects, and new opportunities.
        </p>

        <a
          href="mailto:shubhamkumar.it27@gmail.com"
          className="mt-8 inline-block text-lg font-medium text-cyan-400 transition hover:text-cyan-300"
        >
          shubhamkumar.it27@gmail.com
        </a>

        <div className="mt-8 flex justify-center gap-6 text-sm text-gray-400">
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

export default Contact