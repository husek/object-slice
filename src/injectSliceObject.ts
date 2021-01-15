interface Object {
  slice(...params: string[]): object;
}

Object.prototype.slice = function (...keys: string[]): object {
  // @ts-ignore
  return keys.reduce((a, c) => ({ ...a, [c]: this[c] }), {})
}
