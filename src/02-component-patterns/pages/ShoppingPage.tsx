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
            className="bg-dark text-white" 
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
                  <ProductCard.Image className="custom-image" style={{boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}} />
                  <ProductCard.Title title={product.title} className="text-white text-bold" />
                  <ProductCard.Buttons className="custom-buttons" />
                  <button onClick={reset}>Reset</button>
                  <button onClick={() => increaseBy(-2)}>-2</button>
                  {
                    (!isMaxCountReached && <button onClick={() => increaseBy(+2)}>+2</button>)
                  }
                  <span>{count} - {maxCount}</span>
                </>
              )
            }
          </ProductCard>
      </div>
  )
}
