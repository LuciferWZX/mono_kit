import { SidebarInset, SidebarProvider } from '@mono-kit/ui/base/sidebar'
import { Outlet } from 'react-router'
import AppSidebar from '@/layouts/base/app-sidebar.tsx'

function BaseLayout() {
  console.warn('base layout')
  return (
    <div className="w-screen h-screen">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <Outlet />
        </SidebarInset>

      </SidebarProvider>
    </div>
  )
}
export default BaseLayout
