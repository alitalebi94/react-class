import { connect } from 'react-redux'
import ChatScreen from '../components/ChatScreen'

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const mapStateToProps = state => {
  console.log('3::', state)
  return {
    newMessage: state.newMessage,
    messages: state.messages
  }
}

const ChatScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatScreen)

export default ChatScreenContainer
