var React = require('react');
var ReactDOM = require('react-dom');
var ContactInfo = require('./contact_info.js');
var Skills = require('./skills_wrapper.js');
var Experiences = require('./experiences_wrapper.js');

var WindowDimensions = React.createClass({
    displayName: 'WindowDimensions',

    render: function () {
        return React.createElement(
            'span',
            null,
            this.state.width,
            ' x ',
            this.state.height
        );
    },
    updateDimensions: function () {

        var w = window,
            d = document,
            documentElement = d.documentElement,
            body = d.getElementsByTagName('body')[0],
            width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
            height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

        this.setState({ width: width, height: height });
        // if you are using ES2015 I'm pretty sure you can do this: this.setState({width, height});
    },
    componentWillMount: function () {
        this.updateDimensions();
    },
    componentDidMount: function () {
        window.addEventListener("resize", this.updateDimensions);
    },
    componentWillUnmount: function () {
        window.removeEventListener("resize", this.updateDimensions);
    }
});

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
            React.createElement(WindowDimensions, null),
            React.createElement(ContactInfo, null),
            React.createElement(Skills, { header: 'Programming and Software Development', category: 'programming', sectionbreak: 'true' }),
            React.createElement(
                'div',
                null,
                'Very comfortable working within the imperative and object-oriented paradigms',
                React.createElement('br', null),
                'Enjoys working in both independent and teamwork driven work environments'
            ),
            React.createElement('hr', null),
            React.createElement(Skills, { header: 'Technical Skills', category: 'technical' }),
            React.createElement('hr', null),
            React.createElement(Experiences, { header: 'Work Experience', category: 'work' }),
            React.createElement('hr', null),
            React.createElement(Experiences, { header: 'Other Experience', category: 'other' }),
            React.createElement(Experiences, { header: 'Education', category: 'education' }),
            React.createElement(
                'div',
                { className: 'section-header' },
                'Other Interests'
            ),
            React.createElement(
                'div',
                null,
                'Game design (digital and tabletop), computer science education, cooking, photography'
            )
        );
    }
});
ReactDOM.render(React.createElement(Resume, null), document.getElementById('resume'));