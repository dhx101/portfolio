import { Link } from "react-router-dom";

const Menu = () => {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to={"/portfolio/"}>Home </Link>
					</li>
					<li>
						<Link to={"/portfolio/proyectos/"}>Proyectos </Link>
					</li>
                    <li>
                        <Link to={"/portfolio/experiencia"}>Experiencia</Link>
                    </li>
                    <li>
                        <Link to={"/portfolio/estudios"}>Estudios</Link>
                    </li>
				</ul>
			</nav>
		</div>
	);
};

export default Menu;
