import Header from "../components/Header";
import SingleWork from "../components/SingleWork";
import workArray from "../jsons/workplace.json";
import stackArray from "../jsons/stack.json";
import SingleStack from "../components/SingleStack";

const Experiencia = () => {
	return (
		<div className="exp">
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
