import React from 'react'
import PropTypes from 'prop-types'

const Bold = props => (
  <span className={`text-${props.level} font-weight-bold`}>{props.children}</span>
)

Bold.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.string,
}

Bold.defaultProps = {
  level: 'info'
}

export default Bold
