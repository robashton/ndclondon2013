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

  var routing = new LocationBar()

  routing.route(/^unicorns$/, function() {
    container.innerHTML = mustache.render(unicornTemplate, data)
  })

  routing.route(/^$/, function() {
    container.innerHTML = mustache.render(poniesTemplate, data)
  })

  routing.start({
    pushState: true
  })

  var delegate = new Delegate(container)

  delegate.on('click', '.pony', function(e, r) {
    console.log(dope.dataset(r).pony)
  })

  document.getElementById('ponies').onclick = function() {
    routing.update('/', { trigger: true })
    return false
  }
  document.getElementById('unicorns').onclick = function() {
    routing.update('/unicorns', { trigger: true})
    return false
  }
})
