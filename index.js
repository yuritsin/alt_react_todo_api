const app = require('express')()
const todoApi = require('express-todo-api')

app
  .use(todoApi())
  .listen(4000)
