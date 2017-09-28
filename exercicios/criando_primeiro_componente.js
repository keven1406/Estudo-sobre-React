import { createElement as h } from 'react'
import { render } from 'react-dom'
/*
const Welcome = props =>
	<h1>Hello, {props.name}</h1>

const element = <Welcome name="Sara" /> //Engraçado, o componente precisou estar com a letra inicial maiúscula para poder funcionar.

//render(element, document.getElementById('root'))
*/
	const Tabela = (props, propsTwo) => {
		return <table style={{border: '2px solid black'}}>
			<tr><td>Gato</td><td>{props.numero}</td></tr>
			<tr><td>Cachorro</td><td>300</td></tr>
			<tr><td>Rato</td><td>299</td></tr>
		</table>
	}
	const element = <Tabela numero = "200"/>
	render(
		element,
		document.getElementById('root')
	)
