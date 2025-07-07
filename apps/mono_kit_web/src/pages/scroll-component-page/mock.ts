// 定义数据项的类型
export interface MockItem {
  id: string
  title: string

}
const dataMap = new Map<number, MockItem[]>()

// 生成第3页到第20页的数据
for (let page = 1; page <= 20; page++) {
  const items: MockItem[] = []
  for (let i = 1; i <= 10; i++) {
    const itemIndex = (page - 1) * 10 + i
    items.push({
      id: itemIndex.toString(),
      title: `项目 ${itemIndex}`,
    })
  }
  dataMap.set(page, items)
}
console.warn(dataMap)

export async function generateItems(_index?: number): Promise<{ page: number, items: MockItem[] }> {
  // 模拟耗时3秒
  await new Promise(resolve => setTimeout(resolve, 1000))

  // 生成模拟数据项
  if (_index !== undefined) {
    // 如果传入了 _index，从 map 中获取对应的值
    return {
      page: _index,
      items: dataMap.get(_index) || [],
    }
  }
  else {
    // 如果没传 _index，找到 map 最大的 key 并返回对应的值
    const maxKey = Math.max(...dataMap.keys())
    return {
      page: maxKey,
      items: dataMap.get(maxKey) || [],
    }
  }
}

export function getPrevItems(_startIndex: number): MockItem[] {
  // 获取之前的项目数据
  const prevItems: MockItem[] = []
  for (let i = 0; i < 5; i++) {
    prevItems.push({
      id: `prev-item-${_startIndex}-${i}`,
      title: `之前的项目 ${_startIndex}-${i}`,

    })
  }
  return prevItems
}
