import * as React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useAuth0 } from '@auth0/auth0-react'

const ProfileComponent: React.FC = () => {
  const { user } = useAuth0()

  return (
    <Container className='mb-5'>
      <Row className='align-items-center profile-header mb-5 text-center text-md-left'>
        <Col md={2}>
          <img
            src={user.picture}
            alt='Profile'
            className='rounded-circle img-fluid profile-picture mb-3 mb-md-0'
          />
        </Col>
        <Col md>
          <h2>{user.name}</h2>
          <p className='lead text-muted'>{user.email}</p>
        </Col>
      </Row>
      <Row>
        <pre className='col-12 text-light bg-dark p-4'>
          {JSON.stringify(user, null, 2)}
        </pre>
      </Row>
    </Container>
  )
}

export default ProfileComponent
