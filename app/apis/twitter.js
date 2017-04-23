var mockTweets = require('./MOCKS/MOCK_DATA.json');

module.exports = {
	getTweets() {
		return mockTweets;
	},
	getTweetsCount() {
		return mockTweets.length;
	}
}