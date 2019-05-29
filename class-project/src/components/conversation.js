import React from 'react'
import logo from './profile.svg'
import axios from 'axios'
import { saveContact } from '../action/conversation';
import Moment from 'react-moment';
 

export default class Conversation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      conversationList: [],
      myId: window.localStorage.getItem('id'),
      token: window.localStorage.getItem('token')
    }
  }
  handleClick (user) {
    let fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('conversation_id', this.props.conversationId)
    fdata.append('size', 10)
    fdata.append('date', new Date())
    console.log('fdatta', fdata)
    axios.post('https://api.paywith.click/conversation/details/', fdata)
      .then((response) => {
        console.log('response::::', response)
        this.props.dispatch(saveContact(
          response.data.data.messages,
          this.props.userName,
          this.props.avatar,
          this.props.conversationId
        )
      )
        
      })
      .catch((error) => {
        console.log('error::::', error)
      })
  }
  render () {
    return (
      <div className='conv'>
        <button 
          className='conv'
          onClick={() => this.handleClick()}
        >
          <div className='conversationImg' >
            <img src={this.props.avatar} alt={'logo'} className='personPic' />
          </div>
          <div className='contactInfo'>
            <div className='conversationInfo'>

              <span>
                {this.props.userName}
              </span>

              <span>
                <Moment format='YYYY/MM/DD'>
                  {this.props.date}
                </Moment>
              </span>
            </div >
            <div className='conversationInfo'>
              <span>
                {this.props.latestMessage}
              </span>
              <span>
                {this.props.unReadMsg}
              </span>
            </div>
          </div>
        </button>
      </div>
    )
  }
}
