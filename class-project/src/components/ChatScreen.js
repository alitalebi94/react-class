import React from 'react'

export default class ChatScreen extends React.Component {
  constructor () {
    super()
    this.state = {
      myId: window.localStorage.getItem('id'),
      messages: []
    }
  }
  render () {
    console.log('props2:::::', this.props.messages)
    return (
      <div className='screen'>
        {this.props.messages.map((item, index) => {
          if (item.sender.id == this.state.myId) {
            console.log('props3:::::', item)
            return (
              <div className='sender'>
                <span className='message'>{item.text}</span>
              </div>
            )
          } else {
            return (
              <div className='receiver'>
                <span className='message'>{item.message}</span>
              </div>
            )
          }
        }

        )

        }
        {/* <div className='receiver'>
          <span className = 'message'>salammm</span>
        </div> */}

      </div>
    )
  }
}
