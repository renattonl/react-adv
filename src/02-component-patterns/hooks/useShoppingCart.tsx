import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {

  const [shoppingCart, setShoppingCart] = useState<{[key: string]: ProductInCart}>({})
  const onProductCountChange = ({count, product}: {count: number, product: Product}) => {
    // console.log({count});

    setShoppingCart(e => {
      const productInCart: ProductInCart = e[product.id] ?? {...product, count: 0}
      if(Math.max(productInCart.count + count, 0) > 0){
        productInCart.count += count;
        return {...e, [product.id] : productInCart}
      }
      const {[product.id]: toDelete, ...rest} = e
      return rest;
      // if(!count) {
      //   const { [product.id]: toDelete, ...ee } = e ?? {};
      //   return ee;
      // }
      // return {
      //   ...e,
      //   [product.id]: {...product, count},
      // }
    })
  };
  
  return {shoppingCart, onProductCountChange}
}