import type { MockItem } from './mock'
import { PullLoadMore } from '@mono-kit/ui/components'
import { useEffect } from 'react'
import { useMockData } from './useMockData'

function ScrollComponentPage() {
  const { items, isPending, fetchPrevPage } = useMockData()
  const loadMore = async () => {
    console.warn('loadMore')
    await fetchPrevPage()
  }

  return (
    <div className=" mt-[100px] m-auto">
      <PullLoadMore
        className="m-auto size-[600px] bg-accent"
        items={items}
        loadMore={loadMore}
        renderItem={item => <div className="h-20" key={item.id}>{item.title}</div>}
      />
    </div>
  )
}

export default ScrollComponentPage
