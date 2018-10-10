import express from 'express'
import bodyParser from 'body-parser'
import config from './config'
import {fetchTrivia} from './api'

const app = express()

const port = config.PORT

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// allow CORS for development
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  next()
})

/**
 * https://opentdb.com/api_config.php
 * https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean
 */
app.get('/api/fetchTrivia', fetchTrivia)

/**
 * Server
 */
app.listen(port, () => console.log(`Listening on port ${port}`))