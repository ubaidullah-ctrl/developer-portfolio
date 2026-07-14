import { Link } from 'react-router-dom';
import ProjectPreview from './ProjectPreview';

export default function ProjectCard({ project, index }) {
	return (
		<article className="project-card">
			<div className="project-visual"><ProjectPreview project={project} /></div>
			<div className="project-copy">
				<div className="eyebrow-row"><span>0{index + 1}</span><span>{project.category}</span></div>
				<h3>{project.title}</h3>
				<p>{project.summary}</p>
				<p className="contribution"><strong>My contribution:</strong> {project.contribution}</p>
				<ul className="tag-list" aria-label={`${project.title} technologies`}>
					{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
				</ul>
				<div className="card-actions">
					<Link className="text-link" to={`/work/${project.slug}`}>View Case Study <span aria-hidden="true">→</span></Link>
					{project.source && <a className="text-link secondary-link" href={project.source} target="_blank" rel="noreferrer">View Source Code <span className="sr-only">for {project.title}</span> <span aria-hidden="true">↗</span></a>}
				</div>
			</div>
		</article>
	);
}
