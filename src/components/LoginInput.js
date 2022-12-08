import React from 'react';
import {
  Button, Card, Form,
} from 'react-bootstrap';

function LoginInput(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // eslint-disable-next-line react/destructuring-assignment
    props.login({ email, password });
  };

  return (
    <Card>
      <Card.Body>
        <h3>Login</h3>
        <Form onSubmit={onSubmitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" onChange={onEmailChange} value={email} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" onChange={onPasswordChange} value={password} />
          </Form.Group>
          <Button variant="primary" type="submit">Login</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
export default LoginInput;
