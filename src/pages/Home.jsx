import ProjectCard from '../components/ProjectCard';
import { capabilities, experience, profileLinks, projects } from '../data/portfolioData';

export default function Home() {
	return (
		<main id="main-content">
			<section className="hero shell" aria-labelledby="hero-title">
				<div className="hero-copy">
					<p className="eyebrow"><span className="status-dot" aria-hidden="true" /> Full-Stack Developer</p>
					<h1 id="hero-title">Full-Stack Developer Building Reliable Web Products and <span>AI-Enabled Applications</span></h1>
					<p className="hero-lede">I develop end-to-end web applications using React, TypeScript, Next.js, Python, FastAPI, and PostgreSQL. My work spans product interfaces, backend APIs, database workflows, AI-assisted features, and retrieval-augmented applications.</p>
					<div className="hero-actions">
						<a className="button primary-button" href="#work">View Selected Work</a>
						<a className="button secondary-button" href={profileLinks.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
						<a className="button secondary-button" href="#contact">Contact</a>
					</div>
					<p className="availability">Open to software engineering and product-development opportunities.</p>
				</div>
				<aside className="hero-panel" aria-label="Core engineering areas">
					<p className="panel-label">Product engineering across the stack</p>
					<div className="stack-row"><span>01</span><div><strong>Product interfaces</strong><small>React · TypeScript · Next.js</small></div></div>
					<div className="stack-row"><span>02</span><div><strong>Backend systems</strong><small>Python · FastAPI · REST APIs</small></div></div>
					<div className="stack-row"><span>03</span><div><strong>Data & AI workflows</strong><small>PostgreSQL · pgvector · RAG</small></div></div>
				</aside>
			</section>

			<section id="work" className="section shell" aria-labelledby="work-title">
				<div className="section-heading">
					<div><p className="eyebrow">Selected work</p><h2 id="work-title">Products built around real workflows</h2></div>
					<p>Four projects covering full-stack product delivery, professional collaboration, commerce, and practical AI integration.</p>
				</div>
				<div className="project-list">
					{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
				</div>
			</section>

			<section id="experience" className="section section-tint" aria-labelledby="experience-title">
				<div className="shell">
					<div className="section-heading">
						<div><p className="eyebrow">Professional experience</p><h2 id="experience-title">Shipping product features across interface and API boundaries</h2></div>
					</div>
					<div className="timeline">
						{experience.map((item) => (
							<article className="experience-card" key={item.company}>
								<div className="experience-meta"><span>{item.period}</span><h3>{item.role}</h3><p>{item.company}</p></div>
								<div><ul className="evidence-list">{item.points.map((point) => <li key={point}>{point}</li>)}</ul><ul className="tag-list">{item.stack.map((technology) => <li key={technology}>{technology}</li>)}</ul></div>
							</article>
						))}
					</div>
				</div>
			</section>

			<section id="capabilities" className="section shell" aria-labelledby="capabilities-title">
				<div className="section-heading compact-heading">
					<div><p className="eyebrow">Technical capabilities</p><h2 id="capabilities-title">A focused stack for end-to-end delivery</h2></div>
				</div>
				<div className="capability-grid">
					{capabilities.map((group) => <article key={group.title}><h3>{group.title}</h3><p>{group.items.join(' · ')}</p></article>)}
				</div>
			</section>

			<section id="about" className="section section-tint" aria-labelledby="about-title">
				<div className="shell about-grid">
					<div><p className="eyebrow">About</p><h2 id="about-title">Building complete products, not isolated screens</h2></div>
					<div className="about-copy">
						<p>I am a full-stack developer focused on building reliable web products and practical AI-enabled applications.</p>
						<p>My work covers modern React and TypeScript interfaces, Python and FastAPI services, PostgreSQL-backed data flows, REST APIs, and retrieval-augmented applications.</p>
						<p>I have developed an AI-assisted job platform, an adaptive learning companion for uploaded documents, e-commerce workflows, and AI-powered content tools. I enjoy turning product requirements into maintainable interfaces, backend services, database structures, and complete user workflows.</p>
					</div>
				</div>
			</section>

			<section id="contact" className="section shell contact-section" aria-labelledby="contact-title">
				<p className="eyebrow">Contact</p>
				<h2 id="contact-title">Let’s Build Useful Software</h2>
				<p>I am open to software-development, full-stack, frontend, backend, and AI-application opportunities.</p>
				<div className="contact-links">
					<a href={profileLinks.email}>Email <span aria-hidden="true">→</span></a>
					<a href={profileLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
					<a href={profileLinks.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
				</div>
			</section>
		</main>
	);
}
