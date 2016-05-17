var React = require('react');
var ReactDOM = require('react-dom');

var ContactInfo = React.createClass({

render: function(){
	return(

		<div className="contact_information">
			<div className="name">Thomas Apicella</div>
			
			<div className="contact-info">
				<a href="mailto:tapicella.resume@gmail.com?subject=Saw%20your%20resume%20online" target="_top">Contact</a>
			</div>

			<div className="contact-info">
				<a href="http://www.linkedin.com/pub/thomas-apicella/16/9a2/b03" target="_blank">LinkedIn</a>
			</div>

			<div className="contact-info">
				<a href="https://github.com/TApicella/" target="_blank">Github</a>
			</div>
			<br/><br/>

		</div>
	);
}

});
module.exports = ContactInfo