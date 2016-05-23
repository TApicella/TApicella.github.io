var React = require('react');
var ReactDOM = require('react-dom');
var ContactInfo = require('./contact_info.js');
var Skills = require('./skills_wrapper.js')
var Experiences = require('./experiences_wrapper.js')


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
    },

	render: function() {
		var width = this.state.width;
		var height = this.state.height;
        var resumeStyle = {};
        resumeStyle["background-color"]="#00f88b";
        return(
        	<div>
        		<span>{width} x {height}</span>
        		<ContactInfo/>
        		<Skills header="Programming and Software Development" category="programming" sectionbreak="true" width={width} height={height}/>
        		<div>
        			Very comfortable working within the imperative and object-oriented paradigms<br/>
					Enjoys working in both independent and teamwork driven work environments
				</div>
				<hr/>
				<Skills header="Technical Skills" category="technical" width={width} height={height}/> 
				<hr/>
				<Experiences header="Work Experience" category="work" width={width} height={height}/>
				<hr/>
				<Experiences header="Other Experience" category="other" width={width} height={height}/>
				<Experiences header="Education" category="education" width={width} height={height}/>
				<div className="section-header">Other Interests</div>
				<div>Game design (digital and tabletop), computer science education, cooking, photography</div> 

        	</div>
        );

	}
});
ReactDOM.render(<Resume/>, document.getElementById('resume'));

