/**
 * Copyright 2015-present, Vou de ônibus.
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Dependencies
var path = require('path')
var Express = require('express')
var qs = require('qs')

// Webpack stuff
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var webpackConfig = require('../webpack.config')

// React & Redux
var React = require('react')
var renderToString = require('react-dom/server').renderToString
var Provider = require('react-redux').Provider
var configureStore = require('../common/store/configureStore')
var App = require('../common/containers/App')
var fetchCounter = require('../common/api/container')

const app = new Express()
const port = 3000

// Hot reloading setup
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: webpackConfig.output.publicPath}))
app.use(webpackHotMiddleware(compiler))

// Fired EVERY time the server side receives a request
app.use(handleRender)

function handleRender (req, res) {
  // Query api...asynchronously
  fetchCounter(function apiResult () {
    // Read the counter from the request, if provided
    const params = qs.parse(req.query)
    const counter = parseInt(params.counter, 10) || apiResult || 0

    // Compile an initial sate
    const initialState = counter.initialState

    // Create a new Redux store instance
    const store = configureStore(initialState)

    // Render the component to a string
    const html = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    )

    // Grab the initial state from our Redux store
    const finalState = store.getState()

    // Send the rendered page back to the client
    res.send(renderFullPage(html, finalState))
  })
}

function renderFullPage (html, finalState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>VDB</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
      </body>
    </html>
  `
}

app.listen(port, function (error) {
  if (error) {
    console.log(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
})
