import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel.js';

class DataDisplay extends Component{

  constructor(props) {
    super(props);
    this.state = {index: 0};
  }

  componentDidMount() {
    let index = 0;
    const depth = this.props.depth;
    if(this.props.path.length>depth){
      index = this.props.path[depth];
      this.props.updatePath(depth, index) 
    }
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  next(){
    let newindex = 0;
    if(this.props.dataobj.data){
      const datalen = this.props.dataobj.data.length;
      if(this.state.index>=datalen-1){
        newindex=0;
      }
      else{
        newindex = this.state.index+1;
      }
    }
    this.setState({index: newindex});
    this.props.updatePath(this.props.depth, newindex);
  };

  prev(){
    let newindex = 0;
    if(this.props.dataobj.data){
      const datalen = this.props.dataobj.data.length;
      if(this.state.index===0){
        newindex=datalen-1;
      }
      else if(this.state.index>=datalen-1){
        newindex=datalen-2; //Special case for having a path index greater than possible
      }
      else{
        newindex = this.state.index-1;
      }
    }
    this.setState({index: newindex});
    this.props.updatePath(this.props.depth, newindex);
  };

	render(){

    const headerstyle = {
      "fontSize":"36px",
      "width": "100%",
      "margin": "0 auto",
      "textAlign": "center"
    };

    const subheaderstyle = {
      "fontSize":"16px",
      "width": "100%",
      "margin": "0 auto",
      "textAlign": "center"
    };


    const depth = this.props.depth;
    const sources = this.props.dataobj;
    const path = this.props.path;

    let index, passdata, datalen;
    if(path.length > depth){
      index = path[depth];
    }
    else{
      index = 0;
    }
    if(sources.data){
      datalen = sources.data.length;
      if(index >= datalen){ //Special case for having a path index greater than possible
        index = datalen-1;
      }
      passdata = sources.data[index];
    }
    else{
      passdata = null;
      datalen = 0;
    }

    const mydata = JSON.stringify(this.props.dataobj);

    const label = sources.label;
    const text = sources.text;

    if(passdata){
      return(
        <div className="display-carousel">
          <br/>
          <Carousel data={passdata} depth={depth} path={path} 
                    prev={this.prev} next={this.next} updatePath={this.props.updatePath}/>
        </div>
      );
    }
    else{
      return(
        <div className="display-paragraph">
        </div>
      );
    }
  }
};


export default DataDisplay;