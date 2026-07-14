import { profileLinks } from '../data/portfolioData';

export default function SiteFooter() {
	return (
		<footer className="site-footer">
			<div className="shell footer-inner">
				<p>© {new Date().getFullYear()} Ubaid Ullah <span>Designed and built with intent.</span></p>
				<div className="footer-links">
					<a href={profileLinks.github} target="_blank" rel="noreferrer">GitHub</a>
					<a href={profileLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
					<a href={profileLinks.email}>Email</a>
				</div>
			</div>
		</footer>
	);
}
