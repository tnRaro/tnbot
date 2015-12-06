"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (x) {
	var tokens = (0, _tokenizer2.default)(x);

	var switchs = [];
	var args = [];

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = tokens[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var token = _step.value;

			var s = token.match(re);
			if (s) {
				switchs.push(s[1].replace(/--?/, ""));
			} else {
				args.push(token);
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return {
		input: x,
		length: args.length,
		name: args[0],
		args: args.slice(1),
		switchs: switchs
	};
};

var _tokenizer = require("./tokenizer");

var _tokenizer2 = _interopRequireDefault(_tokenizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var re = /^(-.|--.+)$/;