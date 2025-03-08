import { Alert } from 'react-bootstrap'

export default function AlertMessage (props) {
  return (
    <Alert variant='danger'>
      {props.children}
    </Alert>
  )
}