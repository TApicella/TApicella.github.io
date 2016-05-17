var React = require('react');
var ReactDOM = require('react-dom');
//var ReactTransitionGroup = React.addons.TransitionGroup;
var ReactTransitionGroup = require('react-addons-transition-group');
//var ReactTransitionGroup = require('react-addons-css-transition-group');

var ImgControls = require('./image_controllers.js');
var ControlBar = require('./image_controlbar.js');

var Container = React.createClass({
    displayName: 'Container',

    onComponentAppeared: function () {
        console.log('onComponentAppeared');
    },
    toggleThumbnail: function () {
        if (this.state.thumbnail || this.state.fullimg) {
            this.setState({ thumbnail: false, fullimg: null });
        } else {
            this.setState({ thumbnail: true, fullimg: null });
        }
        console.log(this.state.thumbnail);
        console.log(this.state.fullimg);
    },
    toggleFullImage: function (image) {
        if (image) {
            this.setState({ thumbnail: false, fullimg: image });
        } else {
            this.setState({ thumbnail: true, fullimg: null });
        }
    },
    onAnimationComplete: function () {
        this.setState({ thumbnail: false });
        this.setState({ fullimg: null });
        console.log(this.state.thumbnail);
        console.log(this.state.fullimg);
    },
    getInitialState: function () {
        return { thumbnail: false, fullimg: null };
    },
    render: function () {
        var images = this.props.imgs;
        //var fullImgURL = imgName+"_LG.png";
        //var btnRefID = imgName+"_btn";
        //var imgRefID = imgName+"_img";

        var thumbnails = [];

        for (var i = 0; i < images.length; i++) {
            var thumbImgURL = images[i].name + "_TM.png";
            thumbnails.push(React.createElement(Image, { imgURL: thumbImgURL, baseimg: images[i].name, kind: 'thumbnail', controls: images[i].controls, toggleImage: this.toggleFullImage }));
        }

        //var thumbnail_components = this.state.thumbnail ? thumbnails : '';
        var full_image = '';
        if (this.state.fullimg) {
            for (var i = 0; i < images.length; i++) {
                if (images[i].name == this.state.fullimg) {
                    full_image = React.createElement(Image, { imgURL: this.state.fullimg + "_LG.png", baseimg: images[i].name, kind: 'full', controls: images[i].controls, toggleImage: this.toggleFullImage });
                }
            }
        } else {
            full_image = '';
        }

        var img_components;
        if (this.state.fullimg) {
            img_components = full_image;
        } else if (this.state.thumbnail) {
            img_components = thumbnails;
        } else {
            img_components = '';
        }
        //var full_image = this.state.fullimg ? <Image kind="full" imgURL={this.state.fullimg+"_LG.png"} key="myImageLG" controls={images[i].controls}/> : '';
        /*<ReactTransitionGroup transitionName="thumbnailTransition">
                            {thumbnail_components}
                        </ReactTransitionGroup>
                        <ReactTransitionGroup transitionName="fullimgTransition">
                            {full_image}
                        </ReactTransitionGroup>*/

        return React.createElement(
            'span',
            null,
            React.createElement(ImgControls, { onButtonClicked: this.toggleThumbnail }),
            React.createElement(
                'div',
                { className: 'img-container' },
                React.createElement(
                    'div',
                    { className: 'img-sub-container' },
                    React.createElement(
                        ReactTransitionGroup,
                        { transitionName: 'fullimgTransition' },
                        img_components
                    )
                )
            )
        );
    }
});

//var MyButton = React.createClass({
//   render: function() {
//       return <button onClick={this.props.onButtonClicked}>{this.props.refID}</button>;
//    }
//});

var Image = React.createClass({
    displayName: 'Image',

    componentWillAppear: function (callback) {
        console.log('Image.componentWillAppear');
    },
    componentDidAppear: function () {
        console.log('Image.componentDidAppear');
    },
    componentWillEnter: function (callback) {
        console.log('Image.componentWillEnter');
        $(ReactDOM.findDOMNode(this)).stop(true).hide().slideToggle({
            duration: 400,
            complete: function () {
                callback();
            }
        });
    },
    componentDidEnter: function () {
        console.log('Image.componentDidEnter');
    },
    componentWillLeave: function (callback) {
        console.log('Image.componentWillLeave');
        $(ReactDOM.findDOMNode(this)).stop(true).slideToggle({
            duration: 400,
            complete: function () {
                callback();
            }
        });
    }, /*
       componentDidLeave: function(){
         console.log('Image.componentDidLeave');
       },
       componentDidMount: function() {
         console.log('Image.componentDidMount');
       },
       componentWillUnmount: function() {
         console.log('Image.componentWillUnmount');
       },*/
    render: function () {
        var url = "img/" + this.props.imgURL;
        var controls = this.props.controls;
        return React.createElement(
            'span',
            null,
            React.createElement(ControlBar, { size: this.props.kind, baseimg: this.props.baseimg, controls: controls, toggleImage: this.props.toggleImage }),
            React.createElement('img', { className: 'img-bordered', src: url }),
            '  '
        );
    }
});
//ReactDOM.render(<Container />, document.body);

module.exports = Container;