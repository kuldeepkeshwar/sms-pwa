import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import './style';
import { getList } from './../../services/message';

const SearchBox = (props) => (<div className="search--bar--container">
	<input className="search--bar" type="text" placeholder="1363 messages" />
</div>)
const Messages = (props) => (<div className="item--overflow">
	{props.messages.map((msg)=>{
		return (
			<Link href={'/detail/'+msg.id} className="item--listing--link">
				<div className="item--listing--container">
					<div className="avatar--container"><img src="../assets/icons/android-chrome-192x192.png"/></div>
					<div className="item--listing">
						<div className="item--name--number">{msg.sender.name || msg.sender.number }</div>
						<div className="item--detail">{msg.detail}</div>
						<div className="item--date--time">{msg.time}</div>
					</div>
				</div>
			</Link>
		)
	})}
</div>)
export default class List extends Component {
	constructor(){
		super();
		this.state={
			messages:[]
		}
	}
	componentDidMount(){
		getList().then((state)=>this.setState(state));
	}
	render() {
		return (
			<div class="main--screen">
				<h5 className="main--title">Messaging</h5>
				<div className="main--inner--section">
					<SearchBox />
					<Messages messages={this.state.messages} />
				</div>
			</div>
		);
	}
}
