import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import { Outlet } from 'react-router-dom'
import Contact from "./components/Contact";
import Home from "./pages/Home";
import Project from "./pages/Proyectos";
import Experiencia from "./pages/Experiencia";
import Estudios from "./pages/Estudios";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/portfolio/"
						element={<Home />}
					/>
					<Route
						path="/portfolio/proyectos"
						element={<Project />}
					/>
					<Route
						path="/portfolio/experiencia"
						element={<Experiencia />}
					/>
					<Route
						path="/portfolio/estudios"
						element={<Estudios />}
					/>
				</Routes>
			</BrowserRouter>

			<Contact />
		</>
	);
}

export default App;
