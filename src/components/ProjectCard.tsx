import { motion, useReducedMotion } from 'framer-motion'
import type { Project } from '../data/projects'
import ProjectArtwork from './ProjectArtwork'

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.article
      className={`project-card project-card--${index + 1}`}
      aria-labelledby={`project-title-${project.id}`}
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduceMotion ? 0 : 0.7, delay: (index % 3) * 0.08, ease: 'easeOut' }}
    >
      <div className="project-visual" style={{ backgroundColor: project.accent }}>
        <ProjectArtwork project={project} />
        <span className="project-number">{project.number} / SELECTED WORK</span>
      </div>
      <div className="project-info">
        <div className="project-meta"><span>{project.category}</span><span>{project.year}</span></div>
        <h3 id={`project-title-${project.id}`}>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-description">{project.description}</p>
        <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      </div>
    </motion.article>
  )
}
