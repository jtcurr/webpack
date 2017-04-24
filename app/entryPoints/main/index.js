//Styles
require('./styles/main');
//Scripts
const $ = require('jquery');
const api = require('../../apis/users');
const welcomeUser = require('../../welcomeUser');
require('reactApp');
const config = require('../../ts/appConfig');
welcomeUser('Jones');