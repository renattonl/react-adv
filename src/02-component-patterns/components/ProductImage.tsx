import { useContext } from "react";
import {ProductContext} from './ProductCard'
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

export interface Props{
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({img, className, style}: Props) => {
    const {product} = useContext(ProductContext)
    let imgtoShow: string;
    if(img){
        imgtoShow = img;
    } else if (product.img){
        imgtoShow = product.img
    } else {
        imgtoShow = noImage
    }
    return (
      <img 
        style={style}
        className={ `${styles.productImg} ${className}` } 
        src={ imgtoShow } 
        alt={product.title} />
    )
}