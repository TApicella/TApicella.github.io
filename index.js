$(document).ready(function() {
    //Weather capturing from http://www.onextrapixel.com/2011/08/22/adding-weather-to-your-site-with-jquery-and-yql/

    //Setup
    var zipcode = '19145';
    var units = 'f';

    //Query
    var query = "SELECT item.condition FROM weather.forecast WHERE location='" + zipcode + "' AND u='" + units + "'";
    var cacheBuster = Math.floor((new Date().getTime()) / 1200 / 1000);
    var url = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(query) + '&format=json&_nocache=' + cacheBuster;

    //Callback
    window['wCallback'] = function(data) {
        var info = data.query.results.channel.item.condition;
        alert(info);
    };

    //Ajax call
    $.ajax({
        url: url,
        dataType: 'jsonp',
        cache: true,
        jsonpCallback: 'wCallback'
    });
});