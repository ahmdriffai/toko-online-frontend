import React from 'react';
import { Card } from 'react-bootstrap';
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';

function ProductItem({
  imageId, name, price, decription,
}) {
  return (
    <Card style={{ width: '15rem' }} className="m-3">
      <Link to="/" className="nav-link">
        <Card.Img variant="top" src={imageId} />
        <Card.Body>
          <Card.Title>
            {name}
          </Card.Title>
          <Card.Title>
            <NumericFormat displayType="text" value={price} allowLeadingZeros thousandSeparator="," prefix="Rp. " />
          </Card.Title>
          <Card.Text className="fs-small">
            {decription}
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default ProductItem;
