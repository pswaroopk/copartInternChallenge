var express = require('express');
var router = express.Router();
var request = require('request');
var orm = require('../orm');

function pad(num, size) {
  var s = num+"";
  while (s.length < size) s = "0" + s;
  return s;
}

router.get('/', function(req, res, next) {
  var yardlocation = orm.models.yardlocation;
  var customerId = req.query.customerId;
  var zip = req.query.zip;
  if (!zip || !customerId) {
    return res.status(400).json({
      message: 'Required params are missing. Please correct and retry!'
    })
  }
  return  yardlocation.find().then(function (locations) {
    if (!locations || locations.length === 0) {
      return res.json({
        message: 'No locations found'
      })
    }
    var endPoint = 'https://www.zipcodeapi.com/rest/';
    var apiKey = 'wuBC8LO1XFIu4BX8FLXGYvTvF6XVr7cYBNAKzpLw4t195YhLKesIKldqsbmUiySU';
    var radius = req.query.radius || 500;
    var unit = 'km';
    var availableZipCodes = [];
    var availableLocations = [];
    // locations.forEach(function mapCB(location) {
    //   var isValid = isFinite(location.zip);
    //   if (isValid) availableZipCodes.push(parseInt(location));
    // });

    // var url = endPoint + apiKey+ '/match-close.json/' + availableZipCodes.join() + '/' +
    //   radius + '/' + unit;
    var url = endPoint + apiKey+ '/radius.json/' + zip + '/' + radius + '/' + unit;
    return request(url, function(err, response, body){
      if (err) return res.status(500).json(err);
      if (typeof body === 'string') {
        try {
          body = JSON.parse(body);
        } catch (ex) {
          console.log('couldnt parse api response', ex)
        }
      }
      availableZipCodes = body.zip_codes.map(function(loc) { return loc.zip_code; });
      // Filter nearest locations
      locations.forEach(function mapCB(location) {
        var isValid = isFinite(location.zip);
        if (availableZipCodes.indexOf(location.zip) !== -1) availableLocations.push(location);
      });
      var nearestLocations;
      return res.json({
        availableLocations: availableLocations,
        radius: radius
      });
    });
  })
  .catch(next)
});

module.exports = router;
