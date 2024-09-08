import Header from "../components/Header";
import SingleStudies from "../components/SingleStudies";
import json from "../jsons/studies.json";

const Estudios = () => {
	return (
		<>
			<Header title="Estudios Académicos" />
			<ul className="studies">
				{json.map((item, index) => (
					<SingleStudies
						key={index}
						studies={item}
						style={{ animationDelay: `${index * 0.1}s` }}
					/>
				))}
			</ul>
		</>
	);
};

export default Estudios;
