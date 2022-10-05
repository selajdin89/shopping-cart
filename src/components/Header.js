import React from "react";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";

import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    prodDispatch,
  } = CartState();
  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
        <Container>
          <Navbar.Brand>
            <Link to="/">Shopping Cart</Link>
          </Navbar.Brand>
          <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              placeholder="Search a product"
              className="m-auto"
              onChange={(e) =>
                prodDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                })
              }
            />
          </Navbar.Text>
          <Nav>
            <Dropdown>
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge bg="unset">{cart.length}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ minWidth: 370 }}>
                {cart.length > 0 ? (
                  <>
                    {React.Children.toArray(
                      cart.map((prod) => (
                        <span className="cartitem">
                          <img
                            src={prod.image}
                            alt={prod.name}
                            className="cartItemImg"
                          />
                          <div className="cartitemDetail">
                            <span>{prod.name}</span>
                            <span>$ {prod.price.split(".")[0]}</span>
                          </div>
                          <AiFillDelete
                            fontSize="20px"
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: prod,
                              })
                            }
                          />
                        </span>
                      ))
                    )}
                    <Link to="/cart">
                      <Button style={{ width: "95%", margin: "0 10px" }}>
                        Go to Cart
                      </Button>
                    </Link>
                  </>
                ) : (
                  <span style={{ padding: 10 }}>Cart is empty!</span>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
