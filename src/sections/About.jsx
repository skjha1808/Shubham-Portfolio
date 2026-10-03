function About() {
  const focusAreas = [
    'C++',
    'JavaScript',
    'React',
    'Node.js',
    'MongoDB',
    'REST APIs',
  ]

  const interests = [
    'Backend Development',
    'API Design',
    'Database Systems',
    'Software Engineering',
  ]

  return (
    <section id="about" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          About Me
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Building practical software with a backend mindset.
        </h2>

        <div className="mt-8 max-w-4xl">
          <p className="text-lg leading-8 text-gray-400">
            Hi, I'm Shubham Kumar, a final-year Information Technology
            student and MERN-stack developer focused on building practical
            web applications and solving real-world problems through
            software.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {focusAreas.map((item) => (
              <span
                key={item}
                className="rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-300"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-7 text-lg leading-8 text-gray-400">
            I enjoy working across the full stack while paying particular
            attention to backend development, database design, and
            maintainable code. My problem-solving practice in Data
            Structures and Algorithms also helps me approach development
            with a focus on efficiency and reliability.
          </p>

          <div className="mt-12">
            <h3 className="border-l-4 border-cyan-400 pl-4 text-2xl font-semibold text-white">
              Professional Interests
            </h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-gray-300 transition duration-200 hover:border-cyan-400/30 hover:text-cyan-300"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About