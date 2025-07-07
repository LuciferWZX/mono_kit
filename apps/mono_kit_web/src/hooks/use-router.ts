import { createBrowserRouter } from 'react-router'
import RootLayout from '@/layouts'
import BaseLayout from '@/layouts/base'
import ChatPage from '@/pages/chat'
import ScrollComponentPage from '@/pages/scroll-component-page'
import WorkflowPage from '@/pages/workflow'

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
            {
              path: 'scroll-component-page',
              Component: ScrollComponentPage,
            },
          ],
        },
        {
          path: 'workflow',
          Component: WorkflowPage,
        },
      ],
    },
  ])
  return {
    router,
  }
}
