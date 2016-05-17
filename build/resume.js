var React = require('react');
var ReactDOM = require('react-dom');
var ContactInfo = require('./contact_info.js');
var ProgrammingSkills = require('./programming_skills_wrapper.js');

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
            React.createElement(ContactInfo, null),
            React.createElement(ProgrammingSkills, null)
        );
    }
});
ReactDOM.render(React.createElement(Resume, null), document.getElementById('resume'));