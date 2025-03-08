import { Container } from "react-bootstrap";
import products from "../products";
import Product from "../components/Product";

export default function ProductsListPage () {
  const cards = products.map(product => {
    return (
      <Product
        key={product.id}
        image={product.image}
        name={product.name}
        price={product.price}
      />
    )
  })
  return (
    <Container>
      {cards}
    </Container>
  )
}