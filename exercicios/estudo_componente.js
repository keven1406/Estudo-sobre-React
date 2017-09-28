import { render } from 'react-dom'

const Componente = props =>
	<h1>{props.nome}</h1>

const element = (
		<div>
			<Componente nome = "Teste" />
			<div style={{color: 'red'}}>
				<p>Bem vindo ao mundo React</p>
			</div>
		</div>

)
render(
	element,
	document.getElementById('root')
)
