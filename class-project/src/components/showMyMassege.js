import React from 'react'

export default class showMyMassege extends React.Component {
  render () {
    return (
      <div >

        <div >
          <span className='massageSpan'>
            {this.props.latestMessage}
          </span>
        </div>
        <p className='massegeDate'>
            &nbsp;&nbsp;
          <span>
            {this.props.date}
          </span>
        </p>
      </div>
    )
  }
}
