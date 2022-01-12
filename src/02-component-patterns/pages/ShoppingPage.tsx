import {ProductCard} from '../components';
import { products } from '../data/produts';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css'


export default function ShoppingPage() {

  const {shoppingCart, onProductCountChange} = useShoppingCart();

  return (
      <div>
          <h1>Shopping Store</h1>
          <hr />
          <div style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
          }}>
            {
              products.map(product => (
                <ProductCard 
                  key={product.id}
                  product={product} 
                  className="bg-dark text-white" 
                  onChange={ onProductCountChange }
                  value={ (shoppingCart[product.id]?.count) ?? 0 }
                >
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title title={product.title} className="text-white text-bold" />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>
              ))
            }
          </div>

          <div className="shopping-cart">
            {
              Object.entries(shoppingCart).map(([key, product]) => (
                <ProductCard 
                  key={key}
                  product={product} 
                  className="bg-dark text-white" 
                  style={{ width: '150px' }}
                  onChange={ onProductCountChange }
                  value={ product.count }
                >
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title title={product.title} className="text-white text-bold" />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>
              ))
            }
          </div>
      </div>
  )
}
