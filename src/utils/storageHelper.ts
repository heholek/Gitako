import { browserReady } from './features'

function noop(...args: any[]): any {}

const localStorage = browserReady
  ? browser.storage.local
  : {
      get: noop,
      set: noop,
    }

export function get(mapping: string[] | null): Promise<any> {
  return localStorage.get(mapping || undefined)
}

export function set(value: any): Promise<void> {
  return localStorage.set(value)
}
