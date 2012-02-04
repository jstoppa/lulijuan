var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.jorneyplanner;
handle["/journeyplanner"] = requestHandlers.jorneyplanner;



server.start(router.route, handle);
