import React from 'react'
import send from '../images/send.png'
import { addNewMessage } from '../action/conversation'
import axios from 'axios'

export default class Chat extends React.Component {
  constructor () {
    super()
    this.state = {
      newMessage: '',
      token: window.localStorage.getItem('token')
    }
  }

  onChangeText (e) {
    this.setState({ newMessage: e.target.value })
  }

  sendNewMessage () {
    var conv = window.localStorage.getItem('conv')
    this.props.dispatch(addNewMessage(this.state.newMessage))
    let fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('text', this.state.newMessage)
    fdata.append('conversation_id', conv)
    console.log('fdata', fdata)
    axios.post('https://api.paywith.click/conversation/create/', fdata)
      .then(response => {
        console.log('response33...', response)
        this.setState({ newMessage: '' })
      })
      .catch(error => {
        console.log('error44...', error)
      })
  }
  render () {
    console.log('props', this.props)
    return (
      <div className='footer'>
        <input
          placeholder='write a message...'
          value={this.state.newMessage}
          onChange={(e) => this.onChangeText(e)} />
        <img
          src={send}
          onClick={() => this.sendNewMessage()}
          style={{ width: '20px' }} />
      </div>
    )
  }
}
