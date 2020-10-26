import jwt from 'express-jwt'
import jwksRsa from 'jwks-rsa'
import { issuerUrl, audience } from '../config/env'

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${issuerUrl}.well-known/jwks.json`
  }),
  audience,
  issuer: issuerUrl,
  algorithms: ['RS256']
})

export default checkJwt
