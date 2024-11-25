import { Link } from "react-router-dom";

const Menu = () => {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to={"/"}>Home </Link>
					</li>
					<li>
						<Link to={"/proyectos"}>Proyectos </Link>
					</li>
                    <li>
                        <Link to={"/experiencia"}>Experiencia</Link>
                    </li>
                    <li>
                        <Link to={"/estudios"}>Estudios</Link>
                    </li>
				</ul>
			</nav>
		</div>
	);
};

export default Menu;
