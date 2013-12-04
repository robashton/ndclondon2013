var domReady = require('domready')
  , data = require('./testdata')
  , mustache = require('mustache')
  , fs = require('fs')
  , template = fs.readFileSync(__dirname + '/template.html')

domReady(function() {
  var container = document.getElementById('container')
  container.innerHTML = mustache.render(template, data)
})
