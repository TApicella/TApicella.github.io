var React = require('react');
var ReactDOM = require('react-dom');
var Gallery = require('./thumbnail_gallery.js');
var ReactBootstrap = require('react-bootstrap');
var Glyphicon = ReactBootstrap.Glyphicon;

var SubSkill = React.createClass({

render: function(){
	var content = this.props.content;
	var images = this.props.imgs;
	var image_components;

	if(images){
		image_components = <Gallery imgs={images}/>;
		//for (var i = 0; i < images.length; i++) {
   		//	image_components.push(<Gallery imgs={images}/>);
		//}
	}
	else{
		image_components='';
	}

	var glyphstyle = {color: '#337ab7', 
    					  cursor: 'pointer', 
    					  verticalAlign: '-14%', 
    					  fontSize: '20px'};

	var link = this.props.link;
	var link_component;
	if(link){
		var link_glyph = <Glyphicon glyph="new-window" style={glyphstyle}/>;
		var link_component =  <a href={link} target="_blank">{link_glyph}</a>;
	}
	else{
		link_component = '';
	}
	
	return(
		<div>
			<nobr><span className="skill-content">{content}
				&nbsp;&nbsp;{link_component}
        	</span></nobr>
        	&nbsp;&nbsp;{image_components}
        </div>
	);
}

});
module.exports = SubSkill