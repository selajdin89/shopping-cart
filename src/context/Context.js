import React, { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, prodReducer } from "./Reducers";

const Cart = createContext();

const Context = (props) => {
  faker.seed(99);
  const products = [...Array(20)].map(() => {
    return {
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.image(),
      inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
      fastDelivery: faker.datatype.boolean(),
      rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    };
  });

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [prodState, prodDispatch] = useReducer(prodReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, prodState, prodDispatch }}>
      {props.children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
