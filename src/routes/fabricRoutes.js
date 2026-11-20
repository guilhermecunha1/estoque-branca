import express from 'express'
const router = express.Router()
import {
    create, 
    findAll,
    getById,
    update, 
    exclude
} from "../controllers/fabricController.js"


router.post('/', create)
router.get('/', findAll)
router.get('/:id', getById)
router.put('/:id', update),
router.delete('/:id', exclude)

export default router

