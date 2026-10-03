import skills from '../data/skills'

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Skills
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Technologies I work with.
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
          A collection of technologies and computer science fundamentals
          I use to build and understand full-stack applications.
        </p>

        <div className="mt-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="border-b border-white/10 py-5 first:border-t"
            >
              <div className="grid gap-4 md:grid-cols-[260px_1fr] md:items-center">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />

                  <h3 className="text-base font-semibold text-white">
                    {skillGroup.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-sm text-gray-300 transition duration-200 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05] hover:text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills