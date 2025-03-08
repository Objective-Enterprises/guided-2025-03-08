import { Card } from "react-bootstrap";

export default function Product (props) {
  return (
    <Card>
      <Card.Img src={props.image} width={100} height={300} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>${props.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}