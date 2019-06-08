import React from 'react'
import ConversationContainer from '../container/conversationContainer'
import axios from 'axios'
import { saveConversationList } from '../action/conversation'

export default class ConversationList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      conversationList: [],
      myId: window.localStorage.getItem('id'),
      token: window.localStorage.getItem('token'),
      suggestedUsers: []
    }
    this.handleRequest = this.handleRequest.bind(this)
  }

  componentDidMount () {
    const token = this.state.token
    axios.get('https://api.paywith.click/conversation/', {
      params: {
        token: token
      }
    })
      .then(response => {
        console.log('this:::::', this)
        this.props.dispatch(saveConversationList(response.data.data.conversation_details))
      })
      // conversation_details is an array
      .catch(error => {
        console.log(error)
      })
  }

  handleRequest () {
    const token = window.localStorage.getItem('token')
    axios.get('https://api.paywith.click/conversation/', {
      params: {
        token: token
      }
    })
      .then(response => {
        this.props.dispatch(saveConversationList(response.data.data.conversation_details))
      })
      .catch(error => {
        console.log('1111111111', error)
      })
      console.log('11111', this.props.ConversationList) 
  }

  handleChange (e) {
    // let data = {
    //   token: this.state.token,
    //   query: e.target.value,
    //   size: 4,
    // }
    let fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('query', e.target.value)
    fdata.append('size', 4)
    console.log('fdata', fdata)
    axios.post('https://api.paywith.click/explore/search/contacts/', fdata)
      .then(response => {
        console.log('response...', response)
        this.setState({ suggestedUsers: response.data.data.users })
      })
      .catch(error => {
        console.log('error...', error)
      })
  }

  handleClick (user) {
    let fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('user_id', user.id)
    console.log('fdatta', fdata)
    axios.post('https://api.paywith.click/conversation/', fdata)
      .then((response) => {
        console.log('response::::', response)
      })
      .catch((error) => {
        console.log('error::::', error)
      })
  }
  render () {
    console.log('props:::::', this.state.myId)
    console.log('c::', this.props.conversationList)
    console.log('1111111111', this.props.user)
    return (
      <div className='ConversationList'>
        <div>
          <input
            className='search'
            placeholder='type a name...'
            onChange={(e) => this.handleChange(e)}
          />
          { this.state.suggestedUsers.map((user, index) => {
            return (

              <button className='suggest'
                onClick={() => this.handleClick(user)}
              >
                <p className='suggest'><img src={user.avatar_url} className='suggestedAvatar' /> {user.email}</p>
              </button>
            )
          })

          }

        </div>
        { this.props.conversationList.map((conversation, index) => {
          return (
            conversation.users.map((user, idx) => {
              if (user.id != this.state.myId) {
                return (
                  <ConversationContainer
                    key={index}
                    name={user.name}
                    date={conversation.latest_message_date}
                    latestMessage={conversation.latest_message}
                    userName={user.email}
                    unReadMsg={conversation.unReadMsg}
                    token={this.state.token}
                    conversationId={conversation.id}
                    avatar={user.avatar_url}
                  />
                )
              }
            })
          )
        })

        }
      </div>
    )
  }
}
