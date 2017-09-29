import { render } from 'react-dom'

const formatDate = data =>
		data.toLocaleTimeString()

const Avatar = props => (
	<img className = "Avatar"
		src = {props.user.avatarUrl}
		alt = {props.user.name}
	/>
)
const UserInfo = props => (
	<div className = "UserInfo">	
		<Avatar user = {props.user}/>
		<div className = "UserInfo-name">
			{props.user.name}
		</div>
	</div>
)

const Comment = argumentos => {	
	let props = argumentos.prop
	return (
	<div className="Comment">
		<UserInfo user = {props.author}/>	
		<div className="Comment-text">
			{props.text}
		</div>
		<div className="Comment-date">
			{formatDate(props.date)}
		</div>
	</div>
)
}

const element = <Comment prop  = {{
		author: {
			avatarUrl: 'avatar.jpg',
			name: 'Keven'
		},
		text: 'Estou aqui para comentar que gostei muito do que vi, parabéns!',
		date: new Date()
}} />

render(
	element,
	document.getElementById('root')
)
