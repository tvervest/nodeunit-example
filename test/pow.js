/*!
 * Test cases for the mock library file.
 */
var mylib = require('../lib/mylib'); // load the library we'll be testing

module.exports = {
	'2 ^ 2': function(test) {
		var result = mylib.pow(2, 2);
		test.equal(result, 4); // This will succeed, 2 * 2 == 2 ^ 2
		test.done();
	},

	'3 ^ 2': function(test) {
		var result = mylib.pow(3, 2);
		test.equal(result, 9); // this will fail, 3 * 2 != 3 ^ 2
		test.done();
	}
};