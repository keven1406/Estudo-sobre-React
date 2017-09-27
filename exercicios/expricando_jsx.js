import { createElement as h } from 'react'
import { render } from 'react-dom'

//const element = (<h1 id="title" style={{ color: 'blue' }}>Hello, World!</h1>)

const element = h('h1', { 
	id: 'title',
	style: {
		color: 'red',
	}
}, 'Hello, World!')

render(element, document.getElementById('root'))
