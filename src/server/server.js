const express = require('express')
const passport = require('passport')
const boom = require('@hapi/boom')
const axios = require('axios')
const cookieParser = require('cookie-parser')
const debug = require('debug')('app:server')
const webpack = require('webpack')
const helmet = require('helmet')
const chalk = require('chalk')

const { config } = require('./config')
const main = require('./routes/main')

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static(`${__dirname}/public`))

// auth basic strategy
require('./utils/auth/strategies/basic')

if (config.env === 'development') {
  debug('Loading on development mode.')

  const webpackConfig = require('../../webpack.config')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const compiler = webpack(webpackConfig)
  const serverConfig = {
    contentBase: `http://localhost:${config.port}`,
    port: config.port,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true },
  }
  app.use(webpackDevMiddleware(compiler, serverConfig))
  app.use(webpackHotMiddleware(compiler))
} else {
  console.log(chalk.greenBright('Loading production mode'))
  app.use(helmet())
  app.use(helmet.permittedCrossDomainPolicies())
  app.disable('x-powered-by')
}

app.post('/auth/sign-in', async (req, res, next) => {
  passport.authenticate('basic', async (error, data) => {
    try {
      if (error || !data) next(boom.unauthorized())

      req.login(data, { session: false }, async () => {
        if (error) next(error)

        const { token, ...user } = data

        res.cookie('token', token, {
          httpOnly: !config.env === 'development',
          secure: !config.env === 'development',
        })

        res.status(200).json(user)
      })
    } catch (error) {
      next(error)
    }
  })(req, res, next)
})

app.post('/auth/sign-up', async (req, res, next) => {
  const { body: user } = req
  try {
    const userData = await axios({
      url: `${config.apiUrl}/auth/sign-up`,
      method: 'post',
      data: user,
    })

    res.status(201).json({
      name: req.body.name,
      email: req.body.email,
      id: userData.data.data,
    })
  } catch (error) {
    next(error)
  }
})

app.post('/user-movies', async (req, res, next) => {
  try {
    const { movieId } = req.body
    const { token, id } = req.cookies
    const userMovie = { userId: id, movieId }

    const { data, status } = await axios({
      url: `${config.apiUrl}/user-movies`,
      headers: { Authorization: `Bearer ${token}` },
      method: 'post',
      data: userMovie,
    })

    if (status === 200 && data.exist === true) {
      res.status(200).json(data.message)
    }

    if (status !== 201) {
      return next(boom.badImplementation())
    }

    res.status(201).json(data)
  } catch (error) {
    next(error)
  }
})

app.delete('/user-movies/:movieId', async (req, res, next) => {
  try {
    const { movieId } = req.params
    const { token, id } = req.cookies
    const { data, status } = await axios({
      url: `${config.apiUrl}/user-movies/${movieId}?userId=${id}`,
      headers: { Authorization: `Bearer ${token}` },
      method: 'delete',
    })

    if (status !== 200) {
      return next(boom.badImplementation())
    }

    res.status(200).json(data)
  } catch (error) {
    next(error)
  }
})

app.get('*', main)

app.listen(config.port, error => {
  if (error) debug(chalk.redBright(error))
  debug(`Listening at http://localhost:${config.port}`)
})
