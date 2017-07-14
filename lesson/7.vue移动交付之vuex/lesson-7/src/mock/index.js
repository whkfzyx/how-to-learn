import Axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(Axios)

mock.onGet('/todo-list').reply(200, require('./list.json'))
mock.onPost('/login').reply(config => {
  console.log(config)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // promise拒绝请求
      if (config.data.username === 'error') {
        reject({error: '网络错误！'})
      }
      // promise通过请求
      if (config.data.username === 'admin' && config.data.password === '123456') {
        resolve([200, { success: true }])
      } else {
        resolve([200, {
          success: false,
          errorMsg: '账号密码错误！'
        }])
      }
    }, 1000)
  })
})
// 请求失败测试
mock.onPost().reply(500)

export default mock
