import { generateNanoId } from '@/utils/helpers'
import { saveShortUrl } from '@/dao'

export const createShortUrlService = async (url: string) => {
    const shortUrl = generateNanoId(8)
    const savedShortUrlDao = await saveShortUrl(url, shortUrl)

    return savedShortUrlDao
}
