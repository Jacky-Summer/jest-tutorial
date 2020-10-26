import { multiply } from './example'

test('测试乘法', () => {
  expect(multiply(4, 2)).toBe(8)
})

test('测试对象是否相等', () => {
  const data = { name: 'jacky' }
  data['age'] = 23
  expect(data).toEqual({ name: 'jacky', age: 23 })
})

test('匹配器', () => {
  const n = null
  const isTure = true
  const value = 3
  expect(n).toBeNull() // 只匹配 null
  expect(n).toBeDefined() // 只匹配 undefined
  expect(n).not.toBeUndefined() // 与 toBeUndefined 相反
  expect(isTure).toBeTruthy() // 匹配任何 if 语句为真

  expect(value).toBeGreaterThan(2)
  expect(value).toBeLessThan(5)
  expect(value).toBeLessThanOrEqual(3)
})
