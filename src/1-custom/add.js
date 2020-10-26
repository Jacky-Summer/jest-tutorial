function add(a, b) {
  return a + b
}

function minus(a, b) {
  return a - b
}

function expect(result) {
  return {
    toBe(actual) {
      if (result !== actual) {
        throw new Error(`与预期结果不相等。实际结果：${actual}，期望结果：${result}`)
      }
    },
  }
}

function test(desc, fn) {
  try {
    fn()
    console.log(`${desc}通过测试`)
  } catch (e) {
    console.log(`${desc}测试不通过 ${e}`)
  }
}

expect(add(1, 1)).toBe(2)
expect(minus(2, 1)).toBe(1)
// expect(add(2, 2)).toBe(3) // Error: 与预期结果不相等。实际结果：3，期望结果：4

test('加法测试', () => {
  expect(add(1, 1)).toBe(2)
})

test('减法测试', () => {
  expect(minus(2, 1)).toBe(1)
})
