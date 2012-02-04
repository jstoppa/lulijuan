var querystring = require("querystring")
http = require("http");
url = require('url');
function jorneyplanner(response, request) {
    console.log("Request handler 'jorneyplanner' was called.");
    var url_parts = url.parse(request.url,true);
    console.log(url_parts.query.url);
    var path = '/api/XML_TRIP_REQUEST2?place_<usage>=London';
    if(url_parts.query.url){
        path = url_parts.query.url;
    }
    path = "/api/XML_TRIP_REQUEST2?language=en&sessionID=0&place_origin=London&type_origin=poi&name_origin=O2&place_destination=London&type_destination=poi&name_destination=Madame%20Tussauds";
    //connects to tfl ->use the nicer get method
    var options = {
        hostname: 'jpapi.tfl.gov.uk',
        port: 80,
        path: path
    };
    var data ="";
    http.get(options, function(res) {
        res.on('data', function(chunk){
            
            data += chunk;
        //do something with chunk
        }).on("end", function(){
            response.end(data);
        
        });

    }).on('error', function(e) {
        console.log("Got error: " + e.message);
    });
  
//end tfl stuff


}


exports.jorneyplanner = jorneyplanner;

