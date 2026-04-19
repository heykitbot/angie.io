let _cyclerIndex = 0

export function nextFrom<T>(items: T[]): T | undefined {
  if (!items || items.length === 0) return undefined
  const item = items[_cyclerIndex % items.length]
  _cyclerIndex = (_cyclerIndex + 1) % items.length
  return item
}

export function peekFrom<T>(items: T[]): T | undefined {
  if (!items || items.length === 0) return undefined
  return items[_cyclerIndex % items.length]
}

export function resetCycler() {
  _cyclerIndex = 0
}
