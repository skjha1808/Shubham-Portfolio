function ProjectCard({ project, index }) {
  const isReversed = index % 2 === 1

  return (
    <article
      className={`grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] md:grid-cols-2 ${
        isReversed ? 'md:[&>div:first-child]:order-2' : ''
      }`}
    >
      {/* Project Image / Placeholder */}
      <div className="flex min-h-[280px] items-center justify-center bg-white/[0.02] p-4">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            className="h-full max-h-[360px] w-full rounded-xl object-cover"
          />
        ) : (
          <div className="flex h-full min-h-[250px] w-full items-center justify-center rounded-xl border border-dashed border-white/10 bg-black/30">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
                Project Preview
              </p>

              <p className="mt-2 text-sm text-gray-600">
                Screenshot coming soon
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Project Information */}
      <div className="flex flex-col justify-center p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              Project {String(index + 1).padStart(2, '0')}
            </p>

            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
              {project.title}
            </h3>
          </div>
        </div>

        <p className="mt-4 text-base leading-7 text-gray-400">
          {project.description}
        </p>

        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-5">
            <p className="mb-2 text-sm font-medium text-gray-500">
              Key Highlights
            </p>

            <ul className="space-y-1.5">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-3 text-sm leading-6 text-gray-400"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-5">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
          >
            GitHub →
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-gray-400 transition hover:text-white"
          >
            Live Demo →
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard