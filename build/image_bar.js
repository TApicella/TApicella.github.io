var React = require('react');
var ReactDOM = require('react-dom');
//var ReactTransitionGroup = React.addons.TransitionGroup;
var ReactTransitionGroup = require('react-addons-transition-group');
//var ReactTransitionGroup = require('react-addons-css-transition-group');

var ImgControls = require('./image_controllers.js');

var Container = React.createClass({
    displayName: 'Container',

    onComponentAppeared: function () {
        console.log('onComponentAppeared');
    },
    onClicked: function () {
        if (this.state.thumbnail) {
            this.setState({ thumbnail: false });
        } else {
            this.setState({ thumbnail: true });
        }
        if (this.state.fullimg) {
            this.setState({ fullimg: false });
        } else {
            this.setState({ fullimg: true });
        }

        console.log(this.state.thumbnail);
        console.log(this.state.fullimg);
    },
    onAnimationComplete: function () {
        this.setState({ thumbnail: false });
        this.setState({ fullimg: false });
        console.log(this.state.thumbnail);
        console.log(this.state.fullimg);
    },
    getInitialState: function () {
        return { thumbnail: false, fullimg: false };
    },
    render: function () {
        var imgName = this.props.imgName;
        var fullImgURL = imgName + "_LG.png";
        var thumbImgURL = imgName + "_TM.png";
        var btnRefID = imgName + "_btn";
        var imgRefID = imgName + "_img";
        var thumbnail = this.state.thumbnail ? React.createElement(Image, { name: 'thumb', imgURL: thumbImgURL, key: 'myImageTM' }) : '';
        var fullimg = this.state.fullimg ? React.createElement(Image, { name: 'full', imgURL: fullImgURL, key: 'myImageLG' }) : '';
        return React.createElement(
            'div',
            { id: 'container' },
            React.createElement(ImgControls, { onButtonClicked: this.onClicked, refID: btnRefID }),
            React.createElement(
                ReactTransitionGroup,
                { transitionName: 'thumbnailTransition' },
                thumbnail
            ),
            React.createElement(
                ReactTransitionGroup,
                { transitionName: 'fullimgTransition' },
                fullimg
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
        return React.createElement(
            'div',
            null,
            React.createElement('img', { className: 'test', src: url })
        );
    }
});
//ReactDOM.render(<Container />, document.body);

module.exports = Container;