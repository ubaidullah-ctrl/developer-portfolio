import { Link, useParams } from 'react-router-dom';
import ProjectPreview from '../components/ProjectPreview';
import { projects } from '../data/portfolioData';

function LabelList({ title, label, items }) {
	return (
		<section className="case-section">
			<p className="case-label">{label}</p>
			<h2>{title}</h2>
			<ul className="evidence-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>
		</section>
	);
}

export default function CaseStudy() {
	const { slug, id } = useParams();
	const requestedId = slug || id;
	const project = projects.find((item) => item.slug === requestedId || item.legacyIds?.includes(requestedId));

	if (!project) {
		return <main id="main-content" className="shell not-found"><p className="eyebrow">404</p><h1>Case study not found</h1><Link className="button primary-button" to="/#work">Return to selected work</Link></main>;
	}

	return (
		<main id="main-content" className="case-study">
			<header className="case-hero shell">
				<Link className="back-link" to="/#work">← Selected work</Link>
				<p className="eyebrow">{project.category}</p>
				<h1>{project.title}</h1>
				<p className="case-intro">{project.overview}</p>
				<ul className="tag-list">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
				<div className="case-actions">
					{project.source && <a className="button secondary-button" href={project.source} target="_blank" rel="noreferrer">View Source Code <span aria-hidden="true">↗</span></a>}
				</div>
			</header>
			<div className="shell case-media"><ProjectPreview project={project} /></div>
			<div className="shell case-layout">
				<aside className="case-aside">
					<div><span>Project</span><strong>{project.title}</strong></div>
					<div><span>Category</span><strong>{project.category}</strong></div>
					<div><span>Contribution</span><strong>{project.contribution}</strong></div>
				</aside>
				<div className="case-content">
					<section className="case-section two-column-copy"><div><p className="case-label">Context</p><h2>Problem</h2><p>{project.problem}</p></div><div><p className="case-label">Audience</p><h2>Users</h2><p>{project.users}</p></div></section>
					<LabelList label="Implemented" title="Implemented features" items={project.implemented} />
					<section className="case-section"><p className="case-label">System design</p><h2>Architecture</h2><ul className="architecture-list">{project.architecture.map((item, index) => <li key={item}><span>0{index + 1}</span><p>{item}</p></li>)}</ul></section>
					<section className="case-section"><p className="case-label">Key workflows</p><h2>How the product works</h2><div className="flow-grid">{project.flows.map((flow) => <article key={flow.title}><h3>{flow.title}</h3><p>{flow.text}</p></article>)}</div></section>
					<LabelList label="Engineering" title="Important technical decisions" items={project.decisions} />
					<LabelList label="Delivery" title="Challenges" items={project.challenges} />
					<section className="case-section"><p className="case-label">Quality</p><h2>Validation and testing</h2><p>{project.testing}</p></section>
					<LabelList label="Current limitation" title="Current limitations" items={project.limitations} />
					<LabelList label="Future improvement" title="Possible production improvements" items={project.future} />
				</div>
			</div>
			<nav className="shell next-project" aria-label="More projects"><span>Continue exploring</span><Link to="/#work">View all selected work →</Link></nav>
		</main>
	);
}
