var React = require('react');
var ReactDOM = require('react-dom');
var Container = require('./image_bar.js');

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
        		<Container imgName="manage_controllers"/>
        		<Container imgName="rid_admin_form"/>
        	</div>
        );

	}
});
ReactDOM.render(<Resume/>, document.getElementById('resume'));

