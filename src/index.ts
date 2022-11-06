import express from 'express'

import CreateUser from './router/CreateUser'
import ExpressRouterAdapter from './router/ExpressRouterAdapter'

const app = express()
app.use(express.json())

app.post('/signup', ExpressRouterAdapter.adapt(new CreateUser))

app.listen(3000, () => console.log('Hello World'))

export default app
