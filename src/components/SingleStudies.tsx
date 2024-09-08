interface StudiesProp {
	studies: {
		degree?: string;
		institution?: string;
		img?: string;
		time?: string;
		description1?: string;
		description2?: string;
		description3?: string;
	};
	style?: React.CSSProperties;
}

const SingleStudies: React.FC<StudiesProp> = ({ studies, style }) => {
	return (
		<li
			className="studies__item"
			style={style}>
			<div className="studies__item__degree">
				<h2>{studies.degree}</h2>
				<p>{studies.time}</p>
			</div>
			<img
				src={studies.img}
				alt={studies.institution}
			/>
			<div className="studies__item__description">
				<p>{studies.description1}</p>
				<p>{studies.description2}</p>
				<p>{studies.description3}</p>
			</div>
		</li>
	);
};

export default SingleStudies;
