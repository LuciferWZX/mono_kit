import { isValidElement } from 'react'
import ReactDOM from 'react-dom'

const opt = Object.prototype.toString

export function isArray(obj: any): obj is any[] {
  return opt.call(obj) === '[object Array]'
}

export function isObject(obj: any): obj is { [key: string]: any } {
  return opt.call(obj) === '[object Object]'
}

export function isString(obj: any): obj is string {
  return opt.call(obj) === '[object String]'
}

export function isNumber(obj: any): obj is number {
  // eslint-disable-next-line no-self-compare
  return opt.call(obj) === '[object Number]' && obj === obj
}

export function isRegExp(obj: any) {
  return opt.call(obj) === '[object RegExp]'
}

export function isFile(obj: any): obj is File {
  return opt.call(obj) === '[object File]'
}

export function isBlob(obj: any): obj is Blob {
  return opt.call(obj) === '[object Blob]'
}

function isHex(color: any) {
  return /^#[a-fA-F0-9]{3}$|#[a-fA-F0-9]{6}$/.test(color)
}

function isRgb(color: any) {
  return /^rgb\((\s*\d+\s*,?){3}\)$/.test(color)
}

function isRgba(color: any) {
  return /^rgba\((\s*\d+\s*,\s*){3}\s*\d(\.\d+)?\s*\)$/.test(color)
}
export function isColor(color: any): boolean {
  return isHex(color) || isRgb(color) || isRgba(color)
}
export function isUndefined(obj: any): obj is undefined {
  return obj === undefined
}

export function isNull(obj: any): obj is null {
  return obj === null
}

export function isNullOrUndefined(obj: any): boolean {
  return obj === null || obj === undefined
}

export function isFunction(obj: any): obj is (...args: any[]) => any {
  return typeof obj === 'function'
}

export function isEmptyObject(obj: any): boolean {
  return isObject(obj) && Object.keys(obj).length === 0
}

export function isEmptyReactNode(content: any, trim?: boolean): boolean {
  if (content === null || content === undefined || content === false) {
    return true
  }
  if (typeof content === 'string' && (trim ? content.trim() === '' : content === '')) {
    return true
  }
  return false
}

export function isExist(obj: any): boolean {
  return obj || obj === 0
}

export function isWindow(el: any): el is Window {
  return el === window
}

export function isBoolean(value: any): value is boolean {
  return typeof value === 'boolean'
}

export function isReactComponent(element: any): boolean {
  return element && isValidElement(element) && typeof element.type === 'function'
}

export function isClassComponent(element: any): boolean {
  return isReactComponent(element) && !!element.type.prototype?.isReactComponent
}

// element 是合成的 dom 元素或者字符串，数字等
export function isDOMElement(element: any): boolean {
  return isValidElement(element) && typeof element.type === 'string'
}

export const isReact18 = Number(ReactDOM.version?.split('.')[0]) > 17
export const isReact19 = Number(ReactDOM.version?.split('.')[0]) > 18
