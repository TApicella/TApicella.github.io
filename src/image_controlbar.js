var React = require('react');
var ReactDOM = require('react-dom');
var ReactTransitionGroup = require('react-addons-transition-group');
var ReactBootstrap = require('react-bootstrap');
var Glyphicon = ReactBootstrap.Glyphicon;

var ControlBar = React.createClass({
     
    mouseEnter: function() {
        this.setState({ showing: true });
        //console.log("mouseover");
    },
    mouseLeave: function() {
        this.setState({ showing: false });
        //console.log("mouseout");
    },
    getInitialState: function() {
        return { showing: false};
    },
    render: function() {
        
        var controls = this.props.controls;
        var control_component = this.state.showing ? <Controls ctls={controls} size={this.props.size} baseimg={this.props.baseimg} toggleImage={this.props.toggleImage}/> : '';
        var myclass = "control-detector-"+this.props.size;
        return( 
            <span className={myclass} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                <ReactTransitionGroup transitionName="controlsTransition">
                    {control_component}
                </ReactTransitionGroup>
            </span> 
        );
    }
});

var Controls = React.createClass({
    getInitialState: function() {
        return {showing: false};
    },
    componentWillEnter: function(callback){
        console.log('Controls.componentWillEnter');
        $(ReactDOM.findDOMNode(this)).stop(true).hide().slideToggle({
            duration: 800,
            complete: function() { callback(); }
        });
    },
    componentWillLeave: function(callback){
        console.log('Controls.componentWillLeave');
        $(ReactDOM.findDOMNode(this)).stop(true).slideToggle({
            duration: 800,
            complete: function() { callback(); }
        });
    },
    componentDidMount: function() {
        this.setState({ showcontrols: true });
    },
    componentWillUnmount: function() {
        this.setState({ showcontrols: false });
    },
    changeImage(image){
        console.log(image);
        this.props.toggleImage(image);
    },
    render: function() {
        var controls = this.props.ctls;
        var control_components = [];
        var image_type = this.props.size;
        var glyphstyle = {color: '#337ab7', 
                      cursor: 'pointer', 
                      verticalAlign: '-14%', 
                      fontSize: '20px'};

        if(this.state.showcontrols){
            for (var i = 0; i < controls.length; i++) {
                var text = controls[i].text;
                var type = controls[i].type;
                var link = controls[i].url;
                if(type == "link"){
                    var link_glyph = <Glyphicon glyph="new-window" style={glyphstyle}/>;
                    var link_component =  <span>{text}<a href={link} target="_blank">{link_glyph}</a>&nbsp;&nbsp;</span>;
                    control_components.push(link_component);
                }
            }

            if(image_type == "thumbnail"){
                control_components.push(<Glyphicon glyph="fullscreen" style={glyphstyle} onClick={this.changeImage.bind(this, this.props.baseimg)}/>);
                //control_components.push(<Glyphicon glyph="fullscreen" style={glyphstyle}/>);

            }

            if(image_type == "full"){
                control_components.push(<Glyphicon glyph="remove" style={glyphstyle} onClick={this.changeImage.bind(this, null)}/>);
                //control_components.push(<Glyphicon glyph="remove" style={glyphstyle}/>);
            }
        }

        var myclass = "control-bar-"+this.props.size;

        return( 
            <span className={myclass}>{control_components}</span>
        );
    }
});
//ReactDOM.render(<Container />, document.body);

module.exports = ControlBar