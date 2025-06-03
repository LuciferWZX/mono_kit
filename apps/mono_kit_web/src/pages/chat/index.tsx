import { ChatItem } from '@mono-kit/ui/components'

const messages = [
  {
    isBot: true,
    avatarUrl: 'https://github.com/shadcn.png',
    timestamp: new Date('2024-01-01T10:00:00'),
    content: '你好!我是AI助手,很高兴为你服务。',
  },
  {
    isBot: false,
    avatarUrl: 'https://github.com/user.png',
    timestamp: new Date('2024-01-01T10:01:00'),
    content: '你好!我想问一些问题。',
  },
  {
    isBot: true,
    avatarUrl: 'https://github.com/shadcn.png',
    timestamp: new Date('2024-01-01T10:02:00'),
    content: '当然可以,请问有什么我可以帮你的?',
  },
  {
    isBot: false,
    avatarUrl: 'https://github.com/user.png',
    timestamp: new Date('2024-01-01T10:03:00'),
    content: '我想了解一下人工智能的发展历史。',
  },
  {
    isBot: true,
    avatarUrl: 'https://github.com/shadcn.png',
    timestamp: new Date('2024-01-01T10:04:00'),
    content: '人工智能的发展可以追溯到20世纪50年代...',
  },
  {
    isBot: false,
    avatarUrl: 'https://github.com/user.png',
    timestamp: new Date('2024-01-01T10:05:00'),
    content: '那现在AI主要应用在哪些领域?',
  },
  {
    isBot: true,
    avatarUrl: 'https://github.com/shadcn.png',
    timestamp: new Date('2024-01-01T10:06:00'),
    content: 'AI目前在医疗、金融、教育等多个领域都有广泛应用。',
  },
  {
    isBot: false,
    avatarUrl: 'https://github.com/user.png',
    timestamp: new Date('2024-01-01T10:07:00'),
    content: '未来AI会替代人类工作吗?',
  },
  {
    isBot: true,
    avatarUrl: 'https://github.com/shadcn.png',
    timestamp: new Date('2024-01-01T10:08:00'),
    content: 'AI更多是辅助和增强人类能力,而不是完全替代。',
  },
  {
    isBot: false,
    avatarUrl: 'https://github.com/user.png',
    timestamp: new Date('2024-01-01T10:09:00'),
    content: '这样说我就放心了。',
  },
  {
    isBot: true,
    avatarUrl: 'https://github.com/shadcn.png',
    timestamp: new Date('2024-01-01T10:10:00'),
    content: '是的,AI和人类是相辅相成的关系。',
  },
  {
    isBot: false,
    avatarUrl: 'https://github.com/user.png',
    timestamp: new Date('2024-01-01T10:11:00'),
    content: '谢谢你的解答!',
  },
  {
    isBot: true,
    avatarUrl: 'https://github.com/shadcn.png',
    timestamp: new Date('2024-01-01T10:12:00'),
    content: '不客气,很高兴能帮到你。',
  },
  {
    isBot: false,
    avatarUrl: 'https://github.com/user.png',
    timestamp: new Date('2024-01-01T10:13:00'),
    content: '再见!',
  },
  {
    isBot: true,
    avatarUrl: 'https://github.com/shadcn.png',
    timestamp: new Date('2024-01-01T10:14:00'),
    content: '再见,祝你有愉快的一天!',
  },
  {
    isBot: false,
    avatarUrl: 'https://github.com/user.png',
    timestamp: new Date('2024-01-01T10:15:00'),
    content: '你也是!',
  },
  {
    isBot: true,
    avatarUrl: 'https://github.com/shadcn.png',
    timestamp: new Date('2024-01-01T10:16:00'),
    content: '谢谢 👋',
  },
  {
    isBot: false,
    avatarUrl: 'https://github.com/user.png',
    timestamp: new Date('2024-01-01T10:17:00'),
    content: '下次再聊!',
  },
  {
    isBot: true,
    avatarUrl: 'https://github.com/shadcn.png',
    timestamp: new Date('2024-01-01T10:18:00'),
    content: '好的,随时欢迎!',
  },
  {
    isBot: false,
    avatarUrl: 'https://github.com/user.png',
    timestamp: new Date('2024-01-01T10:19:00'),
    content: '👋',
  },
]

function ChatPage() {
  return (
    <div className="overflow-auto">
      {messages.map(message => (
        <ChatItem key={message.timestamp.toISOString()} {...message} />
      ))}
    </div>
  )
}
export default ChatPage
