import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel.js';

class DataDisplay extends Component{

  constructor(props) {
    super(props);
    this.state = {};
  }

	render(){

    var headerstyle = {
      "fontSize":"36px",
      "width": "100%",
      "margin": "0 auto",
      "textAlign": "center"
    };

    var subheaderstyle = {
      "fontSize":"16px",
      "width": "100%",
      "margin": "0 auto",
      "textAlign": "center"
    };

    var sources = this.props.data;
    var passdata = sources.data;
    var label = sources.label;
    var text = sources.text;

    if(this.props.data.type == "carousel"){
      return(
        <div className="display-carousel">
          <br/>
          <Carousel data={passdata} label={label}/>
        </div>
      );
    }
    else if(this.props.data.type == "paragraph"){
      return(
        <div className="display-paragraph">
          <br/>
          <h2>{label}</h2>
          <div>{text}</div>
        </div>
      );
    }
  }
};


export default DataDisplay;