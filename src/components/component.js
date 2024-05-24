import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`app-component-container ${props.rootClassName} `}>
      <video
        src={props.videoSrc}
        loop="true"
        muted="true"
        poster="/img_cd8fbe6a7f03-1-700w.jpeg"
        autoPlay="true"
        className="app-component-video"
      ></video>
    </div>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
  videoSrc: '/img_0001%203.mov',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
  videoSrc: PropTypes.string,
}

export default AppComponent
