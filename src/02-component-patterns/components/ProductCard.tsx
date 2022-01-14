import { CSSProperties } from "react";
import styles from '../styles/styles.module.css'
import {useProduct} from '../hooks/useProduct'
import { createContext } from 'react'
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/interfaces'


export const ProductContext = createContext({} as ProductContextProps)
const {Provider} = ProductContext;

export interface Props {
  product: Product;
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export function ProductCard({product, children, className, style, onChange, value, initialValues}: Props) {

    const {counter, increaseBy, maxCount, isMaxCountReached, reset} = useProduct({ onChange, product, value, initialValues })

    return (
        <Provider value={{product, counter, maxCount, increaseBy}}>
          <div
            style={style} 
            className={ `${styles.productCard} ${className}` }
          >
            {children({
              count: counter,
              isMaxCountReached,
              maxCount: initialValues?.maxCount,
              product,
              increaseBy,
              reset,
            })}
          </div>
        </Provider>
    )
}
