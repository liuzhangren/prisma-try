const { get, post, put, del } = require('microrouter') 
const { json, send } = require('micro')
const { prisma } = require('../generated/prisma-client/index.js')
const { router } = require('microrouter') 
const cors = require('micro-cors')

const userCreate = async (req, res) => {
  const body = await json(req)
  const result = await prisma.createUser(body)
  send(res, 200, result)
}

const userFetchAll = async (req, res) => {
  const result = await prisma.users()
  send(res, 200, result)
}

const userDelete = async (req, res) => {
  const { id } = req.params
  const result = await prisma.deleteUser({
    id
  })
  send(res, 200, result)
}

const userUpdate = async (req, res) => {
  const { id } = req.params
  const body = await json(req)
  const result = await prisma.updateUser({
    where: { id },
    data: body
  })
  send(res, 200, result)
}

const myRouter = [
  post('/user', userCreate),
  get('/user', userFetchAll),
  del('/user/:id', userDelete),
  put('/user/:id', userUpdate)
]

module.exports = cors()(router.apply(null, myRouter)) 
 