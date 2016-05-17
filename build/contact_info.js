var React = require('react');
var ReactDOM = require('react-dom');

var ContactInfo = React.createClass({
	displayName: 'ContactInfo',


	render: function () {
		return React.createElement(
			'div',
			{ className: 'contact_information' },
			React.createElement(
				'div',
				{ className: 'name' },
				'Thomas Apicella'
			),
			React.createElement(
				'div',
				{ className: 'contact-info' },
				React.createElement(
					'a',
					{ href: 'mailto:tapicella.resume@gmail.com?subject=Saw%20your%20resume%20online', target: '_top' },
					'Contact'
				)
			),
			React.createElement(
				'div',
				{ className: 'contact-info' },
				React.createElement(
					'a',
					{ href: 'http://www.linkedin.com/pub/thomas-apicella/16/9a2/b03', target: '_blank' },
					'LinkedIn'
				)
			),
			React.createElement(
				'div',
				{ className: 'contact-info' },
				React.createElement(
					'a',
					{ href: 'https://github.com/TApicella/', target: '_blank' },
					'Github'
				)
			),
			React.createElement('br', null),
			React.createElement('br', null)
		);
	}

});
module.exports = ContactInfo;