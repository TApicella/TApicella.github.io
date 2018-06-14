const humans = require('../data/humans.json');
const wildfolk = require('../data/wildfolk.json');
const dwaerren = require('../data/dwaerren.json');

const halflings = require('../data/halflings.json');
const kenku = require('../data/kenku.json');
const rakenku = require('../data/rakenu.json');

const minotaurs = require('../data/minotaurs.json');
const merfolk = require('../data/merfolk.json');
const viashi = require('../data/viashi.json');

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
					text: "b",
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