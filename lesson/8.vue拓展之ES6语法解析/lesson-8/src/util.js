const foo = () => {
  console.log('foo')
}

const boo = () => {
  console.log('boo')
}

export {foo as fun, boo as bun, boo as cun}
