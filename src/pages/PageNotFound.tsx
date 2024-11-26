import { Helmet } from "react-helmet"


const PageNotFound = () => {
  return (
    <div>
        <Helmet>
				<title>Error 404</title>
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
					content="Error 404"
				/>
				<meta
					name="description"
					content="Página de Error 404, si estás aquí es que ha salido algo mal "
				/>
			</Helmet>
      <h1>¡Error 404!</h1>
      <h2>Perdón, al parecer ha ocurrido un error.</h2>
      <a href="/">Vuelve al incio</a>
    </div>
  )
}

export default PageNotFound
