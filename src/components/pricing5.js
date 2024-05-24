import React from 'react'

import PropTypes from 'prop-types'

import './pricing5.css'

const Pricing5 = (props) => {
  return (
    <div className="pricing5-pricing8 thq-section-padding">
      <div className="pricing5-max-width thq-section-max-width">
        <div className="pricing5-section-title">
          <span className="pricing5-text thq-body-small">{props.content1}</span>
        </div>
        <div className="pricing5-content">
          <div className="pricing5-column1">
            <div className="pricing5-list">
              <div className="pricing5-list-item">
                <svg viewBox="0 0 1024 1024" className="pricing5-icon">
                  <path d="M896 682v-468h-768v468h768zM896 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-768q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h768z"></path>
                </svg>
                <div className="pricing5-container">
                  <h3 className="thq-heading-3">{props.plan1Feature11}</h3>
                  <span className="thq-body-small">
                    {props.plan1Feature111}
                  </span>
                </div>
              </div>
              <div className="pricing5-list-item01">
                <svg viewBox="0 0 1024 1024" className="pricing5-icon02">
                  <path d="M896 682v-468h-768v468h768zM896 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-768q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h768z"></path>
                </svg>
                <div className="pricing5-container1">
                  <h3 className="thq-heading-3">{props.plan1Feature114}</h3>
                  <span className="thq-body-small">
                    {props.plan1Feature1113}
                  </span>
                </div>
              </div>
              <div className="pricing5-list-item02">
                <svg viewBox="0 0 1024 1024" className="pricing5-icon04">
                  <path d="M896 682v-468h-768v468h768zM896 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-768q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h768z"></path>
                </svg>
                <div className="pricing5-container2">
                  <h3 className="thq-heading-3">{props.plan1Feature113}</h3>
                  <span className="thq-body-small">
                    {props.plan1Feature1112}
                  </span>
                </div>
              </div>
              <div className="pricing5-list-item03">
                <svg viewBox="0 0 1024 1024" className="pricing5-icon06">
                  <path d="M896 682v-468h-768v468h768zM896 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-768q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h768z"></path>
                </svg>
                <div className="pricing5-container3">
                  <h3 className="thq-heading-3">{props.plan1Feature112}</h3>
                  <span className="thq-body-small">
                    {props.plan1Feature1111}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="pricing5-column2 thq-card">
            <div className="pricing5-price-title">
              <p className="pricing5-text09 thq-body-large">{props.plan1}</p>
              <span className="thq-body-small">{props.plan1Detail}</span>
            </div>
            <div className="pricing5-divider"></div>
            <h3 className="pricing5-text11 thq-heading-3">
              {props.plan1Price}
            </h3>
            <button className="pricing5-button thq-button-filled">
              <span className="thq-body-small">{props.plan1Action}</span>
            </button>
            <div className="pricing5-divider1"></div>
            <div className="pricing5-list1">
              <div className="pricing5-list-item04">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="thq-body-small">{props.plan1Feature1}</span>
              </div>
              <div className="pricing5-list-item05">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="thq-body-small">{props.plan1Feature2}</span>
              </div>
              <div className="pricing5-list-item06">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="thq-body-small">{props.plan1Feature3}</span>
              </div>
              <div className="pricing5-list-item07">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="thq-body-small">{props.plan1Feature4}</span>
              </div>
              <div className="pricing5-list-item08">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="thq-body-small">{props.plan1Feature5}</span>
              </div>
              <div className="pricing5-list-item09">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="thq-body-small">{props.plan1Feature6}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Pricing5.defaultProps = {
  plan1Feature4: 'Delivery within 2 weeks',
  content1: 'Affordable Pricing Plans to Get You Started',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  plan1Feature111: 'Feature description goes here',
  plan1Feature3: '2 rounds of revisions',
  plan1Feature1113: 'Feature description goes here',
  heading1: 'Pricing plan',
  plan1Feature1111: 'Feature description goes here',
  plan1Feature1112: 'Feature description goes here',
  plan1Feature2: 'Brand style guide',
  plan1Feature6: 'Feature text goes here',
  plan1Detail: 'Includes logo design and brand guidelines',
  plan1Feature112: 'Feature text goes here',
  plan1Feature113: 'Feature text goes here',
  plan1Feature1: 'Custom logo design',
  plan1Feature5: 'Feature text goes here',
  plan1Feature11: 'Feature text goes here',
  plan1: 'Basic Package',
  plan1Price: '$500',
  plan1Action: 'Get Started',
  plan1Feature114: 'Feature text goes here',
}

Pricing5.propTypes = {
  plan1Feature4: PropTypes.string,
  content1: PropTypes.string,
  content2: PropTypes.string,
  plan1Feature111: PropTypes.string,
  plan1Feature3: PropTypes.string,
  plan1Feature1113: PropTypes.string,
  heading1: PropTypes.string,
  plan1Feature1111: PropTypes.string,
  plan1Feature1112: PropTypes.string,
  plan1Feature2: PropTypes.string,
  plan1Feature6: PropTypes.string,
  plan1Detail: PropTypes.string,
  plan1Feature112: PropTypes.string,
  plan1Feature113: PropTypes.string,
  plan1Feature1: PropTypes.string,
  plan1Feature5: PropTypes.string,
  plan1Feature11: PropTypes.string,
  plan1: PropTypes.string,
  plan1Price: PropTypes.string,
  plan1Action: PropTypes.string,
  plan1Feature114: PropTypes.string,
}

export default Pricing5
