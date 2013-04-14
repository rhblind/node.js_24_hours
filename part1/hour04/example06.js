// Listing 4.3 - demonstrate async behaviour

var http = require("http");

function fetchPage() {
    console.log("Fetching page...");
    http.get({
        host: "trafficjamapp.herokuapp.com",
        path: "/?delay=2000"
    }, function(response) {
        console.log("Response complete from requested page");
    }).on("error", function(e) {
        console.log("There was an error: " + e);
    });
}

function fetchApi() {
    console.log("Fetching API...");
    http.get({
        host: "trafficjamapp.herokuapp.com",
        path: "/?delay=2000"
    }, function(response) {
        console.log("Response from requested API complete");
    }).on("error", function(e) {
        console.log("There was an error: " + e);
    });
}

fetchPage();
fetchApi();