var ApiBuilder = require('claudia-api-builder'),
  api = new ApiBuilder();

module.exports = api;

api.post('/fullname', function (request) {
	return 'Your FullName is:' + request.body.firstName + ' ' + request.body.lastName;
});

