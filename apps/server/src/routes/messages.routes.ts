import express from 'express'
import twilioGuard from '../utils/twilioGuard'
import MessagesController from '../controllers/MessagesController'

// import aws from 'aws-sdk'
// import multer from 'multer'
// import multerS3 from 'multer-s3'

// const s3 = new aws.S3({
//   /* ... */
// })

// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: 'some-bucket',
//     metadata: function(req, file, cb) {
//       cb(null, { fieldName: file.fieldname })
//     },
//     key: function(req, file, cb) {
//       cb(null, Date.now().toString())
//     }
//   })
// })

const messagesRouter = express.Router()

messagesRouter.use(twilioGuard)
messagesRouter.post('/', MessagesController.create)

export default messagesRouter
