/* eslint-disable no-undef */

const path = require('path');

const alias = {
	'lodash': path.resolve('./node_modules/lodash-es'),
	'scripts': path.resolve('./src/assets/scripts'),
	'styles': path.resolve('./src/assets/styles'),
	'fonts': path.resolve('./src/assets/fonts'),
};

module.exports = {
	slateTools: {
		extends: {
			dev: {
				resolve: {alias}
			},
			prod: {
				resolve: {alias}
			},
		},
	}
};
