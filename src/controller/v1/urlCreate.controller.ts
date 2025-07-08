import { Request, Response } from 'express'
import { nanoid } from 'nanoid'
import { ShortUrl } from '@/model'

export const urlCreate = async (req: Request, res: Response) => {
    try {
        const { url } = req.body

        if (!url || typeof url !== 'string') {
            res.status(400).json({
                message: 'Invalid URL format. Please provide a valid URL as a string.'
            })
            return
        }

        const newShortUrl = new ShortUrl({
            originalUrl: url,
            shortUrl: nanoid(8),
            clickCount: 0
            // user: req.user?._id
        })

        const savedShortUrl = await newShortUrl.save()
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
