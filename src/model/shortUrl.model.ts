import mongoose from 'mongoose'

const shortUrlSchema = new mongoose.Schema(
    {
        originalUrl: {
            type: String,
            required: true
        },
        shortUrl: {
            type: String,
            required: true,
            index: true,
            unique: true
        },
        clickCount: {
            type: Number,
            default: 0,
            required: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
            // required: true
        }
    },
    {
        timestamps: true
    }
)

const ShortUrl = mongoose.model('ShortUrl', shortUrlSchema)
export default ShortUrl
