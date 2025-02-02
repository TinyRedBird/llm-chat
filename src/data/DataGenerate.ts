import type { Message, Conversation, SelectedSummary } from '../data/DataType'
// 生成多个对话数据
export const generateMessages = (numMessages: number): Array<Message> => {
  const messages: Array<Message> = []
  for (let i = 1; i <= numMessages; i++) {
    messages.push({
      messageId: `msg${i}`,
      sender: i % 2 === 0 ? 'model' : 'user',
      content: `This is message number ${i}`,
      timestamp: new Date().toISOString(),
    })
  }
  return messages
}

export const generateConversations = (numConversations: number): Array<Conversation> => {
  const conversations: Array<Conversation> = []
  for (let i = 1; i <= numConversations; i++) {
    conversations.push({
      ConversationId: `conv${i}`,
      title: `Conversation ${i}`,
      content: generateMessages(5), // 每个对话包含 5 条消息
    })
  }
  return conversations
}

export const generateSelectedSummaries = (numSummaries: number): Array<SelectedSummary> => {
  const SelectedSummaries: Array<SelectedSummary> = []
  for (let i = 1; i <= numSummaries; i++) {
    SelectedSummaries.push({
      title: `conv${i}`,
      subsentence: `This is message number ${i}`,
    })
  }
  return SelectedSummaries
}
// 生成 3 个对话
export const conversations = generateSelectedSummaries(3)
console.log(conversations)
