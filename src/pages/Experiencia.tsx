import Header from "../components/Header";
import SingleWork from "../components/SingleWork";
import json from "../jsons/workplace.json";
const Experiencia = () => {
	const workArray = json;
	return (
		<>
			<Header title="Experiencia Laboral" />
			<ul className="exp__list">
				{workArray.map((item, index) => (
					<SingleWork
						key={index}
						workplace={item}
						style={{ animationDelay: `${index * 0.1}s` }}
					/>
				))}
			</ul>
		</>
	);
};

export default Experiencia;
