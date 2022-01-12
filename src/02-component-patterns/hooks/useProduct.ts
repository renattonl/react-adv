import { useEffect, useState } from "react"
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs{
  product: Product;
  value?: number;
  onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({onChange, product, value = 0}: useProductArgs ) => {
    const [counter, setCounter] = useState( value )

    const increaseBy = (val : number) => {
      const newValue = Math.max(counter + val, 0)
      setCounter(newValue)
      onChange && onChange({count: newValue, product});
    }

    useEffect(() => {
      setCounter(value);
    }, [value])

    return {counter, increaseBy}
}