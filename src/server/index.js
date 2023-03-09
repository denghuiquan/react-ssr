import routes from '../share/routes'
import { createStore } from '../store/store.server'
import app from './http'
import render from './render'
import { matchRoutes } from 'react-router'

app.get('*', async (req, res) => {
  // 接收到请求后创建服务器端store
  const store = createStore()
  // 获取请求地址
  // 获取路由配置信息
  // 根据地址匹配出要渲染的组件的路由对象信息
  const promises = matchRoutes(routes, req.path).map(({ route }) => {
    // 如何才能知道数据什么时候获取完成
    if (route.loadData) return route.loadData(store)
  })
  // 数据获取完成后将渲染结果响应给客户端
  Promise.all(promises).then(() => {
    res.send(render(req, store)) // 把req传递给渲染函数render，以便可以进行路由支持
  })
})
