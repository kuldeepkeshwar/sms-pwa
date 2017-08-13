import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import { getList } from './../../services/message';

const SearchBox = props => (<div>
  <input type="text" placeholder="1363 messages" />
</div>);
const Messages = props => (<div>
  {props.messages.map((msg) => {
    return (
      <Link href={`/detail/${msg.id}`}>
        <div><img src="/images/user" /></div>
        <div>
          <div>{msg.sender.name || msg.sender.number }</div>
          <div>{msg.detail}</div>
        </div>
        <div>{msg.time}</div>
      </Link>
    );
  })}
</div>);
export default class List extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    };
  }
  componentDidMount() {
    getList().then(state => this.setState(state));
  }
  render() {
    return (
      <div>
        <h2>Messaging</h2>
        <SearchBox />
        <Messages messages={this.state.messages} />
      </div>
    );
  }
}
