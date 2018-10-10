import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { resetScore } from '../../actions'

import ResultsList from '../ResultsList'

class Results extends React.Component {
  state = {
    correct: 0,
    trivia: []
  }

  componentDidMount() {
    if(this.props.trivia.length === 0) this.props.history.push('/')
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      trivia: nextProps.trivia,
      correct: nextProps.correct,
    }
  }

  render() {
    const { correct, trivia } = this.state
    const { resetScore } = this.props

    return (
      <div className="text-center trivia-page">

        <section>
          <h3>You scored</h3>
          <h2>{correct} / {trivia.length}</h2>
        </section>

        <ResultsList trivia={trivia} />

        <Link to="/">
          <button
            type="button"
            className="btn btn-info btn-block text-uppercase"
            onClick={() => resetScore()}
          >Play Again!</button>
        </Link>

        <div className="block-20" />
      </div>
    )
  }
}

Results.propTypes = {
  correct: PropTypes.number.isRequired,
  resetScore: PropTypes.func.isRequired,
}

const mapStateToProps = ({ data: {trivia, correct} }) => {
  return {
    trivia,
    correct
  }
}

export default connect(mapStateToProps, { resetScore })(Results)
