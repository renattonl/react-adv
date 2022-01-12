import { CSSProperties, ReactElement } from "react";
import styles from '../styles/styles.module.css'
import {useProduct} from '../hooks/useProduct'
import { createContext } from 'react'
import { onChangeArgs, Product, ProductContextProps } from '../interfaces/interfaces'


export const ProductContext = createContext({} as ProductContextProps)
const {Provider} = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export function ProductCard({product, children, className, style, onChange, value}: Props) {

    const {counter, increaseBy} = useProduct({ onChange, product, value })

    return (
        <Provider value={{product, counter, increaseBy}}>
          <div
            style={style} 
            className={ `${styles.productCard} ${className}` }
          >
            {children}
          </div>
        </Provider>
    )
}
