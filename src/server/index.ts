import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { PORT, clientOriginUrl } from './config/env'
import messagesRouter from './messages/messages.router'

const app = express()
const router = express.Router()

app.use(helmet())
app.use(cors({ origin: clientOriginUrl }))
app.use(express.json())

app.use('/api', router)
router.use('/messages', messagesRouter)

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).send({ error: true, message: err.message })
  }
)

app.listen(PORT, () => console.log(`API Server is listening on port ${PORT}`))
