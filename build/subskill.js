var React = require('react');
var ReactDOM = require('react-dom');
var Gallery = require('./thumbnail_gallery.js');
var ReactBootstrap = require('react-bootstrap');
var Glyphicon = ReactBootstrap.Glyphicon;

var SubSkill = React.createClass({
	displayName: 'SubSkill',


	render: function () {
		var content = this.props.content;
		var images = this.props.imgs;
		var image_components;

		if (images) {
			image_components = React.createElement(Gallery, { imgs: images });
			//for (var i = 0; i < images.length; i++) {
			//	image_components.push(<Gallery imgs={images}/>);
			//}
		} else {
				image_components = '';
			}

		var glyphstyle = { color: '#337ab7',
			cursor: 'pointer',
			verticalAlign: '-14%',
			fontSize: '20px' };

		var link = this.props.link;
		var link_component;
		if (link) {
			var link_glyph = React.createElement(Glyphicon, { glyph: 'new-window', style: glyphstyle });
			var link_component = React.createElement(
				'a',
				{ href: link, target: '_blank' },
				link_glyph
			);
		} else {
			link_component = '';
		}

		return React.createElement(
			'div',
			null,
			React.createElement(
				'nobr',
				null,
				React.createElement(
					'span',
					{ className: 'skill-content' },
					content,
					'  ',
					link_component
				)
			),
			'  ',
			image_components
		);
	}

});
module.exports = SubSkill;