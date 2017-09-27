import { createElement as h } from 'react'
import { render } from 'react-dom'

//Adicionando css nos React elements
const element = <h1 style={{color:'red'}}>Title</h1>


render(element, document.getElementById('root'))

