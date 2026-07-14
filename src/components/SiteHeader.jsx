import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const nav = [
	['Work', '/#work'],
	['Experience', '/#experience'],
	['About', '/#about'],
	['Contact', '/#contact'],
];

export default function SiteHeader() {
	const [open, setOpen] = useState(false);
	const location = useLocation();

	useEffect(() => setOpen(false), [location]);

	return (
		<header className="site-header">
			<a className="skip-link" href="#main-content">Skip to content</a>
			<div className="shell header-inner">
				<Link className="brand" to="/" aria-label="Ubaid Ullah, home">
					<span className="brand-mark" aria-hidden="true">UU</span>
					<span>Ubaid Ullah</span>
				</Link>
				<button
					className="menu-button"
					type="button"
					aria-expanded={open}
					aria-controls="primary-navigation"
					onClick={() => setOpen((value) => !value)}
				>
					<span className="sr-only">Toggle navigation</span>
					<span aria-hidden="true">{open ? 'Close' : 'Menu'}</span>
				</button>
				<nav id="primary-navigation" className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
					{nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
				</nav>
			</div>
		</header>
	);
}
