var domReady = require('domready')
  , data = require('./testdata')
  , fs = require('fs')
  , mustache = require('mustache')
  , template = fs.readFileSync(__dirname + '/template.html')
  , Delegate = require('dom-delegate')
  , dope = require('dope')

domReady(function() {
  var container = document.getElementById('container')

  var events = new Delegate(container)

  events.on('click', 'tr', function(e, row) {
    alert(dope.dataset(row).pony)
  })

  container.innerHTML = mustache.render(template, data)
})
