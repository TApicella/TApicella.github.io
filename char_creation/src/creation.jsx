import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import DataDisplay from './DataDisplay.js';
const data = require('../data/data.json');
const settings = require('../data/settings.json');


class MasterDisplay extends Component{

	constructor(props) {
    super(props);
    this.state = {data: data};
  }

  prettyJSON(json, maxheight){
    var data_str = JSON.stringify(json, function(k,v){
      if(v.constructor === Array){
        return JSON.stringify(v);
      }
    return v;
    }, "  ");

    var jsonstyle = {
      "height": ""+maxheight+"px",
      "overflow":"auto"
    }  
    return <pre style={jsonstyle}>{data_str}</pre>;
  };
  
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

		return(
    	<div>
        <h1 style={headerstyle}>
          Character info
        </h1>
        <br/>
        <DataDisplay data={this.state.data} />
    	</div>
  	);
  }
};

ReactDOM.render(<MasterDisplay/>, document.getElementById('creation'));