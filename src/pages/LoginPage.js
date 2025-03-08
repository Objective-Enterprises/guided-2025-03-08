import { Button, Container, Form } from 'react-bootstrap'
import { useState } from 'react'
import AlertMessage from '../components/AlertMessage'
import { credentials } from '../credentials'
import { users } from '../users'

export default function LoginPage () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState()
  function handleUsernameChange (event) {
    setUsername(event.target.value)
    setError(undefined)
  }
  function handlePasswordChange (event) {
    setPassword(event.target.value)
    setError(undefined)
  }
  function handleSubmit (event) {
    event.preventDefault()
    if (username === '') {
      setError('Username is required')
      return
    }
    if (password === '') {
      setError('Password is required')
      return
    }
    const usernameRegistered = username in credentials
    if (!usernameRegistered) {
      setError('Invalid username')
      return
    }
    const correctPassword = password === credentials[username]
    if (!correctPassword) {
      setError('Invalid password')
      return
    }
    const user = users.find(user => user.username === username)
    const userString = JSON.stringify(user)
    localStorage.setItem('user', userString)
    window.location.reload()
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