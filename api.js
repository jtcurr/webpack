var $ = require('jquery');

module.exports = {
	getFXRates: () => {
		$.getJSON('http://api.fixer.io/latest?base=USD', function(data) {
			console.log(data);
		});
	}
};