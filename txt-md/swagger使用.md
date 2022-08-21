### 在nodejs中使用swagger

#### 1、创建node项目

```js
// 0 项目初始化 
npm init -y 
// 1 安装依赖包
npm i express swagger-jsdoc swagger-ui-express --save

// 2 创建expres服务
const express = require('express')
const app = express()
// 路由
const userRoute = require('./routes/users.js')
app.use('/users',userRoute)
app.listen(3000, () => {
	console.log('服务启动， 请访问localhost:3000')
})

// 2.1路由
const express = require('express')
const router = express.Router()
router.get('/', (req,res) => {
	res.send('hello world')
})
module.exports = router

// 3启动项目，访问服务，请求地址'/users'
```

#### 2、添加swagger

```js
// 1 注册swagger模块
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

// 2 设置swagger配置项
const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'express-swagger项目',
			version: '1.0.0',
			description: `
				这是express-swagger项目的api
			`
		}
	},
    // 需要导入path模块
	apis:[path.join(__dirname,'/routes/*.js')]
}
// 3 添加swagger访问路由
const swaggerSpec = swaggerJsdoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// 4 启动项目，访问服务，请求地址'/api-docs'，可以看到swagger已经可以访问了。
```

#### 3、接口添加swagger注释