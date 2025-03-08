import { Button, Container, Form } from 'react-bootstrap'
import { useState } from 'react'
import AlertMessage from '../components/AlertMessage'

export default function LoginPage () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState()
  function handleUsernameChange (event) {
    setUsername(event.target.value)
  }
  function handlePasswordChange (event) {
    setPassword(event.target.value)
  }
  function handleSubmit (event) {
    event.preventDefault()
    if (username === '') {
      setError('Username is required')
      return
    }
  }
  const alert = error && <AlertMessage>{error}</AlertMessage>
  return (
    <Container>
      {alert}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control value={username} onChange={handleUsernameChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control value={password} onChange={handlePasswordChange} />
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
    </Container>
  )
}