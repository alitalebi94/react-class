import React from 'react'
import logo from './profile.svg';

export default class Conversation extends React.Component {
  render() {
    return(     
        <div className='conv'>
          <button className='conv'>
          <img src={logo} alt={"logo"} className="personPic"/>
          <p className="NameAndDate">
            &nbsp;&nbsp;
            <span>
              {this.props.name}
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>
              {this.props.date}
            </span>
          </p>
          <div>
            <span>
              {this.props.latestMessage}
            </span>
          </div>
          </button>
        </div>
    )
  }
}