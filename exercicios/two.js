import { render } from 'react-dom'

const Welcome = props =>
		<h1>Hello, {props.name}</h1>
const App = x =>
		<div>
			<Welcome name = "Sara" />
			<Welcome name = "Cathal" />
			<Welcome name = "Edite" />
		</div>
render(
	<App />,
	document.getElementById('root')
)
