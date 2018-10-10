import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactHtmlParser from 'react-html-parser'

import { fetchData, correctAnswer, incorrectAnswer, finishGame } from '../../actions'

import TriviaCard from '../TriviaCard';

class App extends Component {
  state = {
    trivia: [],
    current: 0,
  }

  componentDidMount() {
    if(this.props.trivia.length === 0) this.props.history.push('/')
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      trivia: nextProps.trivia,
    }
  }

  onResponse = answer => {
    let { trivia, current } = this.state
    const card = trivia[current];
    const { correctAnswer, incorrectAnswer, finishGame } = this.props

    if(card.correct_answer === answer)
      correctAnswer(current)
    else incorrectAnswer(current)

    if(current >= trivia.length - 1) {
      // game finished
      finishGame()
    } else {
      this.setState({ current: ++current })
    }
  }

  render() {
    const { trivia, current } = this.state
    let parsedTrivia = {}

    // parse the fields with special characters to be displayed correctly
    // for this implementation, only `question` is required
    if(trivia.length)
      parsedTrivia = {
        ...trivia[current],
        question: ReactHtmlParser(trivia[current].question)[0]
      }

    return (
      <div className="text-center">
        <div>
          {trivia.length > 0 &&
            <TriviaCard
              trivia={parsedTrivia}
              onResponse={this.onResponse}
            >
              <span className="text-secondary">{current + 1} of {trivia.length}</span>
            </TriviaCard>
          }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  trivia: PropTypes.array.isRequired,
  fetchData: PropTypes.func.isRequired,
  correctAnswer: PropTypes.func.isRequired,
  incorrectAnswer: PropTypes.func.isRequired,
  finishGame: PropTypes.func.isRequired,
}

const mapStateToProps = ({ data }) => {
  return data
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchData,
  correctAnswer,
  incorrectAnswer,
  finishGame,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
