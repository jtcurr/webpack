var $ = require('jquery');

module.exports = {
	getFXRates: () => {
		$.getJSON('http://api.fixer.io/latest?base=USD', function(data) {
			console.log(data);
		});
	}

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
		]
	}
};