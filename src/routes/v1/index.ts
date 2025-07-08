import { Router } from 'express'
const router = Router()
import { urlCreate } from '@/controller/v1/urlCreate.controller'

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'API is live..',
        status: 'ok',
        version: '1.0.0',
        timestamp: new Date().toISOString()
    })
})

router.post('/create', urlCreate)
export default router
