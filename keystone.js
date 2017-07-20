/* eslint quotes: 0 quote-props: 0 */

'use strict';

const keystone = require('.');
const Promise = require('bluebird');

const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/keystone';
const COOKIE_SECRET = process.env.COOKIE_SECRET || 'COOKIE_SECRET';
const CLOUDINARY_URL = process.env.CLOUDINARY_URL;
const GOOGLE_BROWSER_KEY = process.env.GOOGLE_BROWSER_KEY;
const GOOGLE_SERVER_KEY = process.env.GOOGLE_SERVER_KEY;

const configuration = {
	"port": PORT,
	"NODE_ENV": NODE_ENV,

	"name": "keystone",
	"brand": "keystone",
	"signin logo": "/logo.jpg",

	"static": "public",
	"favicon": "public/favicon.ico",

	"sessions": true,
	"session store": "mongo",
	"auth": true,
	"auto update": true,
	"mongo": MONGO_URI,
	"mongo options": {
		"promiseLibrary": Promise,
	},

	"cloudinary config": CLOUDINARY_URL,
	"cloudinary folders": true,

	"google api key": GOOGLE_BROWSER_KEY,
	"google server api key": GOOGLE_SERVER_KEY,
	"default region": "cl",

	"user model": "User",
	"cookie secret": COOKIE_SECRET,
};
// const routes = require('./routes');

// Setup MongoDB driver (mongoose)
keystone.get('mongoose').Promise = Promise;

// Load settings
keystone.init(configuration);
// keystone.get('mongoose').Promise = Promise;

// Load your project's Models
keystone.import('models');

// Setup Express.js routes
// keystone.set('routes', routes);

// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	users: ['User'],
});


keystone.start();
