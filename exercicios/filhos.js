import { createElement as h } from 'react'
import { render } from 'react-dom'

//Os elementos do JSX não passam de funções. Como sabemos,
//funções também são valores. Com isso em mente, podemos
//fazer expressões com JSX, apesar de ser feio pra caramba!

/*const nomeandoFruta = x => 'Maçã'

const nomeDaFruta = nome =>
	<p>A fruta é: { nomeandoFruta() } </p>

render(nomeDaFruta(),
	document.getElementById('root')
)*/

//Para iserir código dentro das tags JSX, é preciso usar as
//chaves isolando o código.

/*const clicou = x =>
	console.log('Clicou sim, querida!')
const element = (<div id="endereco">Rua São João</div>)
render(element, document.getElementById('root'))
*/
//Também posso utilizar um valor de função do javascript ou
//qualquer tipo de código nos atributos. Para isso basta 
//inserir o código dentro de um bloco de chaves.

const div = (
	<div>
		<h1>Hello</h1>
		<p>Usando children tags</p>
	</div>
)

render(div, document.getElementById('root'))
