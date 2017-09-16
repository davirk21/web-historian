var path = require('path');
var archive = require('../helpers/archive-helpers');
var urlParser = require('url');
var fs = require('fs');

var status = 200;


// require more modules/folders here!

var methods = {
  'GET': function(request, response) {
    utils.sendReponse(response, data, statusCode);
  },

  'POST': function(request, response) {   
    util.sendsendReponse(response, null, statusCode);
  },

  'OPTIONS': function(request, response) {
    var statusCode = 200;
    utils.sendReponse(response, null, statusCode);    
  }
};

exports.handleRequest = function (req, res) {
  //is this get request?  
  if (req.method === 'GET') {
    //console.log(req.url);
    // //if get request is '/'
    // if (req.url === '/') {
      
    // }

    var apath = archive.paths.siteAssets + '/index.html';
    fs.readFile (apath, function(err, data) {
      if (!err) {
        // console.log('received data: ' + data);
        res.writeHead(status, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();        
      } else {
          console.log(err);
      }      
    
    });
  }
  
    
};
