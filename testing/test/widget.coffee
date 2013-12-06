widget = require '../widget'
jsdom = require("jsdom").jsdom
doc = jsdom('')
window = doc.createWindow()

Scenario "Using my awesome widget", ->
  element = null

  Given "an element on a web page", ->
    element = window.document.createElement('div')

  When "calling my awesome module on it", ->
    widget(element, { name: "bob"})

  Then "there will be a message shown to me", ->
    element.innerHTML.should.contain('hello bob')



