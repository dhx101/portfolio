interface ProjectProps {
	project: {
		name: string;
		img: string;
		alt: string;
		miniDescription: string;
		stack?: string[];
		link?: string;
	};
	style?: React.CSSProperties; // Add this line to accept inline styles
}

const SingleProject: React.FC<ProjectProps> = ({ project, style }) => {
	return (
		<li
			className="projects__items__single"
			style={style}>
			<img
				src={`projects/${project.img}`}
				alt={project.alt}
			/>
			<div>
				<h3>{project.name}</h3>
				<p>{project.miniDescription}</p>
				<div>
					{project.stack && project.stack.length > 0 ? (
						<ul>
							{project.stack?.map((item, index) => (
								<li key={index}>
									<img
										src={`stack/${item}.png`}
										alt={item}
									/>
								</li>
							))}
						</ul>
					) : (
						<p>No se ha especificado el Stack utilizado</p>
					)}
					{project.link ? (
						<a href={project.link} target="_blank">
							<img
								src="web.svg"
								alt={`Visitar ${project.name}`}
							/>
						</a>
					) : (
						<p>No disponible</p>
					)}
				</div>
			</div>
		</li>
	);
};

export default SingleProject;
