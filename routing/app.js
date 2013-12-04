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
    console.log(dope.dataset(r).pony)
  })

  document.getElementById('ponies').onclick = function() {

    return false
  }
  document.getElementById('unicorns').onclick = function() {

    return false
  }
})
