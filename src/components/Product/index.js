import React from 'react'
import { Button } from 'reactstrap'
import { ShoppingCart } from 'react-feather'
import './index.css'

const Product = ({ products, addToCart }) => {
    return (
        <div className="products">
            {products.map(product =>
                <div className="product" key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <div>
                        <h4>{product.name}</h4>
                        <p>
                            <Button color="primary" onClick={() => addToCart(product)}>${product.price} <ShoppingCart /></Button>
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Product