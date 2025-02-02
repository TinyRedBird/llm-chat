export interface Message {
  messageId: string
  sender: 'user' | 'model'
  content: string
  timestamp: string
}

export interface Conversation {
  ConversationId: string
  title: string
  content: Array<Message>
}

export interface SelectedSummary {
  title: string
  subsentence:string
}
