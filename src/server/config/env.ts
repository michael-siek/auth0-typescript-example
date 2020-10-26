import dotenv from 'dotenv'

dotenv.config()

const {
  SERVER_PORT,
  CLIENT_ORIGIN_URL,
  AUTH0_AUDIENCE,
  AUTH0_ISSUER_URL
} = process.env

const clientOrigins = 'https://localhost:4040'

if (!SERVER_PORT) {
  throw new Error(
    '.env is missing the definition of an SERVER_PORT environment variable'
  )
}

if (!CLIENT_ORIGIN_URL) {
  throw new Error(
    '.env is missing the definition of an CLIENT_ORIGIN_URL environment variable'
  )
}

if (!AUTH0_AUDIENCE) {
  throw new Error(
    '.env is missing the definition of an AUTH0_AUDIENCE environment variable'
  )
}

if (!AUTH0_ISSUER_URL) {
  throw new Error(
    '.env is missing the definition of an AUTH0_ISSUER_URL environment variable'
  )
}

export {
  AUTH0_AUDIENCE as audience,
  AUTH0_ISSUER_URL as issuerUrl,
  SERVER_PORT as PORT,
  CLIENT_ORIGIN_URL as clientOriginUrl,
  clientOrigins
}
