export default function ProjectPreview({ project }) {
	if (project.image) {
		return <img className="project-image" src={project.image} alt={project.imageAlt} loading="lazy" width="960" height="600" />;
	}

	if (project.preview === 'jobboard') {
		return (
			<div className="product-preview job-preview" role="img" aria-label="Abstract job discovery interface preview">
				<div className="preview-toolbar"><span /><span /><span /></div>
				<div className="preview-body">
					<div className="preview-filters"><b>Discover</b><i /><i /><i /></div>
					<div className="preview-results"><span>Recommended roles</span><i /><i /><i /></div>
				</div>
			</div>
		);
	}

	return (
		<div className="product-preview architecture-preview" role="img" aria-label="Document retrieval architecture preview">
			<div className="architecture-node">Lecture notes</div>
			<span aria-hidden="true">→</span>
			<div className="architecture-node accent-node">Retrieval</div>
			<span aria-hidden="true">→</span>
			<div className="architecture-node">Grounded answer</div>
		</div>
	);
}
