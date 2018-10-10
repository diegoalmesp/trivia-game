import axios from 'axios'
import config from '../config'

const { BACKEND_SERVER } = config;

const ax = axios.create({
  baseURL: `${BACKEND_SERVER}/api`
});

class TriviaAPI {
  static fetchData() {
    return ax.get(`/fetchTrivia`)
  }

  // ...
}

export default TriviaAPI;