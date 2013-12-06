var domReady = require('domready')
  , data = require('./testdata')
  , mustache = require('mustache')
  , fs = require('fs')
  , poniesTemplate = fs.readFileSync(__dirname + '/template.html')
  , unicornTemplate = fs.readFileSync(__dirname + '/unicorns.html')
  , Delegate = require('dom-delegate')
  , dope = require('dope')
  , LocationBar = require('location-bar')

domReady(function() {
  var container = document.getElementById('container')
  var delegate = new Delegate(container)

  delegate.on('click', '.pony', function(e, r) {

  })

  var routing = new LocationBar()

  routing.route(/^$/, function() {
    container.innerHTML = mustache.render(poniesTemplate, data)
  })

  routing.route(/^unicorns$/, function() {
    container.innerHTML = mustache.render(unicornTemplate, data)
  })
  routing.start({ pushState: true })

  document.getElementById('ponies').onclick = function() {
    routing.update('/', { trigger: true })
    return false
  }
  document.getElementById('unicorns').onclick = function() {
    routing.update('/unicorns', { trigger: true })
    return false
  }
})
