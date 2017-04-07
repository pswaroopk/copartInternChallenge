var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/calendar', function (req, res) {
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

})


app.use('/', express.static(__dirname + '/public'));
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res) {
  console.log(colors.red(err.stack));

  res.status(err.status || 500);
  res.json({
    message: err.message,

    // on production no stacktraces leaked to user
    error: app.get('env') === 'development' ? err : {}
  });
});

module.exports = app;
