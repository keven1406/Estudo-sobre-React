import { createElement as h } from 'react'
import { render } from 'react-dom'

//Os elementos do JSX não passam de funções. Como sabemos, funções também são valores. Com isso em mente, podemos fazer expressões com JSX, apesar de ser feio pra caramba!

const nomeandoFruta = x => 'Maçã'

const nomeDaFruta = nome =>
	<p>A fruta é: { nomeandoFruta() } </p>

render(nomeDaFruta(),
	document.getElementById('root'))
