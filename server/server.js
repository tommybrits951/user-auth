const express = require('express')
const cors = require('cors')
const server = express()
const helmet = require('helmet')
const router = require('./users/users-router')
server.use(helmet())
server.use(cors())
server.use(express.json())
server.use('/api/users', router)

server.listen(9000, () => {
    console.log("---server running on port 9000---")
})