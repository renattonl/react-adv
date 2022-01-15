import {ProductCard} from '../components';
import { products } from '../data/produts';
import '../styles/custom-styles.css'

const product = products[0];

export default function ShoppingPage() {

  return (
      <div>
          <h1>Shopping Store</h1>
          <hr />
          <ProductCard 
            key={product.id}
            product={product} 
            initialValues={{
              count: 4,
              maxCount: 10,
            }}
          >
            {
              ({
                reset,
                isMaxCountReached,
                maxCount,
                increaseBy,
                count,
              }) => (
                <>
                  <ProductCard.Image />
                  <ProductCard.Title />
                  <ProductCard.Buttons  />
                </>
              )
            }
          </ProductCard>
      </div>
  )
}
