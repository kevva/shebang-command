'use strict';

module.exports = function (str) {
	var match = str.match(/^#!(.*)/);

	if (!match) {
		return null;
	}

	var arr = match[0].replace(/#! ?/, '').split(' ');
	var bin = arr[0].split('/').pop();
	var arg = arr[1];

	return (
		bin === 'env' ?
		arg :
		bin + (arg ? ' ' + arg : '')
	);
};
