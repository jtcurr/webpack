const twitterApi = require('Api/twitter');
console.log(twitterApi);

module.exports = $scope => {
  $scope.tweets = twitterApi.getTweets();
  $scope.numberOfTweets = twitterApi.getTweetsCount();
};