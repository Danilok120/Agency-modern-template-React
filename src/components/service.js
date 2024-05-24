import React from 'react'

import PropTypes from 'prop-types'

import './service.css'

const Service = (props) => {
  return (
    <div className={`service-service ${props.rootClassName} `}>
      <h3 className="service-title">{props.title}</h3>
      <span className="service-description">
        <span className="">Да, я и это умею!</span>
        <br className=""></br>
      </span>
    </div>
  )
}

Service.defaultProps = {
  description1: '',
  title: 'Тату',
  rootClassName: '',
}

Service.propTypes = {
  description1: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Service
