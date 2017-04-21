var $ = require('jquery');

module.exports = {
	getFXRates: (baseCurrency, callback) => {
		$.getJSON('http://api.fixer.io/latest?base=' + baseCurrency, function(data) {
			callback(data);
		});
	},

	getUsers: () => {
		return [
      {
      	name: 'Alex',
      	dog: 'Gil'
      },
      {
      	name: 'Travis',
      	dog: 'Bacos'
      },
      {
      	name: 'Dianers',
      	dog: 'Skittles'
      }
		];
	}
};