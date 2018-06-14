'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var humans = require('../data/humans.json');
var wildfolk = require('../data/wildfolk.json');
var dwaerren = require('../data/dwaerren.json');

var halflings = require('../data/halflings.json');
var kenku = require('../data/kenku.json');
var rakenku = require('../data/rakenku.json');

var minotaurs = require('../data/minotaurs.json');
var merfolk = require('../data/merfolk.json');
var viashi = require('../data/viashi.json');

/// https://en.wikipedia.org/wiki/Wikipedia:Pronunciation_(simple_guide_to_markup,_American)
/// http://www.phon.ucl.ac.uk/home/wells/ipa-unicode.htm#insert

var DataSource = function () {
	function DataSource() {
		_classCallCheck(this, DataSource);
	}

	_createClass(DataSource, null, [{
		key: 'fulldata',
		value: function fulldata() {
			return {
				type: "header",
				label: "Introduction",
				text: "a",
				data: [{
					type: "carousel",
					label: "Races of Diamorti",
					sublabel: "A detailed look at the many races of Diamorti",
					text: null,
					data: [humans, wildfolk, dwaerren, halflings, kenku, rakenku, minotaurs, merfolk, viashi]
				}]
			};
		}
	}]);

	return DataSource;
}();

exports.default = DataSource;