function ProjectCard({ project }) {
  return (
    <article className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
      <h3 className="text-2xl font-semibold text-white">
        {project.title}
      </h3>

      <p className="mt-4 leading-7 text-gray-400">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-7 flex gap-5">
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
          className="text-sm font-medium text-gray-300 transition hover:text-white"
        >
          Live Demo →
        </a>
      </div>
    </article>
  )
}

export default ProjectCard