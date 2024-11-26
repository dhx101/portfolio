import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="card">
			<Helmet>
				<title>David Huang Xie Desarrollador Web | SEO On Page | Wordpress</title>
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
					content="Desarrollador Web"
				/>
				<meta
					name="description"
					content="Soy David Huang Xie, Desarrollador web, apasionado por el SEO, Wordpress y la optimización de sitios web para mejorar su rendimiento y visibilidad en línea."
				/>
			</Helmet>
			<div className="card__info">
				<div>
					<h1 className="card__h1">David Huang Xie</h1>
					<h2 className="card__h2">Web Developer</h2>
				</div>
				<p className="card__p">
					¡Hola! Soy David y soy un desarrollador web el cual le apasiona las nuevas tecnologías y
					las webs dinámicas. Tengo 1 año de experiencia en diferentes ambitos pero sobre todo
					trabajando con distintas web y me especializo en el desarrollo Front End utilizando HTML,
					CSS, Javascript y Frameworks como React. Me especializo en el maquetado de las web y el
					diseño funcional de estas, creando asi una web funcionl y optimizada para el usuario y
					cliente. También tengo experiencia en la creación y mantenimiento de webs utilizando
					diferentes CMS como Wordpress ¡Trabajemos juntos si te gusta lo que ves! Contacta conmigo a traves de {<a href="https://www.linkedin.com/in/dhuangxie/" target="_blank">Linkedin</a>} o mediante mi {<a href="mailto:dhuangxie@gmail.com" target="_blank">correo electrónico</a>}
				</p>
				<ul className="card__link">
					<li className="card__link__item">
						<a
							href="https://github.com/dhx101"
							target="_blank">
							<img
								src="icons/github.svg"
								alt="GitHub"
							/>
							<p>Github</p>
						</a>
					</li>
					<li className="card__link__item">
						<a
							href="David/Curriculum ES.pdf"
							download={"CV David Huang Xie.pdf"}>
							<img
								src="icons/resume.svg"
								alt="Descargar Curriculum"
							/>
							<p>Curriculum</p>
						</a>
					</li>
					<li className="card__link__item">
						<Link to={"/proyectos"}>
							<img
								src="icons/projects.svg"
								alt="Proyectos"
							/>
							<p>Proyectos</p>
						</Link>
					</li>
					<li className="card__link__item">
						<Link to={"/experiencia"}>
							<img
								src="icons/work.svg"
								alt="Proyectos"
							/>
							<p>Experiencia</p>
						</Link>
					</li>
					<li className="card__link__item">
						<Link to={"/estudios"}>
							<img
								src="icons/academy.svg"
								alt="Proyectos"
							/>
							<p>Estudios</p>
						</Link>
					</li>
				</ul>
			</div>
			<div className="card__photo">
				<img
					className="card__photo__img"
					src="David/david.png"
					alt="David Huang Xie"
				/>
			</div>
		</div>
	);
};

export default Home;
