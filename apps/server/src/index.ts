import mongoose from 'mongoose'
import app, { server } from './routes'
import { User } from './models'
import Apollo from './graphql'

const { PORT, MONGO_URL } = process.env

async function HandleOpen() {
  try {
    // Logout all users.
    await User.updateMany({}, { status: 'offline' })

    Apollo.applyMiddleware({ app })
    Apollo.installSubscriptionHandlers(server)

    server.listen(PORT)

    console.log(`
Everything ready! 🚀
Apollo: http://localhost:${PORT + Apollo.graphqlPath}
Subscriptions: ws://localhost:${PORT + Apollo.subscriptionsPath}
`)
  } catch (err) {
    console.log('Connexion failed. 💀')
  }
}

function HandleError() {
  console.error('Error connecting to DB 😰')
}

const db = mongoose.connection

db.on('error', HandleError)
db.once('open', HandleOpen)

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})
