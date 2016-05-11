var React = require('react');
var ReactDOM = require('react-dom');
//var ReactTransitionGroup = React.addons.TransitionGroup;
var ReactTransitionGroup = require('react-addons-transition-group');
var Container = React.createClass({
    displayName: 'Container',

    onComponentAppeared: function () {
        console.log('onComponentAppeared');
    },
    onClicked: function () {
        if (this.state.isShowing) {
            this.setState({ isShowing: false });
        } else {
            this.setState({ isShowing: true });
        }
    },
    onAnimationComplete: function () {
        this.setState({ isShowing: false });
    },
    getInitialState: function () {
        return { isShowing: false };
    },
    render: function () {
        var imgURL = this.props.imgUrl;
        var btnRefID = this.props.refID + "_btn";
        var imgRefID = this.props.refID + "_img";
        var helloWorld = this.state.isShowing ? React.createElement(Image, { name: 'World!', imgURL: imgURL, refID: imgRefID, key: 'myHelloWorld' }) : '';
        return React.createElement(
            'div',
            { id: 'container' },
            React.createElement(MyButton, { onButtonClicked: this.onClicked, refID: btnRefID, imgRefID: imgRefID }),
            React.createElement(
                ReactTransitionGroup,
                { transitionName: 'hellotransition' },
                helloWorld
            )
        );
    }
});

var MyButton = React.createClass({
    displayName: 'MyButton',

    render: function () {
        return React.createElement(
            'button',
            { onClick: this.props.onButtonClicked },
            this.props.refID
        );
    }
});

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