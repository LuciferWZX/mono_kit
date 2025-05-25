// 获取对象的原型字符串表示
const opt = Object.prototype.toString

// 判断是否为 File 类型
export function isFile(obj: any): obj is File {
  return opt.call(obj) === '[object File]'
}

// 判断是否为 Blob 类型
export function isBlob(obj: any): obj is Blob {
  return opt.call(obj) === '[object Blob]'
}

// 判断是否为十六进制颜色值 (#fff 或 #ffffff)
function isHex(color: any) {
  return /^#[a-f0-9]{3}$|#[a-f0-9]{6}$/i.test(color)
}

// 判断是否为 RGB 颜色值 (rgb(255,255,255))
function isRgb(color: any) {
  return /^rgb\((\s*\d+\s*,?){3}\)$/.test(color)
}

// 判断是否为 RGBA 颜色值 (rgba(255,255,255,0.5))
function isRgba(color: any) {
  return /^rgba\((\s*\d+\s*,\s*){3}\d(\.\d+)?\s*\)$/.test(color)
}

// 判断是否为有效的颜色值(支持 Hex、RGB、RGBA)
export function isColor(color: any): boolean {
  return isHex(color) || isRgb(color) || isRgba(color)
}

// 判断是否为 null 或 undefined
export function isNullOrUndefined(obj: any): boolean {
  return obj === null || obj === undefined
}
