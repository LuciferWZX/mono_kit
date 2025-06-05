import { ThemeProvider } from '@mono-kit/ui/components'
import { RouterProvider } from 'react-router'
import { useRouter } from '@/hooks'

function App() {
  const { router } = useRouter()
  return (
    <ThemeProvider defaultTheme="dark" storageKey="mono-kit-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
