import { createElement as h } from 'react'
import { render } from 'react-dom'

/*render(
	<h1>Hello, world!</h1>,
	document.getElementById('root')
)*/

//Introdução ao JSX

function formatName(user) {
	return user.firstName + ' ' + user.lastName
}

const user = {
	firstName: 'Harper',
	lastName: 'Perez'
}

const element = (
	<h1>
		Hello, {formatName(user)}!
	</h1>
)
/*
render(
	element,
	document.getElementById('root')
)
const ana = nome => 'Ana'
const elemento = (
	<p>Meu seu numero atual é: { ana() } </p>
)
const el = h('p', {},
	'Meu queria muito te ligar, mas roubaram meu celular, numero atual é: ' + ana()
)
*/

//JSX is an expression too /JSX é uma expressão também!

function getGreeting(user) {
		if (user) 
				return <h1>Hello, { formatName(user) }!</h1>
		return <h1>Hello, Stranger.</h1>
}
const names = [<p>Ana</p>,<p>Elias</p>,<p>Keven</p>]
const getName = names => name =>
		names.
		find(atual =>
			atual === nome ? atual : atual
		)
getName(names)
console.log('Ana')
render(getName('Ana'), document.getElementById('root'))
