import { ShortUrl } from '@/model'

export const saveShortUrl = async (url: string, shortUrl: string) => {
    const newShortUrl = new ShortUrl({
        originalUrl: url,
        shortUrl: shortUrl,
        clickCount: 0
        // user: req.user?._id
    })

    const savedShortUrl = await newShortUrl.save()
    return savedShortUrl
}

export const findShortUrl = async (id: string) => {
    const urlObject = await ShortUrl.findOneAndUpdate(
        { shortUrl: id },
        { $inc: { clickCount: 1 } },
        { new: true }
    )
    return urlObject
}
