import express from 'express'
import aws from 'aws-sdk'
import multer from 'multer'
import multerS3 from 'multer-s3'
import { File } from '../models'

var s3 = new aws.S3({
  /* ... */
})

const router = express.Router()

router.get('/images/:id', async (req, res) => {
  const { base64, type } = await File.findById(req.params.id).exec()
})

export default router
