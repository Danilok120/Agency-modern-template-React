import React from 'react'

import PropTypes from 'prop-types'

import './banner3.css'

const Banner3 = (props) => {
  return (
    <div className="banner3-container thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="banner3-image thq-img-ratio-16-9"
      />
      <div className="banner3-max-width thq-section-max-width">
        <div className="banner3-container1">
          <h2 className="banner3-title thq-heading-2">{props.heading1}</h2>
          <h3 className="banner3-text thq-heading-3">{props.content1}</h3>
        </div>
        <button type="button" className="thq-button-filled">
          {props.action1}
        </button>
      </div>
    </div>
  )
}

Banner3.defaultProps = {
  image1Alt: 'Creative Agency Banner Image',
  action1: 'Start a Project',
  heading1: 'Elevate Your Brand with Our Creative Agency',
  image1Src:
    'https://images.unsplash.com/photo-1634449278211-eca7f696940e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjUyNjQ1MXw&ixlib=rb-4.0.3&q=80&w=1080',
  content1:
    'We specialize in branding and design services to help your business stand out. Explore our featured work and client projects to see how we can bring your vision to life.',
}

Banner3.propTypes = {
  image1Alt: PropTypes.string,
  action1: PropTypes.string,
  heading1: PropTypes.string,
  image1Src: PropTypes.string,
  content1: PropTypes.string,
}

export default Banner3
