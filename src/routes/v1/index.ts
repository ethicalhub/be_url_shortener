import { Router } from 'express'
const router = Router()
import { createShortUrlController } from '@/controller/v1'

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'API is live..',
        status: 'ok',
        version: '1.0.0',
        timestamp: new Date().toISOString()
    })
})

router.post('/create', createShortUrlController)
export default router
