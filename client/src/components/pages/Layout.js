import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Spinner from '../common/Spinner'

class Layout extends React.Component {
  render() {
    const { fetching, fetchError } = this.props

    return (
      <div className="container-fluid app-container">
        <div className="row">
          <div className="col"></div>
          <div className="col-12 col-md-6">

            {fetchError ? (
              <div className="text-center trivia-page">
                <div>
                  <p className="lead">There was an error fetching the data. Check the server is running and refresh this page.</p>
                </div>
              </div>
            ) : this.props.children}

            {/* {this.props.children} */}

          </div>
          <div className="col"></div>
          {fetching && <Spinner />}
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  fetching: PropTypes.bool,
  fetchError: PropTypes.bool
}

const mapStateToProps = ({data: {fetching, fetchError}}) => {
  return {
    fetching,
    fetchError
  }
}

export default connect(mapStateToProps)(Layout)
