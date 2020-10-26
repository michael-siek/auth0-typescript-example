import * as React from 'react'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import axios from 'axios'
import { server } from '../utils/env'

const ExternalApiComponent: React.FC = () => {
  const [state, setState] = React.useState({
    showResult: false,
    apiMessage: '',
    error: null
  })

  const { getAccessTokenSilently } = useAuth0()

  const callApi = async () => {
    try {
      const { data } = await axios.get(`${server}/api/messages/public-message`)
      setState({ ...state, apiMessage: data.message, showResult: true })
    } catch (error) {
      setState({ ...state, apiMessage: error.message })
    }
  }

  const callSecureApi = async () => {
    const token = await getAccessTokenSilently()

    try {
      const { data } = await axios.get(
        `${server}/api/messages/protected-message`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      setState({ ...state, apiMessage: data.message, showResult: true })
    } catch (error) {
      setState({ ...state, apiMessage: error.message })
    }
  }

  return (
    <React.Fragment>
      <h1>External API</h1>
      <p>
        You use will use a button to call an external API using an access token,
        and the API will validate it using the API's audience value.
        <br />
        <strong>This route should be protected</strong>.
      </p>
      <div
        className='btn-group mt-5'
        role='group'
        aria-label='External API Requests Examples'
      >
        <button type='button' className='btn btn-primary' onClick={callApi}>
          Get Public Message
        </button>
        <button
          type='button'
          className='btn btn-primary'
          onClick={callSecureApi}
        >
          Get Protected Message
        </button>
      </div>

      {state.apiMessage && (
        <div className='mt-5'>
          <h6 className='muted'>Result</h6>
          <div className='container-fluid'>
            <div className='row'>
              <code className='col-12 text-light bg-dark p-4'>
                {JSON.stringify(state.apiMessage, null, 2)}
              </code>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default withAuthenticationRequired(ExternalApiComponent)
