import { nanoid } from 'nanoid'

export const generateNanoId = (length: number) => {
    return nanoid(length)
}
