var React = require('react');
var ReactDOM = require('react-dom');
var Container = require('./image_bar.js');

var Resume = React.createClass({
    displayName: 'Resume',


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

    render: function () {
        var resumeStyle = {};
        resumeStyle["background-color"] = "#00f88b";
        return React.createElement(
            'div',
            null,
            React.createElement(Container, { imgName: 'manage_controllers' }),
            React.createElement(Container, { imgName: 'rid_admin_form' })
        );
    }
});
ReactDOM.render(React.createElement(Resume, null), document.getElementById('resume'));