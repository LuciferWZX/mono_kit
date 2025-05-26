import type { ComponentProps } from 'react'
import { Sidebar, SidebarContent, SidebarHeader } from '@mono-kit/ui/base/sidebar'

interface AppSidebarProps extends ComponentProps<typeof Sidebar> {

}
function AppSidebar(props: AppSidebarProps) {
  const { ...restProps } = props
  return (
    <Sidebar {...restProps}>
      <SidebarHeader>
        Header
      </SidebarHeader>
      <SidebarContent>
        xx
      </SidebarContent>
    </Sidebar>
  )
}
export default AppSidebar
