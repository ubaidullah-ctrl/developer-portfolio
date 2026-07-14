import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

const renderHome = () => render(<BrowserRouter><Home /></BrowserRouter>);

test('presents the full-stack positioning and selected work', () => {
	renderHome();
	expect(screen.getByRole('heading', { level: 1, name: /Full-Stack Developer Building Reliable Web Products/i })).toBeInTheDocument();
	expect(screen.getByRole('heading', { name: 'Adaptive AI Learning Companion' })).toBeInTheDocument();
	expect(screen.getByRole('heading', { name: 'AI-Assisted Job Board' })).toBeInTheDocument();
});

test('does not promote unverified live demos', () => {
	renderHome();
	expect(screen.queryByRole('link', { name: /Live Demo/i })).not.toBeInTheDocument();
});
