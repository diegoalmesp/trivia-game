import React from 'react'
import PropTypes from 'prop-types'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history'
import { Provider } from 'react-redux'

import Layout from './pages/Layout'
import Welcome from './pages/Welcome'
import App from './pages/App'
import Results from './pages/Results';

const NoMatch = () => (<h2 className="text-center">Route not found</h2>)

const Root = ({ store }) => (
  <Provider store={store}>
    <Layout>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/app" component={App} />
          <Route path="/results" component={Results} />
          <Route component={NoMatch}/>
        </Switch>
      </Router>
    </Layout>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object,
}

export default Root
