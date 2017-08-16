import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import { getList } from './../../services/message';

const SearchBox = props => (<div>
  <input type="text" placeholder="1363 messages" />
</div>);
const Messages = props => (
  <div>
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
  </div>
);

<<<<<<< HEAD

=======
const styles={
  height:'400px',overflow:'scroll'
}
>>>>>>> b3488f30a4b3f552414699041f00b5733a0913a5
class Scrollable extends Component {
  constructor() {
    super();
    this.state = {
      direction:'',
      lastScrollPos:0,
      page:1,
      downCallFlag:true,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleDownDone = this.handleDownDone.bind(this);
  }
  handleDownDone(){
    //on success
    this.setState({
      page:this.state.page+1,downCallFlag:true
    });
  }
  handleScroll(event) {
    if(this.state.lastScrollPos > event.currentTarget.scrollTop) {
      this.setState({
        direction:'up',
        lastScrollPos:event.currentTarget.scrollTop
      });
    } else if(this.state.lastScrollPos < event.currentTarget.scrollTop) {
      this.setState({
        direction:'down',
        lastScrollPos:event.currentTarget.scrollTop
      });
      if(this.state.downCallFlag && this.props.distance*this.state.page<event.currentTarget.scrollTop){
        this.setState({
          downCallFlag:false
        });
        this.props.onDown(event.currentTarget.scrollTop,this.handleDownDone);
      }
    }
  }
  render() {
    const styles={
      height:`${this.props.distance}px`,overflow:'scroll'
    }
    return (
      <div style={styles} onScroll={this.handleScroll}>
        {this.props.children}
      </div>
    );
  }
}
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
      <div>
        <h2>Messaging</h2>
        <SearchBox />
        <Scrollable onDown={this.onScrollDown} distance="375">
          <Messages messages={this.state.messages} />
        </Scrollable>
      </div>
    );
  }
}
