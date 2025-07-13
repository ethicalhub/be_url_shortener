import { generateNanoId } from '@/utils/helpers'
import { ShortUrlDao } from '@/dao/ShortUrlDAO'

export const createShortUrlService = async (url: string) => {
    const shortUrl = generateNanoId(8)
    const savedShortUrlDao = await ShortUrlDao(url, shortUrl)

    return savedShortUrlDao
}
