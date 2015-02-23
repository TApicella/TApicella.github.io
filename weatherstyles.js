var WEATHER = (function() {
    var my = {};
    my.makeitrain = function() {
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
    };
    return my;
}());