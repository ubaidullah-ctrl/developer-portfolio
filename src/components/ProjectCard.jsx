import { Link } from 'react-router-dom';
import ProjectPreview from './ProjectPreview';

export default function ProjectCard({ project, index }) {
	return (
		<article className={`project-card project-card-${index + 1}`}>
			<div className="project-visual">
				<ProjectPreview project={project} />
				<span className="project-number" aria-hidden="true">0{index + 1}</span>
			</div>
			<div className="project-copy">
				<div className="eyebrow-row"><span>{project.category}</span><span>{project.accent}</span></div>
				<h3>{project.title}</h3>
				<p>{project.summary}</p>
				<p className="contribution"><strong>What I did:</strong> {project.contribution}</p>
				<ul className="tag-list" aria-label={`${project.title} technologies`}>
					{project.technologies.slice(0, 6).map((technology) => <li key={technology}>{technology}</li>)}
				</ul>
				<div className="card-actions">
					<Link className="text-link" to={`/work/${project.slug}`}>View case study <span aria-hidden="true">→</span></Link>
					{project.source && <a className="text-link secondary-link" href={project.source} target="_blank" rel="noreferrer">Source code <span className="sr-only">for {project.title}</span> <span aria-hidden="true">↗</span></a>}
				</div>
			</div>
		</article>
	);
}
