function route(handle, pathName, response) {
	console.log("About to route a request for " + pathName);
	if (typeof handle[pathName] === 'function') {
		return handle[pathName](response);
	} else {
		console.log("No request handler found for " + pathName);
		return "404 Not found";
	}
}

exports.route = route;
