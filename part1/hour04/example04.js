var fs = require("fs"),
    http = require("http");

http.get({host: "shapeshed.com"}, function(response) {
    console.log("Got response from shapeshed.com");
}).on("error", function(e) {
    console.log("There was an error from shapeshed.com");
})

fs.readFile("file1.txt", "utf8", function(e, data) {
    if (e) throw e;
    console.log("File1 read!");
})


http.get({host: "www.bbc.co.uk"}, function(response) {
    console.log("Got response from www.bbc.co.uk");
}).on("error", function(e) {
    console.log("There was an error from www.bbc.co.uk");
});

fs.readFile("file2.txt", "utf8", function(e, data) {
    if (e) throw e;
    console.log("File2 read!");
})