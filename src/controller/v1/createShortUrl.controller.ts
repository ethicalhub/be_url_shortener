import { Request, Response } from 'express'
import { createShortUrlService } from '@/services'

export const createShortUrlController = async (req: Request, res: Response) => {
    try {
        const { url } = req.body

        if (!url || typeof url !== 'string') {
            res.status(400).json({
                message: 'Invalid URL format. Please provide a valid URL as a string.'
            })
            return
        }

        const savedShortUrl = await createShortUrlService(url)
        res.status(201).json({
            message: 'Short URL created successfully',
            data: {
                originalUrl: savedShortUrl.originalUrl,
                shortUrl: savedShortUrl.shortUrl
            }
        })
    } catch (err) {
        console.error('Error creating URL:', err)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}
