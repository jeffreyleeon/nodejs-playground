datetime = function(req, res, next) {
	console.log('=======Request time is ', Date.now());
	next();
}

module.exports = datetime;