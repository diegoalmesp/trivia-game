import React from 'react'
import PropTypes from 'prop-types'
import config from '../../config'

const Spinner = ({spinner}) => {
  return (
    <div className="spinner-bg">
    {{
      'circle': <div className="lds-circle"></div>,
      'ring': <div className="lds-ring"><div></div><div></div><div></div><div></div></div>,
      'ellipsis': <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>,
      'ripple': <div className="lds-ripple"><div></div><div></div></div>
    }[spinner]}
    </div>
  )
}

Spinner.defaultProps = {
  spinner: config.SPINNER
}

Spinner.propTypes = {
  spinner: PropTypes.oneOf(['circle', 'ring', 'ellipsis', 'ripple']),
}

export default Spinner
