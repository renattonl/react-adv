import {ProductButtons, ProductCard, ProductImage, ProductTitle} from '../components';
import '../styles/custom-styles.css'

const product = {
  id: '1',
  img: './coffee-mug.png',
  title: 'Coffe Mug - Card',
}

export default function ShoppingPage() {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>
                <ProductCard 
                  product={product} 
                  className="bg-dark text-white" 
                >
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title title={product.title} className="text-white text-bold" />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>
                <ProductCard 
                  product={product}
                  className="bg-dark text-white"
                >
                    <ProductImage
                      className="custom-image" />
                    <ProductTitle 
                      title={product.title} 
                      className="text-white text-bold"
                    />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>
                <ProductCard 
                  product={product} 
                  style={{
                    backgroundColor: '#70D1F8'
                  }}
                >
                    <ProductCard.Image />
                    <ProductCard.Title title={product.title} />
                    <ProductCard.Buttons style={{ display: 'flex', justifyContent: 'end' }} />
                </ProductCard>
            </div>
        </div>
    )
}
