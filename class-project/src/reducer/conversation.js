
const INIT = {
  newMessage: '',
  messages: [],
  conversationList: [],
  user: '',
  conversationId: '',
  avatar: ''
}
var myId = window.localStorage.getItem('id')
function conversation (state = INIT, action) {
  switch (action.type) {
    case 'SAVE_NEW_MESSAGE':
      console.log('1::', state)
      return { ...state,
        newMessage: action.payload,
        messages: [...state.messages, { sender: { id: myId }, text: action.payload }]
      }
    case 'SAVE_CONVERSATION_LIST':
      return {
        ...state,
        conversationList: action.payload
      }
    case 'SAVE_CONTACT':
      return {
        ...state,
        messages: action.payload,
        user: action.user,
        avatar: action.avatar
      }
    default:
      console.log('2::', state)
      return state
  }
}

export default conversation
