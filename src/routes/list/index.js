import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import { getList } from './../../services/message';
import Scrollable from './../../components/scrollable';

const SearchBox = (props) => (<div className={style['search--bar--container']}>
	<input className={style['search--bar']} type="text" placeholder="1363 messages" />
</div>)

const Messages = (props) => (<div className={style['item--overflow']}>
	{props.messages.map((msg)=>{
		return (
			<Link href={'/detail/'+msg.id} className={style['item--listing--link']}>
				<div className={style['item--listing--container']}>
					<div className={style['avatar--container']}>
            <img src="../assets/icons/android-chrome-192x192.png"/>
          </div>
					<div className={style['item--listing']}>
						<div className={style['item--name--number']}>{msg.sender.name || msg.sender.number }</div>
						<div className={style['item--detail']}>{msg.detail}</div>
						<div className={style['item--date--time']}>{msg.time}</div>
					</div>
				</div>
			</Link>
		)
	})}
</div>)
const distance=document.body.offsetHeight-50-48;
const limit=Math.floor(distance/63)*3;
export default class List extends Component {
  constructor() {
    super();
    this.state = {
      filter:{
        limit:limit,
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
        limit:limit,
        offset:this.state.filter.offset+state.messages.length
      }
      this.setState(state);
    });
  }
  onScrollDown(top,donefn){
    getList(this.state.filter).then(state => {
      const filter={
        limit:limit,
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
      <div class={style['main--screen']}>
				<h5 className={style['main--title']}>Messaging</h5>
				<div className={style['main--inner--section']}>
          <SearchBox />
          <Scrollable onDown={this.onScrollDown} distance={distance}>
            <Messages messages={this.state.messages} />
          </Scrollable>
        </div>
      </div>
    );
  }
}
