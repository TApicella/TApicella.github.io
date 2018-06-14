const humans = require('../data/humans.json');
const wildfolk = require('../data/wildfolk.json');
const dwaerren = require('../data/dwaerren.json');

const halflings = require('../data/halflings.json');
const kenku = require('../data/kenku.json');
const rakenku = require('../data/rakenku.json');

const minotaurs = require('../data/minotaurs.json');
const merfolk = require('../data/merfolk.json');
const viashi = require('../data/viashi.json');

/// https://en.wikipedia.org/wiki/Wikipedia:Pronunciation_(simple_guide_to_markup,_American)
/// http://www.phon.ucl.ac.uk/home/wells/ipa-unicode.htm#insert
class DataSource{
    static fulldata(){
    	return {
			type: "header",
			label: "Introduction",
			text: "a",
			data: [
				{
					type: "carousel",
					label: "Races of Diamorti",
					sublabel: "A detailed look at the many races of Diamorti",
					text: null,
					data: [
						humans,
						wildfolk,
						dwaerren,
						halflings,
						kenku,
						rakenku,
						minotaurs,
						merfolk,
						viashi
					]
				}
			]
		}
	}
}

export default DataSource;