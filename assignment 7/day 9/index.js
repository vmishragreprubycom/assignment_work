const express = require("express");
const request = require("request");
const bodyParser = require('body-parser');
const app = express();
const parser = bodyParser.json();

app.get('/clients', (req, res) => {
  request("https://api.createsend.com/api/v3.1/clients.json", (error,
    response, body) => {
    if (error && response.statusCode != 200) {
      res.send(error);
    }
    res.send(body);
  }).auth('9af1bc463abcb399edfe5ee6767be349', 'campaignmonitor');
});

app.post('/clients', parser, (req, res) => {
  request({
    url: 'https://api.createsend.com/api/v3.1/clients.json',
    method: "POST",
    json: req.body
  }, (error, response, body) => {
    if (error && response.statusCode != 200) {
      res.send(error);
    }
    res.send(body);
  }).auth('9af1bc463abcb399edfe5ee6767be349', 'campaignmonitor');

});

app.delete('/clients/:clientId', (req, res) => {
  request({
    url: "https://api.createsend.com/api/v3.1/clients/" + req.params.clientId +
      ".json",
    method: "DELETE",
    json: req.body
  }, (error, response, body) => {
    if (error && response.statusCode != 200) {
      res.send(error);
    }
    res.send(body);
  }).auth('9af1bc463abcb399edfe5ee6767be349', 'campaignmonitor');
});


app.get('/clients/:clientId', (req, res) => {
  request({
    url: "https://api.createsend.com/api/v3.1/clients/" + req.params.clientId +
      ".json",
    method: "GET",
    json: req.body
  }, (error, response, body) => {
    if (error && response.statusCode != 200) {
      res.send(error);
    }
    res.send(body);
  }).auth('9af1bc463abcb399edfe5ee6767be349', 'campaignmonitor');
});

app.listen(3000, () => {
  console.log("server is running.");
});
