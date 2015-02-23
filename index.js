function makeitrain() {
    var black = "#000000"; //Weight 66/150
    var dBlue = "#060023"; //Weight 66/150
    var medBlue = "#020069"; //Weight 8/150
    var brightBlue = "#0318A2"; //Weight 8/150
    var yellow = "#FAE212"; //Weight 1/150

    var stdWidth = 4;
    var rainWidth = 2;
    var totalWidth = 0;

    var resultcss = "linear-gradient(90deg";
    while (totalWidth < 150) {
        var next = Math.floor((Math.random() * 150) + 1);
        if (next > 0 && next <= 66) {
            totalWidth += stdWidth;
            resultcss += ", " + black + " " + totalWidth + "px";

        } else if (next > 66 && next <= 132) {
            totalWidth += stdWidth;
            resultcss += ", " + dBlue + " " + totalWidth + "px";
        } else if (next > 132 && next <= 140) {
            totalWidth += rainWidth;
            resultcss += ", " + medBlue + " " + totalWidth + "px";
        } else if (next > 140 && next <= 149) {
            totalWidth += rainWidth;
            resultcss += ", " + brightBlue + " " + totalWidth + "px";
        } else {
            totalWidth += rainWidth;
            resultcss += ", " + yellow + " " + totalWidth + "px";
        }
    }
    resultcss += ")";

    return resultcss;
}

function setupColumns() {
    $("[class*='thunder-border']").height($(window).height());
    $("[class*='main-content']").height($(window).height());
    $("[class*='thunder-border']").each(function() {
        $(this).css({
            "background-image": makeitrain()
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