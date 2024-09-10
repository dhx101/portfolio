import json from "../jsons/projects.json";
import SingleProject from "../components/SingleProject";
import Header from "../components/Header";

const Project = () => {
	// console.log(json.proyecto);
	const proyectoArray = json;
	return (
		<div className="projects">
			<Header title="Proyectos"/>
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
