import axios from 'axios'

export const fetchData = () => {
  return axios.get('https://jsonplaceholder.typicode.com/todos/1')
}
// 执行该函数需要传入一个回调函数，然后回调函数传递一个参数并执行
export function runFn(fn) {
  fn('函数执行了')
}
