import React from 'react';
import { Row } from 'react-bootstrap';
import ProductItem from './ProductItem';

function ProductList({ products }) {
  return (
    <Row className="py-3 d-flex justify-content-left">
      {
        products.map((product) => (
          <ProductItem
            imageId={product.imageId}
            name={product.name}
            price={product.price}
            decription={product.description}
          />
        ))
        }
    </Row>
  );
}

export default ProductList;
