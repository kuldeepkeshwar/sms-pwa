import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import { getList } from './../../services/message';
import Scrollable from './../../components/scrollable';

const SearchBox = (props) => (<div className={style['search--bar--container']}>
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
  constructor() {
    super();
    this.state = {
      filter:{
        limit:15,
        offset:0,  
      },
      total:0,
      messages: [],
    };
    this.onScrollDown=this.onScrollDown.bind(this);
  }
  componentDidMount() {
    getList(this.state.filter).then(state => {
      state.filter={
        limit:15,
        offset:this.state.filter.offset+state.messages.length
      }
      this.setState(state);
    });
  }
  onScrollDown(top,donefn){
    getList(this.state.filter).then(state => {
      const filter={
        limit:15,
        offset:this.state.filter.offset+state.messages.length
      }
      let messages = this.state.messages;
      messages=messages.concat(state.messages);
      this.setState({messages,filter});
      donefn();
    });
  }
  render() {
    return (
      <div class="main--screen">
				<h5 className="main--title">Messaging</h5>
				<div className="main--inner--section">
          <SearchBox />
          <Scrollable onDown={this.onScrollDown} distance="375">
            <Messages messages={this.state.messages} />
          </Scrollable>
        </div>
      </div>
    );
  }
}
