import config from '../config'
import axios from 'axios'
import { logger } from '../utils'
import util from 'util'

const { API: {
  URL,
  CONFIG
}} = config

export const fetchTrivia = (req, res) => {
  // https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean
  const ENDPOINT = `${URL}?amount=${CONFIG.AMOUNT}&difficulty=${CONFIG.DIFFICULTY}&type=${CONFIG.TYPE}`
  logger.info(`fetchTrivia requesting: ${ENDPOINT}`);

  axios.get(ENDPOINT)
    .then(response => {
      logger.info(`fetchTrivia response results ==> ${util.inspect(response.data)}`);
      res.send({
        status: 'ok',
        payload: response.data,
      })
    })
    .catch(error => {
      logger.status(400).error(`fetchTrivia response error ==> ${error}`)
      res.send({
        status: 'error',
        description: error
      })
    })
}
