var React = require('react');
var ReactDOM = require('react-dom');
var ReactTransitionGroup = require('react-addons-transition-group');
var ReactBootstrap = require('react-bootstrap');
var Glyphicon = ReactBootstrap.Glyphicon;

var ImgControls = React.createClass({
    displayName: 'ImgControls',

    onClicked: function () {
        if (this.state.showing) {
            this.setState({ showing: false });
        } else {
            this.setState({ showing: true });
        }
        this.props.onButtonClicked();
    },
    getInitialState: function () {
        return { showing: true };
    },
    render: function () {
        var glyphstyle = { color: '#337ab7',
            cursor: 'pointer',
            verticalAlign: '-14%',
            fontSize: '20px' };
        var img_glyph = this.state.showing ? React.createElement(Glyphicon, { glyph: 'eye-open', onClick: this.onClicked, style: glyphstyle }) : React.createElement(Glyphicon, { glyph: 'remove', onClick: this.onClicked, style: glyphstyle });
        var link_glyph = React.createElement(Glyphicon, { glyph: 'new-window', style: glyphstyle });

        return React.createElement(
            'div',
            null,
            img_glyph,
            ' ',
            React.createElement(
                'a',
                { href: 'https://github.com/metridoc/metridoc-grails', target: '_blank' },
                link_glyph
            )
        );
    }

});

module.exports = ImgControls;