import React from 'react'
import PropTypes from 'prop-types'

const TriviaCard = ({
  trivia: {
    correct_answer,
    incorrect_answers,
    category,
    question
  }, onResponse, children}) => {
  const responses = [correct_answer, ...incorrect_answers].sort()
  return (
    <div className="trivia-page">
      <h3>{category}</h3>

      <div>
        <div className="trivia-question-container">
          <p className="text-monospace">{question}</p>
        </div>

        {children}
      </div>

      <div className="trivia-button-container">
        {responses.map((response, i) => 
          <button
            key={i}
            type="button"
            className="btn btn-info btn-lg text-uppercase"
            onClick={() => {onResponse(response)}}>
            {response}
          </button>
        )}
      </div>
    </div>
  )
}

TriviaCard.propTypes = {
  trivia: PropTypes.shape({
    category: PropTypes.string.isRequired,
    correct_answer: PropTypes.string.isRequired,
    incorrect_answers: PropTypes.array.isRequired,
    question: PropTypes.string.isRequired,
    type: PropTypes.string
  })
}

export default TriviaCard
