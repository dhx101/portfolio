const SingleProject: React.FC<{
	project: {
		name: string;
		img: string;
		alt: string;
		miniDescription: string;
		stack?: string[];
		link?: string;
	};
}> = ({ project }) => {
	console.log(project);

	return (
		<li className="projects__items__single">
			<h3>{project.name}</h3>
			<img
				src={`projects/${project.img}`}
				alt={project.alt}
			/>
			<p>{project.miniDescription}</p>

			{project.stack && project.stack.length > 0 ? (
				<ul>
					{project.stack.map((item, index) => (
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
			{project.link ? <a href={project.link}>Visitar la Web</a> : <p>No esta desplegado</p>}
		</li>
	);
};

export default SingleProject;
