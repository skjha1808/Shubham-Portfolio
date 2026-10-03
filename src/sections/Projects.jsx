import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Projects
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Things I've built.
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-400">
          A selection of projects where I have applied full-stack development,
          backend engineering, and problem-solving skills.
        </p>

        <div className="mt-12 grid gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects