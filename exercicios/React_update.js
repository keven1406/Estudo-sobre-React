import { render } from 'react-dom'

const tick = x => {
	const element = (
		<div>
			<h1>Hello, world!</h1>
			<h2>It is {new Date().toLocaleTimeString()}.</h2>
		</div>
	)
	render(element,
		document.getElementById('root'))
}

setInterval(tick, 1000)

/*O React compara o elemento e seus filhos com o anterior e apenas atualiza o que for necessario.
Nesse caso, o React atualizara apenas o unico valor que sempre está sendo atualizado a cada chamada
de setInterval(). No caso, atualizará apenas o objeto com a função ne Date(), não tendo que atualizar
todo o código dentro da função tick toda vez que ela for chamada. Ele coloca a função tick em cach e
a modifica apenas se for diferente da chamada anterior.*/
