import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import { getMessageThread } from './../../services/message';

const Sender = (props) =>(<div>
	<div><Link href="/"> Back </Link></div>
	<div>
		<div>{props.sender.name}</div>
		<div>{props.sender.number}</div>
	</div>
</div>)
const Messages = (props) =>(
	<div>
		{props.messages.map(msg=>{
			return (
				<div>
					<div>{msg.time}</div>
					<div>{msg.detail}</div>
				</div>
			)
		})}
	</div>
)
export default class Detail extends Component {
	constructor(){
		super();
		this.state={
			sender:{},
			messages:[]
		}
	}
	componentDidMount(){
		getMessageThread(this.props.matches.id).then((state)=>this.setState(state));
	}
	render() {
		return (
			<div>
				<Sender sender={this.state.sender}/>
				<Messages messages={this.state.messages} />
			</div>
		);
	}
}
