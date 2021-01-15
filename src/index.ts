const sliceObject = (incomingObject: { [index: string]: any }, ...keys: string[]): object => {
  return keys.reduce((a, c) => ({ ...a, [c]: incomingObject[c] }), {});
};

export default sliceObject;