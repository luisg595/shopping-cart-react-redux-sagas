import React, { Component } from 'react'
import { Navbar, NavbarBrand, Container, Row, Col } from 'reactstrap'
import './App.css'
import ProductList from './containers/ProductList'
import ShoppingCart from './containers/ShoppingCart'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="#">Ecommerce</NavbarBrand>
        </Navbar>

        <Container>
          <Row>
            <Col sm="8">
              <ProductList />
            </Col>
            <Col sm="4">
              <ShoppingCart />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App
