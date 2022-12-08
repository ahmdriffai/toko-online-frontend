import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

function SortBar({ sortChange, sizeChange }) {
  return (
    <Row className="mt-3">
      <Col md="4">
        <Form.Group as={Row} className="mb-3 d-flex align-items-center fw-semibold" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Sort :
          </Form.Label>
          <Col sm="5">
            <Form.Select size="sm" onChange={sortChange}>
              <option value="asc">Termurah</option>
              <option value="desc">Termahal</option>
            </Form.Select>
          </Col>
        </Form.Group>
      </Col>
      <Col md="4">
        <Form.Group as={Row} className="mb-3 d-flex align-items-center fw-semibold" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Size :
          </Form.Label>
          <Col sm="3">
            <Form.Select size="sm" onChange={sizeChange}>
              <option value="5">5</option>
              <option value="10">10</option>
            </Form.Select>
          </Col>
        </Form.Group>
      </Col>
    </Row>
  );
}

export default SortBar;
