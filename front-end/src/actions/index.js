import { CACHE_URL } from './type'

export function cacheURL (URL) {
  return {
    type: CACHE_URL,
    URL,
  }
}

