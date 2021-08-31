import http from 'http';

// HyperText Transfer Protocol

// - Note how the server does not automatically reload
// - Note how the browser does not automatically reload
const server = http.createServer((req, res) => {
    console.log("Request received!");
    res.write("Sunflowers"); // writing stuff into the response
    res.write(" Are "); // writing stuff into the response
    res.end("Delicious"); // finishing the response, this sends the response to the browser
});

console.log("Server created and starting........... :)");
server.listen(3009);