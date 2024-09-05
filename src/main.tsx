import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Project from "./pages/Proyectos.tsx";

const router = createBrowserRouter([
	{
		path: "/portfolio/",
		element: <App />,
		children: [
			{
				path: "/portfolio/",
				element: <Home />,
			},
      {
				path: "/portfolio/proyectos",
				element: <Project />,
			},
		],
	},
]);
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router}/>
	</StrictMode>
);
