import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import DataDisplay from './DataDisplay.js';
import DataSource from './DataSource.js'; //= require('../data/data.json');
const settings = require('../data/settings.json');


class MasterDisplay extends Component{

	constructor(props) {
    super(props);
    this.state = {
      data: DataSource.fulldata(),
      path: []
    };
    this.updatePath = this.updatePath.bind(this);
    this.prettyJSON = this.prettyJSON.bind(this);
  }
  componentDidMount() {
    const getDepth = function (d) {
      const dstring = JSON.stringify(d);
      console.log(dstring);
      let lbraces = 0;
      let maxbraces = 0;
      [...dstring].forEach(c => {
        if(c == '{'){
          lbraces++;
          if(lbraces > maxbraces){
            maxbraces = lbraces;
          }         
        }
        else if(c == '}'){
          lbraces--;
        }
      });
      return maxbraces-1; //Don't count the outermost braces
    }

    const depth = getDepth(this.state.data);
    
    let newpath = this.state.path.slice();
    while(newpath.length < depth){
      newpath.push(0);
    }
    this.setState({path: newpath});
  }

  updatePath(depth, index){
    let newpath = this.state.path.slice();
    while(newpath.length <= depth){
      newpath.push(0);
    }
    newpath[depth] = index;
    this.setState({path: newpath});
  };

  prettyJSON(json, maxheight){
    const data_str = JSON.stringify(json, function(k,v){
      if(v.constructor === Array){
        return JSON.stringify(v);
      }
    return v;
    }, "  ");

    const jsonstyle = {
      "height": ""+maxheight+"px",
      "overflow":"auto"
    }  
    return <pre style={jsonstyle}>{data_str}</pre>;
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

    const startdepth = 0;

    const displayPath = JSON.stringify(this.state.path);

    const displayData = JSON.stringify(this.state.data, null, 2);

		return(
    	<div>
        <h1 style={headerstyle}>
          Character info
        </h1>
        <br/>
        <DataDisplay dataobj={this.state.data} path={this.state.path} depth={startdepth} updatePath={this.updatePath}/>

      </div>
  	);
  }
};

ReactDOM.render(<MasterDisplay/>, document.getElementById('creation'));