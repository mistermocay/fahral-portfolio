import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
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
      <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Buka sumber ${project.title} di tab baru`}>
        <div className="project-visual" style={{ backgroundColor: project.accent }}>
          <motion.img
            src={project.image}
            alt=""
            loading="lazy"
            decoding="async"
            whileHover={reduceMotion ? undefined : { scale: 1.055 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          />
          <span className="project-number">{project.number} / SELECTED WORK</span>
          <span className="project-open" aria-hidden="true"><ArrowUpRight size={18} /></span>
        </div>
        <div className="project-gallery" aria-label={`Additional artwork for ${project.title}`}>
          <div className="project-gallery-item">
            <ProjectArtwork project={project} />
          </div>
          {project.gallery?.map((image, imageIndex) => (
            <div className="project-gallery-item" key={image}>
              <img src={image} alt={`${project.title} additional view ${imageIndex + 1}`} loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
        <div className="project-info">
          <div className="project-meta"><span>{project.category}</span><span>{project.year}</span></div>
          <h3 id={`project-title-${project.id}`}>{project.title} <ArrowUpRight className="inline-arrow" size={16} aria-hidden="true" /></h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <p className="project-description">{project.description}</p>
          <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        </div>
      </a>
    </motion.article>
  )
}
