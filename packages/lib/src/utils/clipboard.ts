// 复制文本到剪贴板
// 源码来自: https://github.com/feross/clipboard-copy/blob/master/index.js

export default async function clipboard(text: string) {
  // 优先使用 Clipboard API
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      // 仅在执行成功时返回
      return
    }
    catch (err) {
      console.error(err ?? new DOMException('The request is not allowed', 'NotAllowedError'))
    }
  }

  // 如果 Clipboard API 不可用,则使用 execCommand 方式
  // 创建一个临时的 span 元素存储要复制的文本
  const span = document.createElement('span')
  span.textContent = text

  // 设置空白符处理方式为保留格式
  span.style.whiteSpace = 'pre'

  // 将 span 添加到页面
  document.body.appendChild(span)

  // 创建选区
  const selection = window.getSelection()
  const range = window.document.createRange()
  selection.removeAllRanges()
  range.selectNode(span)
  selection.addRange(range)

  // 执行复制命令
  let success = false
  try {
    success = window.document.execCommand('copy')
  }
  catch (err) {
    console.error('error', err)
  }

  // 清理选区和临时元素
  selection.removeAllRanges()
  window.document.body.removeChild(span)

  // 根据复制结果返回 Promise
  return success
    ? Promise.resolve()
    : Promise.reject(new DOMException('The request is not allowed', 'NotAllowedError'))
}
