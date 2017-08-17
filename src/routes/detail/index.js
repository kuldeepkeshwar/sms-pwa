import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import './style';
import { getMessageThread } from './../../services/message';

const Sender = (props) =>(<div className="massage--header">
	<Link href="/" className="back--link"> <img src="../assets/icons/left-arrow.svg" alt="" /> </Link>
	<div className="user--detail">
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
			<div className="massage--container">
				<Sender sender={this.state.sender}/>
				<Messages messages={this.state.messages} />
			</div>
		);
	}
}
