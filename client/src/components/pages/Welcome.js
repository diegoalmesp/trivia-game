import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchData } from '../../actions'

import Bold from '../common/Bold'

class Welcome extends React.Component {
  // state = {
  //   fetching: false,
  //   fetchError: false,
  // }

  // static getDerivedStateFromProps(nextProps) {
  //   return {
  //     fetching: nextProps.fetching,
  //     fetchError: nextProps.fetchError,
  //   }
  // }

  render() {
    const { fetchData } = this.props
    // const { fetchError } = this.state

    // if(fetchError)
    //   return (
    //     <div className="text-center trivia-page">
    //       <div>
    //         <p className="lead">There was an error fetching the data. Check the server is running and refresh this page.</p>
    //       </div>
    //     </div>
    //   )

    return (
      <div className="text-center trivia-page">
        <h1 className="display-4">Welcome to the Trivia Challenge!</h1>

        <h2>You will be presented with 10 <Bold>True</Bold> or <Bold>False</Bold> questions.</h2>
        <h3>Can you score 100%?</h3>

        <button
          type="button"
          className="btn btn-info btn-block btn-lg text-uppercase"
          onClick={() => fetchData() }
        >Begin</button>
      </div>
    )
  }
}

Welcome.propTypes = {
  fetchData: PropTypes.func.isRequired,
  // fetchError: PropTypes.bool
}

// const mapStateToProps = ({data: {fetchError}}) => {
//   return { fetchError }
// }

export default connect(null, { fetchData })(Welcome)