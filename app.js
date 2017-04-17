const $ = require('jquery');
const api = require('./api.js');
const users = api.getFXRates();
const welcomeUser = require('./welcomeUser.coffee');
const ReactApp = require('./react/ReactApp.js');

welcomeUser('Jones');