const path = require('path')
const express = require('express')
const favicon = require('serve-favicons')
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config.js')

const isDeveloping = process.env.NODE_ENV !== 'production'
const port = isDeveloping ? 3000 : process.env.PORT
const app = express()

app.use(favicon({
  '/favicon.ico': __dirname + '/src/favicons/favicon.ico',
  '/apple-touch-icon-57x57.png': __dirname + '/src/favicons/apple-touch-icon-57x57.png',
  '/apple-touch-icon-60x60.png': __dirname + '/src/favicons/apple-touch-icon-60x60.png',
  '/apple-touch-icon-72x72.png': __dirname + '/src/favicons/apple-touch-icon-72x72.png',
  '/apple-touch-icon-76x76.png': __dirname + '/src/favicons/apple-touch-icon-76x76.png',
  '/apple-touch-icon-114x114.png': __dirname + '/src/favicons/apple-touch-icon-114x114.png',
  '/apple-touch-icon-120x120.png': __dirname + '/src/favicons/apple-touch-icon-120x120.png',
  '/apple-touch-icon-144x144.png': __dirname + '/src/favicons/apple-touch-icon-144x144.png',
  '/apple-touch-icon-152x152.png': __dirname + '/src/favicons/apple-touch-icon-152x152.png',
  '/apple-touch-icon-180x180.png': __dirname + '/src/favicons/apple-touch-icon-180x180.png',
  '/favicon-32x32.png': __dirname + '/src/favicons/favicon-32x32.png',
  '/favicon-96x96.png': __dirname + '/src/favicons/favicon-96x96.png',
  '/favicon-16x16.png': __dirname + '/src/favicons/favicon-16x16.png',
  '/mstile-144x144.png': __dirname + '/src/favicons/mstile-144x144.png'
}))

if (isDeveloping) {
  const compiler = webpack(config)
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  })

  app.use(middleware)
  app.use(webpackHotMiddleware(compiler))
  app.get('*', function response (req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')))
    res.end()
  })
} else {
  app.use(express.static(__dirname + '/dist'))
  app.get('*', function response (req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
  })
}

app.listen(port, '0.0.0.0', function onStart (err) {
  if (err) {
    console.log(err)
  }
  console.log('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port)
})
