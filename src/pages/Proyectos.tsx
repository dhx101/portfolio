import json from "../jsons/projects.json";
import SingleProject from "../components/SingleProject";
import Header from "../components/Header";
import { Helmet } from "react-helmet";

const Project = () => {
	// console.log(json.proyecto);
	const proyectoArray = json;
	return (
		<div className="projects">
			<Helmet>
				<title>Proyectos</title>
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
					content="Proyectos"
				/>
				<meta
					name="description"
					content="Todos los proyectos que he realziado tanto personales como aquellos en los que trabajé dentro de empresas "
				/>
			</Helmet>
			<Header title="Proyectos" />
			<div className="projects__elements">
				<div>
					<h2>Ultimos Proyectos</h2>
					<p>Visitas las ultimas web y proyectos en las que he trabajado</p>
				</div>
				<ul className="projects__items">
					{proyectoArray.map((item, index) => (
						<SingleProject
							key={index}
							project={item}
							style={{ animationDelay: `${index * 0.1}s` }}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Project;
