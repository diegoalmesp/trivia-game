import React from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'

const ResultsList = ({trivia}) => (
  <ul className="results-list">
    {trivia.map((t, i) => (
      <li key={i} className="text-white">
        <div className={`sign${t.answer_correct ? ' green' : ' text-muted'}`}>
          {t.answer_correct ? '+' : '-'}
        </div>
        <div className={`question${!t.answer_correct ? ' text-muted' : ''}`}>
          {ReactHtmlParser(t.question)}
        </div>
      </li>
    ))}
  </ul>
)

ResultsList.propTypes = {
  trivia: PropTypes.arrayOf(PropTypes.shape({
    answer_correct: PropTypes.bool.isRequired,
    question: PropTypes.string.isRequired
  })),
}

export default ResultsList
