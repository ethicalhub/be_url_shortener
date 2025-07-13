import { Request, Response } from 'express'
import { findShortUrl } from '@/dao/ShortUrlDAO'
export const redirectUrlController = async (req: Request, res: Response) => {
    const { id } = req.params

    if (!id) {
        res.status(400).json({
            message: 'Short URL is not valid'
        })
        return
    }

    try {
        const urlObject = await findShortUrl(id)

        if (!urlObject) {
            res.status(404).json({
                message: 'Requested short URL is not valid'
            })
            return
        }

        return res.redirect(urlObject.originalUrl)
    } catch (error) {
        console.error('Error during URL redirection:', error)
        res.status(500).json({
            message: 'Internal server error. Please try again later.'
        })
        return
    }
}
