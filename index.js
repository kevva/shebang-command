'use strict';
var shebangRegex = require('shebang-regex');

module.exports = function (str) {
	var match = str.match(shebangRegex);

	if (!match) {
		return null;
	}

	var arr = match[0].replace('#!', '').split(' ');
	var bin = arr[0].split('/').pop();

	return bin === 'env' ? arr[1] : bin;
};
