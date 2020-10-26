import express from 'express'
import checkJwt from '../auth/check-jwt'

const router = express.Router()

router.get(
  '/public-message',
  (req: express.Request, res: express.Response): void => {
    res.status(200).send({
      error: false,
      message: "The API doesn't require an access token to share this message."
    })
  }
)

router.get(
  '/protected-message',
  checkJwt,
  (req: express.Request, res: express.Response): void => {
    res.status(200).send({
      error: false,
      message: 'The API successfully validated your access token.'
    })
  }
)

export default router
