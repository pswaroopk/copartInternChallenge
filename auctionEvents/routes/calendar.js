var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
  var brand = req.query.brand;
  var country = req.query.country;
  if (!brand || !country) {
    return res.status(400).json({
      message: 'Required params are missing. Please correct and retry!'
    })
  }

  var endPoint = 'http://inventory.copart.io/v1/list';
  var url = endPoint + '?brand=' + brand + '&country=' + country;
  return request(url, function(err, response, body){
    if (err) return res.status(500).json(err);
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (ex) {
        console.log('couldnt parse api response', ex)
      }
    }

    return res.json(body);
  });
});

module.exports = router;
