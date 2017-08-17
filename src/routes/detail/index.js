import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import { getMessageThread } from './../../services/message';

const Sender = (props) =>(<div className={style['message--header']}>
	<Link href="/" className={style['back--link']}> <img src="../assets/icons/left-arrow.svg" alt="" /> </Link>
	<div className={style['user--detail']}>
		<div className={style['user--name']}>{props.sender.name}</div>
		<div className={style['user--number']}>{props.sender.number}</div>
	</div>
</div>)
const Messages = (props) =>(
	<div className={style['message--text']}>
		{props.messages.map(msg=>{
			return (
				<div>
					<div className={style['message--bubble--container']}>
						<div className={style['message--date']}>{msg.time}</div>
						<div className={style['message--bubble']}><div className={style['message--bubble--inner']}>{msg.detail}</div></div>
						<div className={style['message--bubble']}><div className={style['message--bubble--inner']}>{msg.detail}</div></div>
					</div>

					<div className={style['colored--message--bubble--container']}>
						<div className={style['message--date']}>{msg.time}</div>
						<div className={style['message--bubble']}><div className={style['message--bubble--inner']}>{msg.detail}</div></div>
						<div className={style['message--bubble']}><div className={style['message--bubble--inner']}>{msg.detail}</div></div>
					</div>
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
			<div className={style['message--container']}>
				<Sender sender={this.state.sender}/>
				<Messages messages={this.state.messages} />
			</div>
		);
	}
}
