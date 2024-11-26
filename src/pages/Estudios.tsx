import { Helmet } from "react-helmet";
import Header from "../components/Header";
import SingleStudies from "../components/SingleStudies";
import json from "../jsons/studies.json";

const Estudios = () => {
	return (
		<>
			<Helmet>
				<title>Estudios Académicos</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta
					http-equiv="Content-Type"
					content="text/html;charset=UTF-8"
				/>
				<meta
					http-equiv="X-UA-Compatible"
					content="ie=edge"
				/>
				<meta
					name="keywords"
					content="Estudios"
				/>
				<meta
					name="description"
					content="Mis estudios académicos"
				/>
			</Helmet>
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
