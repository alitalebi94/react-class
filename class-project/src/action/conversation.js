export const addNewMessage = (newMessage) => ({
  type: 'SAVE_NEW_MESSAGE',
  payload: newMessage
})

export const saveConversationList = (conversationList) => ({
  type: 'SAVE_CONVERSATION_LIST',
  payload: conversationList
})

export const saveContact = (messages, user, avatar, conversationId) => ({
  type: 'SAVE_CONTACT',
  payload: messages,
  user: user,
  avatar: avatar,
  conversationId: conversationId
})
