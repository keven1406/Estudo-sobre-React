import { render } from 'react-dom'

const inicio = prop => 
	prop == 0 ? "--Inicio" : "Inicio"
const dicas = prop => 
	prop == 1 ? "--Dicas" : "Dicas"

const Cabecalho = cab => (
		<header>
			<h1 style = {{fontSize: '40px', marginBottom: '0', marginTop: '-5px'}}>React</h1>
			<h2 style={{color: 'red', marginTop: '0'}}>Uma biblioteca para criação de interfaces</h2>
			<ul style = {{listStyle: 'none', display: 'flex', flexDirection: 'row'}}>
				<li style={{marginRight: '10px'}}>
					<a>
						{inicio(cab.pagina)}
					</a>
				</li>
				<li>
					<a>
						{dicas(cab.pagina)}
					</a>
				</li>
			</ul>
		</header>
)
const element = <Cabecalho pagina = "0" />

render (
	element,
	document.getElementById('root')
)
