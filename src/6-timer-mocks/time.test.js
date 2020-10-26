import { timerGame } from './example'

jest.useFakeTimers()

test('测试一定时间后执行函数', () => {
  const fn = jest.fn()
  timerGame(fn)
  jest.advanceTimersByTime(3000) // 把时间提前了三秒
  expect(fn).toBeCalled() // 函数被调用了
  expect(fn).toHaveBeenCalledTimes(1) // 函数被执行了1次
})
