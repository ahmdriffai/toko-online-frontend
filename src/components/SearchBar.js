import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';

function SearchBar({ s, sChange }) {
  return (
    <Form>
      <InputGroup className="mt-5">
        <Form.Control
          placeholder="Cari product"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={s}
          onChange={sChange}
        />
        <Button variant="outline-secondary" id="button-addon2">
          <BiSearch />
        </Button>
      </InputGroup>
    </Form>
  );
}

export default SearchBar;
