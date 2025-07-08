import { Router } from 'express'
const router = Router()
import { urlCreate, redirectUrl } from '@/controller/v1'

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'API is live..',
        status: 'ok',
        version: '1.0.0',
        timestamp: new Date().toISOString()
    })
})

router.get('/:id', redirectUrl)
router.post('/create', urlCreate)
export default router
