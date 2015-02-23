function setupColumns() {
    $("[class*='thunder-border']").height($(window).height());
    $("[class*='main-content']").height($(window).height());
    $("[class*='thunder-border']").each(function() {
        $(this).css({
            "background-image": WEATHER.makeitrain()
        });
    });
}

$(document).ready(function() {
	//Fixing columns
    setupColumns();
    $(window).resize(function() {
        setupColumns();
    });

    //Weather capturing from http://www.onextrapixel.com/2011/08/22/adding-weather-to-your-site-with-jquery-and-yql/
    //Also using SunCalc: https://github.com/mourner/suncalc

    //Setup
    var zipcode = '19145';
    var latitude = 39.9149;
    var longitude = 75.1911;
    var units = 'f';
    var date = new Date();

    //Queries
    var query = "SELECT item.condition FROM weather.forecast WHERE location='" + zipcode + "' AND u='" + units + "'";
    var cacheBuster = Math.floor((new Date().getTime()) / 1200 / 1000);
    var url = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(query) + '&format=json&_nocache=' + cacheBuster;
    var lights = SunCalc.getTimes(date, latitude, longitude);
    var moon = SunCalc.getMoonIllumination(date);

    //Callback
    window['wCallback'] = function(data) {
        var info = data.query.results.channel.item.condition;
        var buildstring = "";
        for (var ikey in info) {
            if (info.hasOwnProperty(ikey)) {
                buildstring = buildstring + ikey + " -> " + info[ikey] + "<br/>";
            }
        }
        for (var lkey in lights) {
            if (lights.hasOwnProperty(lkey)) {
                buildstring = buildstring + lkey + " -> " + lights[lkey] + "<br/>";
            }
        }
        for (var mkey in moon) {
            if (moon.hasOwnProperty(mkey)) {
                buildstring = buildstring + mkey + " -> " + moon[mkey] + "<br/>";
            }
        }
        $('#weatherInfo').html(buildstring);
    };

    //Ajax call
    $.ajax({
        url: url,
        dataType: 'jsonp',
        cache: true,
        jsonpCallback: 'wCallback'
    });
});