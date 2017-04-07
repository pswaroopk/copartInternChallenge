#!/usr/bin/env node

/** * Module dependencies.*/
var app = require('./express');
var port = 3000;
app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
