import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import DataDisplay from './DataDisplay.js';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaAngleRight from 'react-icons/lib/fa/angle-right';

class Carousel extends Component{

  constructor(props) {
    super(props);
    this.state = {index: 0};
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }
  
  next(){
    var newindex;
    if(this.state.index===this.props.data.length-1){
      newindex=0;
    }
    else{
      newindex = this.state.index+1;
    }
    this.setState({index: newindex});
  };

  prev(){
    var newindex;
    if(this.state.index===0){
      newindex=this.props.length-1;
    }
    else{
      newindex = this.state.index-1;
    }
    this.setState({index: newindex});
  };

	render(){
    var defaultstyle = {
      "fontSize":"36px",
      "width": "400px",
      "margin": "0 auto",
      "textAlign": "center"
    };
    
    var headerstyle = {
      "fontSize":"36px",
      "width": "100%",
      "margin": "0 auto",
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "center"
    };

    var passdata = this.props.data[this.state.index];

    return (
      <div>
        <div style={headerstyle}>
          <FaAngleLeft onClick={this.prev}></FaAngleLeft>
          <div>{this.props.label}</div>
          <FaAngleRight onClick={this.next}></FaAngleRight>
        </div>
        <DataDisplay data={passdata} />
      </div>
    );
  }
};

export default Carousel;