import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { Provider } from 'react-redux'
import serialize from 'serialize-javascript'
// renderRoutes方法旨在把数组形式的路由规则转换为组件形式的路由规则
// import { useRoutes } from 'react-router'
// import routes from '../share/routes'
import App from '../share/pages/App'
// import { store } from '../store/store.server'

export default (req, store) => {
  // StaticRouter根据请求req的 url 匹配对应的路由获取页面组件渲染成字符串
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </Provider>
  )

  return `<html>
    <head>
      <title>React SSR Base</title>
    </head>
    <body>
      <div id='root'>${content}</div>
      <script>
        // 这里是为了避免前后端页面二次渲染出现错误提示
        // Warning: Did not expect server HTML to contain a <li> in <ul>.  
        window.INITIAL_STATE = ${serialize(store.getState())}
      </script>
      <script src='main.js'></script>
    </body>
  </html>`
}
