import { getConfig } from './example'

test('测试配置文件有没有更改', () => {
  expect(getConfig()).toMatchSnapshot()
})
