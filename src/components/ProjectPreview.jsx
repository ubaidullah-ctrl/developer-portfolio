export default function ProjectPreview({ project }) {
	if (!project.image) return null;

	return <img className="project-image" src={project.image} alt={project.imageAlt} loading="lazy" width="1280" height="853" />;
}
