import { Button } from '@mono-kit/ui/base/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@mono-kit/ui/base/tabs'
import { Menu } from '@mono-kit/ui/icon/lucide'
import { Panel } from '@xyflow/react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { CloseButton } from './CloseButton'
import { NodesListContent } from './nodes'

function ExpandButton({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) {
  return (
    <motion.div
      key="button"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2 }}
    >
      <Button
        size="icon"
        onClick={() => setIsOpen(true)}
        className="rounded-full"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Menu size={18} />
        </motion.div>
      </Button>
    </motion.div>
  )
}

function VariablePanelContent({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) {
  const items = [
    {
      value: 'nodes',
      label: '节点',
      content: <NodesListContent />,
    },
    {
      value: 'variables',
      label: '变量',
      content: <div>variables</div>,
    },
  ]
  return (
    <motion.div
      key="panel"
      initial={{ opacity: 0, scale: 0.8, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -20 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 25,
        duration: 0.3,
      }}
      className="w-60 h-[80vh] border bg-sidebar rounded-lg shadow-lg p-0 relative"
    >
      <CloseButton className="absolute top-0 -right-10" onClick={() => setIsOpen(false)} />
      <Tabs defaultValue="nodes" className="items-center h-full ">
        <div className="w-full px-2 pt-2">
          <TabsList className="w-full">
            {items.map((item, index) => (
              <TabsTrigger className="w-full" key={index} value={item.value}>{item.label}</TabsTrigger>
            ))}
          </TabsList>
        </div>
        {items.map((item, index) => (
          <TabsContent className="size-full overflow-auto" key={index} value={item.value}>{item.content}</TabsContent>
        ))}
      </Tabs>
    </motion.div>
  )
}

export function VariablePanel() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Panel position="top-left">
      <AnimatePresence mode="wait">
        {isOpen
          ? (
              <VariablePanelContent setIsOpen={setIsOpen} />
            )
          : (
              <ExpandButton isOpen={isOpen} setIsOpen={setIsOpen} />
            )}
      </AnimatePresence>
    </Panel>
  )
}
