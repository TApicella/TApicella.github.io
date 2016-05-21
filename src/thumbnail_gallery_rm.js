var React = require('react');
var ReactDOM = require('react-dom');
//var ReactTransitionGroup = React.addons.TransitionGroup;
var ReactTransitionGroup = require('react-addons-transition-group');
//var ReactTransitionGroup = require('react-addons-css-transition-group');
var ReactCSSTransitionReplace = require('react-css-transition-replace');


var ImgControls = require('./image_controllers.js');
var ControlBar = require('./image_controlbar.js');

var Container = React.createClass({
    onComponentAppeared: function() {
        console.log('onComponentAppeared');
    },
    toggleThumbnail: function() {
        if(this.state.thumbnail || this.state.fullimg){
            this.setState({ thumbnail: false, fullimg: null});
        } 
        else{
            this.setState({thumbnail: true, fullimg: null});
        }
        console.log(this.state.thumbnail);
        console.log(this.state.fullimg);
    },
    toggleFullImage: function(image){
        if(image){
            this.setState({thumbnail:false, fullimg: image});
        }
        else{
            this.setState({thumbnail:true, fullimg: null});
        }
    },
    onAnimationComplete: function() {
        this.setState({ thumbnail: false });
        this.setState({ fullimg: null });
        console.log(this.state.thumbnail);
        console.log(this.state.fullimg);
    },
    getInitialState: function() {
        return { thumbnail: false, fullimg: null };
    },
    render: function() {
        var images = this.props.imgs;
        //var fullImgURL = imgName+"_LG.png";
        //var btnRefID = imgName+"_btn";
        //var imgRefID = imgName+"_img";
        
        var thumbnails = [];

        for (var i = 0; i < images.length; i++) {
            var thumbImgURL = images[i].name+"_TM.png";
            thumbnails.push(<Image imgURL={thumbImgURL} baseimg={images[i].name} kind="thumbnail" controls={images[i].controls} toggleImage={this.toggleFullImage}/>);
        }

        //var thumbnail_components = this.state.thumbnail ? thumbnails : '';
        var full_image = '';
        if(this.state.fullimg){
            for (var i = 0; i < images.length; i++) {
                if(images[i].name == this.state.fullimg){
                    full_image = <Image imgURL={this.state.fullimg+"_LG.png"}  baseimg={images[i].name}  kind="full" controls={images[i].controls} toggleImage={this.toggleFullImage}/> 
                }
            }
        }
        else{
            full_image='';
        }

        var img_components;
        if(this.state.fullimg){
            img_components =  full_image;
        }
        else if(this.state.thumbnail){
            img_components = thumbnails[0]
        }
        else{
            img_components = '';
        }
        //var full_image = this.state.fullimg ? <Image kind="full" imgURL={this.state.fullimg+"_LG.png"} key="myImageLG" controls={images[i].controls}/> : '';
        /*<ReactTransitionGroup transitionName="thumbnailTransition">
                            {thumbnail_components}
                        </ReactTransitionGroup>
                        <ReactTransitionGroup transitionName="fullimgTransition">
                            {full_image}
                        </ReactTransitionGroup>*/

        return (
            <span>
                <ImgControls onButtonClicked={this.toggleThumbnail}/>
                <div className="img-container">
                    <div className="img-sub-container">
                        <ReactCSSTransitionReplace transitionName="full-img" transitionEnterTimeout={1500} transitionLeaveTimeout={500}>
                            {img_components}
                        </ReactCSSTransitionReplace>
                    </div>
                </div>
            </span>
        );
    }
});

//var MyButton = React.createClass({
//   render: function() {
//       return <button onClick={this.props.onButtonClicked}>{this.props.refID}</button>;
//    }
//});



var Image = React.createClass({
    /*componentWillAppear: function(callback){
        console.log('Image.componentWillAppear');
    },
    componentDidAppear: function(){
        console.log('Image.componentDidAppear');
    },
    componentWillEnter: function(callback){
        console.log('Image.componentWillEnter');
        $(ReactDOM.findDOMNode(this)).stop(true).hide().slideToggle({
            duration: 400,
            complete: function() { callback(); }
        });
    },
    componentDidEnter: function(){
        console.log('Image.componentDidEnter');
    },
    componentWillLeave: function(callback){
        console.log('Image.componentWillLeave');
        $(ReactDOM.findDOMNode(this)).stop(true).slideToggle({
            duration: 400,
            complete: function() { callback(); }
        });
    },*//*
    componentDidLeave: function(){
        console.log('Image.componentDidLeave');
    },
    componentDidMount: function() {
        console.log('Image.componentDidMount');
    },
    componentWillUnmount: function() {
        console.log('Image.componentWillUnmount');
    },*/
    render: function() {
        var url = "img/"+this.props.imgURL;
        var controls = this.props.controls;
        return( 
            <span>
                <ControlBar size={this.props.kind} baseimg={this.props.baseimg} controls={controls} toggleImage={this.props.toggleImage}/>
                <img className="img-bordered" src ={url} />&nbsp;&nbsp;
            </span>
        );
    }
});
//ReactDOM.render(<Container />, document.body);

module.exports = Container