function makeitrain() {
    var black = "#000000"; //Weight 180/400
    var dBlue = "#030017"; //Weight 180/400
    var medBlue = "#010049"; //Weight 19/400
    var brightBlue = "#020069"; //Weight 19/400
    var yellow = "#FAE212"; //Weight 2/400

    var stdWidth = 4;
    var rainWidth = 2;
    var totalWidth = 0;
    var nostrikes = true;

    var resultcss = "linear-gradient(90deg";
    var prevcol = "";
    while (totalWidth < 150) {
        var next = Math.floor((Math.random() * 400) + 1);

        if (next > 0 && next <= 180) {
            totalWidth += stdWidth;
            resultcss += ", " + black + " " + totalWidth + "px";

        } else if (next > 180 && next <= 360 && prevcol != dBlue) {
            totalWidth += stdWidth;
            resultcss += ", " + dBlue + " " + totalWidth + "px";
            prevcol = dBlue;
        } else if (next > 360 && next <= 379 && prevcol != medBlue) {
            totalWidth += rainWidth;
            resultcss += ", " + medBlue + " " + totalWidth + "px";
            prevcol = medBlue;
        } else if (next > 379 && next <= 398 && prevcol != brightBlue) {
            totalWidth += rainWidth;
            resultcss += ", " + brightBlue + " " + totalWidth + "px";
            prevcol = brightBlue;
        } else if (next > 398 && nostrikes) {
            totalWidth += rainWidth;
            resultcss += ", " + yellow + " " + totalWidth + "px";
            nostrikes = false;
        } else {
            totalWidth += stdWidth;
            resultcss += ", " + black + " " + totalWidth + "px";
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