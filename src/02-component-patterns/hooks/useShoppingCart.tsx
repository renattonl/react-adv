import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {

  const [shoppingCart, setShoppingCart] = useState<{[key: string]: ProductInCart}>({})
  const onProductCountChange = ({count, product}: {count: number, product: Product}) => {
    setShoppingCart(e => {
      if(!count) {
        const { [product.id]: toDelete, ...ee } = e ?? {};
        return ee;
      }
      return {
        ...e,
        [product.id]: {...product, count},
      }
    })
  };
  
  return {shoppingCart, onProductCountChange}
}