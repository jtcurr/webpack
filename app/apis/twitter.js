var mockTweets = require('./MOCKS/MOCK_DATA.json');
console.log(mockTweets);

module.exports = {
	getTweets() {
		return mockTweets;
	},
	getTweetsCount() {
		return mockTweets.length;
	}
};