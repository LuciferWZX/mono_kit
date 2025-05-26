import { createBrowserRouter } from 'react-router'
import RootLayout from '@/layouts'
import BaseLayout from '@/layouts/base'
import ChatPage from '@/pages/chat'

export function useRouter() {
  const router = createBrowserRouter([
    {
      Component: RootLayout,
      children: [
        {
          Component: BaseLayout,
          children: [
            {
              children: [
                { index: true, Component: ChatPage },
              ],
            },
          ],
        },
      ],
    },
  ])
  return {
    router,
  }
}
