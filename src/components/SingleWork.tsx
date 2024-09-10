interface WorkProps {
	workplace: {
		position: string;
		company: string;
		img: string;
		miniDescription: string;
		funciones?: string[];
		link?: string;
	};
	style?: React.CSSProperties; // Add this line to accept inline styles
}

const SingleWork: React.FC<WorkProps> = ({ workplace, style }) => {
	return (
		<li
			className="exp__list__item"
			style={style}>
			<div className="exp__list__item__important">
				<h2>{workplace.position}</h2>
				<div>
					<a href={workplace.link} target="_blank">
						<img
							src={workplace.img}
							alt={workplace.company}
						/>
					</a>
					<a href={workplace.link} target="_blank">{workplace.company}</a>
				</div>
			</div>

			<div className="exp__list__item__description">
				<p>{workplace.miniDescription}</p>
				<p>Las funciones que realizaba dentro de la empresa eran las siguientes:</p>
				<ul>
					{workplace.funciones?.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</div>
		</li>
	);
};

export default SingleWork;
