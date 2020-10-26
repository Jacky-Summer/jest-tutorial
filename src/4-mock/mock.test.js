import axios from 'axios'
import { fetchData, runFn } from './example'
jest.mock('axios')

test('测试请求接口', async () => {
  axios.get.mockResolvedValue({ data: 'hello' }) // 返回假数据 { data: 'hello' } 用于测试
  await fetchData().then(data => {
    expect(data).toEqual({ data: 'hello' })
  })
})

test('函数被调用了', () => {
  const fn = jest.fn()
  runFn(fn) // 调用函数

  expect(fn).toHaveBeenCalled() // 期望fn被调用了
  expect(fn).toHaveBeenLastCalledWith('函数执行了')
})
