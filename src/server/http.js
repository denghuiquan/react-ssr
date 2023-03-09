import express from 'express'

const app = express()
// 设置静态资源请求目录
app.use(express.static('public'))

app.listen(3000, () => console.log('app is running on port 3000'))

export default app
