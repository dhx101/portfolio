import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import { Outlet } from 'react-router-dom'
import Contact from "./components/Contact";
import Home from "./pages/Home";
import Project from "./pages/Proyectos";

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
				</Routes>
			</BrowserRouter>
			{/* <Outlet/> */}
			<Contact />
		</>
	);
}

export default App;
