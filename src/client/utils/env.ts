import dotenv from 'dotenv'

dotenv.config()

// Issues with parcel not letting object destructure from `process.env`
const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
const audience = process.env.REACT_APP_AUTH0_AUDIENCE
const server = process.env.REACT_APP_SERVER_URL

if (!domain) {
  throw new Error(
    '.env is missing the definition of an REACT_APP_AUTH0_DOMAIN environment variable'
  )
}

if (!clientId) {
  throw new Error(
    '.env is missing the definition of an REACT_APP_AUTH0_CLIENT_ID environment variable'
  )
}

if (!audience) {
  throw new Error(
    '.env is missing the definition of an REACT_APP_AUTH0_AUDIENCE environment variable'
  )
}

if (!server) {
  throw new Error(
    '.env is missing the definition of an REACT_APP_SERVER_URL environment variable'
  )
}

export { domain, clientId, audience, server }
