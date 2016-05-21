var React = require('react');
var ReactDOM = require('react-dom');
var ContactInfo = require('./contact_info.js');
var Skills = require('./skills_wrapper.js')


var WindowDimensions = React.createClass({
    render: function() {
        return <span>{this.state.width} x {this.state.height}</span>;
    },
    updateDimensions: function() {

    var w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
        height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

        this.setState({width: width, height: height});
        // if you are using ES2015 I'm pretty sure you can do this: this.setState({width, height});
    },
    componentWillMount: function() {
        this.updateDimensions();
    },
    componentDidMount: function() {
        window.addEventListener("resize", this.updateDimensions);
    },
    componentWillUnmount: function() {
        window.removeEventListener("resize", this.updateDimensions);
    }
});

var Resume = React.createClass({

    /*
    Personal reminders on how to use these functions

    getInitialState: function() {
        return {
            value: 'foo'
        }
    },

    changeHandler: function(value) {
        this.setState({
            value: value
        });
    },*/

	render: function() {
        var resumeStyle = {};
        resumeStyle["background-color"]="#00f88b";
        return(
        	<div>
        		<WindowDimensions/>
        		<ContactInfo/>
        		<Skills header="Programming and Software Development" category="programming"/>
        		<div>
        			Very comfortable working within the imperative and object-oriented paradigms<br/>
					Enjoys working in both independent and teamwork driven work environments
				</div>
				<hr/>
				<Skills header="Technical Skills" category="technical"/> 
        	</div>
        );

	}
});
ReactDOM.render(<Resume/>, document.getElementById('resume'));

