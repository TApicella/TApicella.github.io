var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var Exercise1 = React.createClass({
    displayName: 'Exercise1',


    getInitialState: function () {
        return {
            mystr: "",
            revstr: ""
        };
    },

    componentDidMount() {
        this.handleChange(this.props.default);
    },

    handleChange(value) {
        var ins_index = 0;
        var result = [];
        for (var i = 0; i < value.length; i++) {
            var c = value[i];
            if (c === " ") {
                ins_index = i + 1;
            }
            result.splice(ins_index, 0, c);
        }
        var revstr = result.join("");

        this.setState({
            mystr: value,
            revstr: revstr
        });
    },

    render: function () {

        var textstyle = {
            "font-size": "36px",
            "width": "75%",
            "margin": "0 auto",
            "text-align": "center"
        };
        return React.createElement(
            'div',
            { style: textstyle },
            React.createElement(
                'h2',
                null,
                'Given a string, reverse each word in the string'
            ),
            React.createElement('br', null),
            React.createElement('textarea', { style: textstyle, value: this.state.mystr, onChange: event => this.handleChange(event.target.value) }),
            React.createElement('br', null),
            React.createElement(
                'div',
                null,
                this.state.revstr
            )
        );
    }
});

module.exports = Exercise1;