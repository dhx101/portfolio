interface WorkProps {
	workplace: {
		position: string;
		company: string;
		img: string;
		miniDescription: string;
		funciones?: string[];
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
					<h3>{workplace.company}</h3>
					<img
						src={workplace.img}
						alt={workplace.company}
					/>
				</div>
			</div>

			<p>{workplace.miniDescription}</p>
			<div>
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
