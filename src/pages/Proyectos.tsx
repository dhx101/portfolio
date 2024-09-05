import json from "../jsons/projects.json";
import { Link } from "react-router-dom";
import SingleProject from "../components/SingleProject";

const Project = () => {
	// console.log(json.proyecto);
	const proyectoArray = json.proyecto;
	return (
		<div className="projects">
			<div className="projects__header">
				<h1>Proyectos</h1>
				<nav>
					<ul>
						<li>
							<Link to={"/portfolio/"}>Home </Link>
						</li>
						<li>
							<Link to={"/portfolio/proyectos/"}>Proyectos </Link>
						</li>
					</ul>
				</nav>
			</div>
			<div className="projects__elements">
				<h2>Ultimos Proyectos</h2>
				<p>Visitas las ultimas web y proyectos en las que he trabajado</p>
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
