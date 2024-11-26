import Header from "../components/Header";
import SingleWork from "../components/SingleWork";
import workArray from "../jsons/workplace.json";
import stackArray from "../jsons/stack.json";
import SingleStack from "../components/SingleStack";
import { Helmet } from "react-helmet";

const Experiencia = () => {
	return (
		<div className="exp">
			<Helmet>
				<title>Experiencias Profesionales</title>
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
					content="Experiencias"
				/>
				<meta
					name="description"
					content="Mis experiencias profesionales junto al Stack que sé utilizar"
				/>
			</Helmet>
			<Header title="Experiencia" />
			<p>Mis conocimientos</p>
			<ul className="exp__stack">
				{stackArray.map((item, index) => (
					<SingleStack
						key={index}
						stack={item}
						style={{ animationDelay: `${index * 0.1}s` }}
					/>
				))}
			</ul>
			<p>Empresas donde he trabajado</p>
			<ul className="exp__list">
				{workArray.map((item, index) => (
					<SingleWork
						key={index}
						workplace={item}
						style={{ animationDelay: `${index * 0.1}s` }}
					/>
				))}
			</ul>
		</div>
	);
};

export default Experiencia;
