import * as React from 'react'
import {
  Button,
  Container,
  Nav,
  Navbar as NavbarBs,
} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart()
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-2">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          onClick={openCart}
          style={{
            width: '3rem',
            height: '3rem',
            position: 'relative',
          }}
          variant="outline-primary"
          className="rounded-circle">
          <svg
            id="Layer_1"
            width="24px"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="12 0 122.88 107.54">
            <title>trolley</title>
            <path d="M3.93,7.86A3.93,3.93,0,0,1,3.93,0H14.15l.39,0A18.28,18.28,0,0,1,24.1,2.49a14.69,14.69,0,0,1,6.41,9.1c.32,1.41.66,2.82,1,4.23H119a3.92,3.92,0,0,1,3.93,3.92,4,4,0,0,1-.19,1.22L112.52,62.08a3.92,3.92,0,0,1-3.8,3H44.66c1.44,5.21,2.76,8,4.7,9.34,2.27,1.52,6.31,1.63,13,1.52h.07v0h45.17a3.93,3.93,0,1,1,0,7.86H62.46v0c-8.27.15-13.38-.09-17.46-2.84s-6.36-7.55-8.57-16.3l-13.51-51a7.19,7.19,0,0,0-3-4.49,10.8,10.8,0,0,0-5.51-1.3H3.93ZM96,88.34a9.6,9.6,0,1,1-9.6,9.6,9.6,9.6,0,0,1,9.6-9.6Zm-42.1,0a9.6,9.6,0,1,1-9.6,9.6,9.6,9.6,0,0,1,9.6-9.6ZM78,23.67V38h32.45l3.53-14.28Zm0,22.14V57.22h27.69l2.82-11.41ZM70.11,57.22V45.81H39.63q1.57,5.7,3,11.41Zm0-19.27V23.67H33.54c1.26,4.76,2.58,9.52,3.91,14.28Z" />
          </svg>
          {cartQuantity > 0 && (
            <div
              className="rounded-circle bg-danger d-flex justify-content-center alighn-items-center"
              style={{
                color: 'white',
                width: '1.5rem',
                height: '1.5rem',
                position: 'absolute',
                bottom: 0,
                top: 0,
                transform: 'translate(90%, 100%)',
              }}>
              {cartQuantity}
            </div>
          )}
        </Button>
      </Container>
    </NavbarBs>
  )
}
