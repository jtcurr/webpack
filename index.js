//Styles
require('./styles/main');
//Scripts
const $ = require('jquery');
const api = require('./apis/users');
const welcomeUser = require('./welcomeUser');
const ReactApp = require('./react/ReactApp');
const config = require('./ts/appConfig');

welcomeUser('Jones');