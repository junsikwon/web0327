/*var http = require('http');

function requestCallbackFunction (req, res) {
  // if(req.url === '/favicon.ico') {
  //   console.log('Favicon was requested');
  // } else {
    console.log('hello');
  // }
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}

var server = http.createServer(
  requestCallbackFunction
);

server.listen(8080);
*/
var http = require('http');
2 /*
3 function requestCallbackFunction (req, res) {
4   // if(req.url === '/favicon.ico') {
5   //   console.log('Favicon was requested');
6   // } else {
7     console.log('hello');
8   // }
9   res.writeHead(200, {'Content-Type': 'text/plain'});
10   res.end('Hello World!');
11 }
12 */


 var server = http.createServer(
   function (req, res) {
    if (req.url === '/favicon.ico') {
      console.log('Favicon was requested');
     } else {
       console.log('hello');
     }
     res.writeHead(200, {'Content-Type': 'text/plain'}); 
     res.end('Hello World!');
   }
 );


 server.listen(8080);
