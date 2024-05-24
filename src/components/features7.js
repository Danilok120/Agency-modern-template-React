import React from 'react'

import PropTypes from 'prop-types'

import './features7.css'

const Features7 = (props) => {
  return (
    <div className="features7-layout226 thq-section-padding">
      <div className="features7-max-width thq-grid-3 thq-section-max-width">
        <div className="thq-flex-column">
          <span className="features7-over-title1 thq-body-small">
            {props.feature1Slogan}
          </span>
          <div className="thq-flex-column features7-content">
            <h3 className="features7-title1 thq-heading-3">
              {props.feature1Title}
            </h3>
            <span className="features7-description1 thq-body-small">
              {props.feature1Description}
            </span>
          </div>
        </div>
        <div className="thq-flex-column">
          <span className="features7-over-title2 thq-body-small">
            {props.feature2Slogan}
          </span>
          <div className="thq-flex-column features7-content1">
            <strong className="features7-title2 thq-heading-3">
              {props.feature2Title}
            </strong>
            <span className="features7-description2 thq-body-small">
              {props.feature2Description}
            </span>
          </div>
        </div>
        <div className="thq-flex-column">
          <span className="features7-over-title3 thq-body-small">
            {props.feature3Slogan}
          </span>
          <div className="thq-flex-column features7-content2">
            <strong className="features7-title3 thq-heading-3">
              {props.feature3Title}
            </strong>
            <span className="features7-description3 thq-body-small">
              {props.feature3Description}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features7.defaultProps = {
  feature1Title: 'Unique Tattoo Designs',
  feature3Title: 'Royal Endorsement',
  feature2Slogan: 'Crafting visual identities',
  feature1Slogan: 'Turning skin into canvas',
  feature2Title: 'Artistic Brand Guidelines',
  feature3Slogan: 'Fit for royalty',
  feature1Description:
    "Explore a wide range of unique and custom tattoo designs that transform your body into a masterpiece. Our artist's talent and creativity will bring your vision to life.",
  feature3Description:
    "Our artist's exceptional skills have garnered a royal endorsement, solidifying our reputation for delivering top-notch tattoo and art services. Join our satisfied clients and experience the royal treatment.",
  feature2Description:
    'Discover our portfolio of brand guideline projects that showcase our expertise in creating visually appealing and cohesive brand identities. From logos to color palettes, we ensure your brand stands out.',
}

Features7.propTypes = {
  feature1Title: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2Slogan: PropTypes.string,
  feature1Slogan: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3Slogan: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2Description: PropTypes.string,
}

export default Features7
