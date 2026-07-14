import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import './css/App.css';
import CaseStudy from './pages/CaseStudy';
import Home from './pages/Home';

export default function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<SiteHeader />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Home />} />
				<Route path="/about" element={<Home />} />
				<Route path="/contact" element={<Home />} />
				<Route path="/work/:slug" element={<CaseStudy />} />
				<Route path="/projects/single-project/:id" element={<CaseStudy />} />
				<Route path="*" element={<Home />} />
			</Routes>
			<SiteFooter />
		</BrowserRouter>
	);
}
