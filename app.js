const express= require('express')
const http= require('http')
const app = express()
const swaggerUI = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

http.createServer(app).listen(3000)

console.log(
    'Escuchando en: http://localhost:%s'
,3000)

app.use('/doc', 
swaggerUI.serve,
 swaggerUI.setup(swaggerFile))


require('./endpoints')(app)