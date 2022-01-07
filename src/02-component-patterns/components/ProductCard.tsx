import styles from '../styles/styles.module.css'
import {useProduct} from '../hooks/useProduct'
import { createContext } from 'react'
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces'


export const ProductContext = createContext({} as ProductContextProps)
const {Provider} = ProductContext;

export function ProductCard({product, children}: ProductCardProps) {

    const {counter, increaseBy} = useProduct()

    return (
        <Provider value={{product, counter, increaseBy}}>
            <div className={styles.productCard}>
                {children}
            </div>
        </Provider>
    )
}
