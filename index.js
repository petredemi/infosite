const express = require('express')
const app = express()
const path = require('path')
let url = require('url');


app.get("/",function (req, res, next){
  res.sendFile(path.join(__dirname, 'index.html'));

});
app.get("/about.html",function (req, res, next){
  res.sendFile(path.join(__dirname, 'about.html'));
});
app.get("/contact.html",function (req, res, next){
  res.sendFile(path.join(__dirname, 'contact.html'));
});
app. use((req, res, next) => { res. status(404)})


const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});

/*
var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function (req, res) {
  if(req.url == '/'){
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    })}else{
        var qq = url.parse(req.url, true);
        var filename = "." + qq.pathname;
        fs.readFile(filename, function(err, data) {
          if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('page not found');
          }  
         
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
    }
}).listen(8080);
*/