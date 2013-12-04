var domReady = require('domready')
  , data = require('./testdata')
  , mustache = require('mustache')
  , fs = require('fs')
  , template = fs.readFileSync(__dirname + '/template.html')
  , Delegate = require('dom-delegate')

domReady(function() {
  var container = document.getElementById('container')
  container.innerHTML = mustache.render(template, data)

  var delegate = new Delegate(container)
  delegate.on('click', '.pony', function(e, r) {
    console.log(e, r)
  })
})
