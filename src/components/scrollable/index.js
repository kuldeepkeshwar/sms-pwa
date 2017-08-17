import { h, Component } from 'preact';
export default class Scrollable extends Component {
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