import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import DataDisplay from './DataDisplay.js';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaAngleRight from 'react-icons/lib/fa/angle-right';

class Carousel extends Component{

  constructor(props) {
    super(props);
    this.state = {index: 0};
  }

  componentDidMount() {
  }
  
	render(){
    const defaultstyle = {
      "fontSize":"36px",
      "width": "400px",
      "margin": "0 auto",
      "textAlign": "center"
    };
    
    const headerstyle = {
      "fontSize":"36px",
      "width": "100%",
      "margin": "0 auto",
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "center"
    };

    const labelstyle = {
      "minWidth": "400px",
      "display": "flex",
      "justifyContent": "center"
    };

    const subheaderstyle = {
      "fontSize":"24px",
      "width": "100%",
      "margin": "0 auto",
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "center"
    };

    const textboxstyle = {
      "minWidth": "400px",
      "display": "flex",
      "justifyContent": "center"
    };
    const textstyle = {
      "minWidth": "200px",
      "width": "50%"
    };

    const passdata = this.props.data;
    //const datalength = this.props.data.length.toString();
    const path = this.props.path;
    const depth = this.props.depth+1;
    const mydata = JSON.stringify(this.props.data);
    const text = this.props.data.text;
    let textlist = [];
    if(text){
      textlist = this.props.data.text.split('\n');
    }
    const textelements = [];
    for(const textline of textlist){
        textelements.push(<div>{textline}</div>);
        textelements.push(<br/>);
    }

    return (
      <div>
        <div style={headerstyle}>
          <FaAngleLeft onClick={this.props.prev}></FaAngleLeft>
          <div style={labelstyle}>
            <div>{this.props.data.label}</div>
          </div>
          <FaAngleRight onClick={this.props.next}></FaAngleRight>
        </div>
        <div style={subheaderstyle}>
          <div style={labelstyle}>{this.props.data.sublabel}</div>
        </div>
        <div style={textboxstyle}>
          <div style={textstyle}>{textelements}</div>
        </div>
        <DataDisplay dataobj={passdata} path={path} updatePath={this.props.updatePath} depth={depth}/>
      </div>
    );
  }
};

export default Carousel;