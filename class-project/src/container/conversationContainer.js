import { connect } from 'react-redux'
import Conversation from '../components/conversation'

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const conversationContainer = connect(
  mapDispatchToProps
)(Conversation)

export default conversationContainer
