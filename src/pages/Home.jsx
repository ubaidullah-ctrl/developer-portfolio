import ProjectCard from '../components/ProjectCard';
import { capabilities, experience, profileLinks, projects } from '../data/portfolioData';
import profilePhoto from '../images/profile.jpeg';

export default function Home() {
	return (
		<main id="main-content">
			<section className="hero shell" aria-labelledby="hero-title">
				<div className="hero-copy">
					<p className="eyebrow"><span>Based in Europe</span><span>Available for product teams</span></p>
					<h1 id="hero-title">I build the <em>whole product</em>—from interface to API.</h1>
					<p className="hero-lede">Full-stack developer working across React, TypeScript, Next.js, Python, FastAPI, and PostgreSQL—plus practical AI features that stay connected to real product workflows.</p>
					<div className="hero-actions">
						<a className="button primary-button" href="#work">Explore selected work <span aria-hidden="true">↓</span></a>
						<a className="button secondary-button" href={profileLinks.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
					</div>
					<div className="hero-proof" aria-label="Portfolio summary">
						<div><strong>04</strong><span>Selected case studies</span></div>
						<div><strong>02</strong><span>Product roles</span></div>
						<div><strong>FE · BE · AI</strong><span>Across the stack</span></div>
					</div>
				</div>
				<aside className="portrait-frame" aria-label="Portrait of Ubaid Ullah">
					<div className="portrait-index">PORTRAIT / 2026</div>
					<img src={profilePhoto} alt="Ubaid Ullah outdoors" width="900" height="900" />
					<p><span aria-hidden="true">↳</span> Turning requirements into maintainable, shipped workflows.</p>
				</aside>
			</section>

			<div className="signal-strip" aria-hidden="true">
				<div className="shell"><span>Product interfaces</span><i>◆</i><span>Backend APIs</span><i>◆</i><span>Data workflows</span><i>◆</i><span>AI integration</span></div>
			</div>

			<section id="work" className="section shell" aria-labelledby="work-title">
				<div className="section-heading">
					<div><p className="eyebrow">01 / Selected work</p><h2 id="work-title">Systems, not just screens.</h2></div>
					<p>Four projects selected for the engineering decisions behind them: document processing, recommendation workflows, commerce infrastructure, and API integration.</p>
				</div>
				<div className="project-list">
					{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
				</div>
			</section>

			<section id="experience" className="section dark-section" aria-labelledby="experience-title">
				<div className="shell">
					<div className="section-heading dark-heading">
						<div><p className="eyebrow">02 / Experience</p><h2 id="experience-title">Product work in real codebases.</h2></div>
						<p>From interface states to validated API boundaries, I work where product behaviour crosses the stack.</p>
					</div>
					<div className="timeline">
						{experience.map((item, index) => (
							<article className="experience-card" key={item.company}>
								<div className="experience-index">0{index + 1}</div>
								<div className="experience-meta"><span>{item.period}</span><h3>{item.role}</h3><p>{item.company}</p></div>
								<div><ul className="evidence-list">{item.points.map((point) => <li key={point}>{point}</li>)}</ul><ul className="tag-list">{item.stack.map((technology) => <li key={technology}>{technology}</li>)}</ul></div>
							</article>
						))}
					</div>
				</div>
			</section>

			<section id="capabilities" className="section shell" aria-labelledby="capabilities-title">
				<div className="section-heading">
					<div><p className="eyebrow">03 / Toolkit</p><h2 id="capabilities-title">A focused stack for end-to-end delivery.</h2></div>
					<p>I choose familiar, maintainable tools and use them across complete workflows instead of collecting technology names.</p>
				</div>
				<div className="capability-grid">
					{capabilities.map((group, index) => <article key={group.title}><span>0{index + 1}</span><h3>{group.title}</h3><p>{group.items.join(' · ')}</p></article>)}
				</div>
			</section>

			<section id="about" className="section about-section" aria-labelledby="about-title">
				<div className="shell about-grid">
					<div><p className="eyebrow">04 / About</p><h2 id="about-title">Building complete products, not isolated screens.</h2></div>
					<div className="about-copy">
						<p className="about-lead">I am a full-stack developer focused on reliable web products and practical AI-enabled applications.</p>
						<p>My work covers React and TypeScript interfaces, Python and FastAPI services, PostgreSQL-backed data flows, REST APIs, embeddings, vector search, and semantic source verification.</p>
						<p>I enjoy turning product requirements into maintainable interfaces, backend services, database structures, and complete user workflows.</p>
					</div>
				</div>
			</section>

			<section id="contact" className="contact-section" aria-labelledby="contact-title">
				<div className="shell contact-inner">
					<p className="eyebrow">05 / Contact</p>
					<h2 id="contact-title">Have a useful product to build?</h2>
					<p>I am open to full-stack, frontend, backend, and AI-application opportunities.</p>
					<div className="contact-links">
						<a href={profileLinks.email}>Email me <span aria-hidden="true">→</span></a>
						<a href={profileLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
						<a href={profileLinks.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
					</div>
				</div>
			</section>
		</main>
	);
}
