import React from 'react'

import PropTypes from 'prop-types'

import './gallery7.css'

const Gallery7 = (props) => {
  return (
    <div
      className={`gallery7-gallery3 thq-section-padding ${props.rootClassName} `}
    >
      <div className="gallery7-max-width">
        <div className="gallery7-section-title">
          <h2 className="gallery7-text thq-heading-2">{props.heading1}</h2>
          <span className="gallery7-text1 thq-body-large">
            {props.content1}
          </span>
        </div>
        <div className="gallery7-container">
          <div className="gallery7-content">
            <div className="gallery7-container1">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="gallery7-image1 thq-img-ratio-1-1"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="gallery7-image2 thq-img-ratio-1-1"
              />
            </div>
            <div className="gallery7-container2">
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="gallery7-image3 thq-img-ratio-4-3"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="gallery7-image4 thq-img-ratio-1-1"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="gallery7-image5 thq-img-ratio-4-3"
              />
            </div>
            <div className="gallery7-container3">
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="gallery7-image6 thq-img-ratio-1-1"
              />
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="gallery7-image7 thq-img-ratio-1-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery7.defaultProps = {
  content1:
    'Take a look at some of our recent logo design and brand guideline projects.',
  rootClassName: '',
  image6Alt: 'Brand style guide for Client C',
  image7Alt: 'Logo concepts for Client D',
  image7Src:
    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjUyNzUxOXw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Src:
    'https://images.unsplash.com/photo-1601200190687-4fec4d91c388?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjUyNzUyMHw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt: 'Logo redesign for Company Z',
  image4Alt: 'Brand identity for Startup A',
  image6Src:
    'https://images.unsplash.com/photo-1502404827602-7de17eb08b64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjUyNzUyMHw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Src:
    'https://images.unsplash.com/photo-1636247499734-893da2bcfc1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjUyNzUyMXw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Src:
    'https://images.unsplash.com/photo-1630476387445-00ea18345d90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjUyNzUyMXw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Src:
    'https://images.unsplash.com/photo-1509897693578-e9237fb35e3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjUyNzUxOXw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Logo design for Company X',
  image5Src:
    'https://images.unsplash.com/photo-1665913240785-3429dd126085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjUyNzUyMHw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Alt: 'Brand guidelines for Company Y',
  heading1: 'Featured Work',
  image5Alt: 'Logo variations for Client B',
}

Gallery7.propTypes = {
  content1: PropTypes.string,
  rootClassName: PropTypes.string,
  image6Alt: PropTypes.string,
  image7Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image4Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image1Src: PropTypes.string,
  image2Src: PropTypes.string,
  image3Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image5Src: PropTypes.string,
  image2Alt: PropTypes.string,
  heading1: PropTypes.string,
  image5Alt: PropTypes.string,
}

export default Gallery7
