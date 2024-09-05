import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
// import Home from "./pages/Home.tsx";
// import Project from "./pages/Proyectos.tsx";

// const router = createBrowserRouter([
// 	{
// 		path: "/portfolio/",
// 		element: <App />,
// 		children: [
// 			{
// 				path: "/portfolio/",
// 				element: <Home />,
// 			},
//       {
// 				path: "/portfolio/proyectos",
// 				element: <Project />,
// 			},
// 		],
// 	},
// ]);
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App/>
	</StrictMode>
);
