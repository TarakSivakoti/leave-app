var http = require('http');
var server = http.createServer(function(req,res){
    console.log('request was made: ' +req.url);
    res.writeHead(200,{'Content-Type': 'application/json'});
 
    var myObj = {
      type: "Paid Leaves",
      remaining: 19,
      used: 1,
      allowance: 20,
      message: "Last used in March"
    };
    res.end(JSON.stringify(myObj));
 
});
 
server.listen(3000,'127.0.0.1');
console.log('Listening port 3000');