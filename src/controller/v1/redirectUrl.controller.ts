import { Request, Response } from 'express'
import { ShortUrl } from '@/model'

export const redirectUrl = async (req: Request, res: Response) => {
    const { id } = req.params

    if (!id) {
        res.status(400).json({
            message: 'Short URL is not valid'
        })
        return
    }

    try {
        const url = await ShortUrl.findOne({ shortUrl: id })

        if (!url) {
            res.status(404).json({
                message: 'Requested short URL is not valid'
            })
            return
        }

        return res.redirect(url.originalUrl)
    } catch (error) {
        console.error('Error during URL redirection:', error)
        res.status(500).json({
            message: 'Internal server error. Please try again later.'
        })
        return
    }
}
