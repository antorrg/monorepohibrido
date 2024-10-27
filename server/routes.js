import express from 'express'
import ctr from './controller.js'

const routes = express.Router()

routes.get('/api/v1/characters', ctr.getCharacters)

routes.get('/api/v1/characters/:id', ctr.charById)


export default routes