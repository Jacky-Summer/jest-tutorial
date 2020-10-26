import { fetchData } from './example'

test('测试 async await', async () => {
  const data = await fetchData()
  expect(data.data.id).toBe(1)
})

test('测试 Promise', () => {
  return fetchData().then(data => {
    expect(data.data.id).toBe(1)
  })
})
