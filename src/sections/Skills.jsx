import skills from '../data/skills'

function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Skills
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Technologies I work with.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-6"
            >
              <h3 className="text-lg font-semibold text-white">
                {skillGroup.category}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Skills