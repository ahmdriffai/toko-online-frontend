import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import AuthApi from '../data/auth-api';

function RegisterPage({ loginSuccess }) {
  const navigate = useNavigate();
  const [validationError, setValidationError] = React.useState({});
  const onRegister = async ({ name, email, password }) => {
    const { error, data } = await AuthApi.register({ name, email, password });

    if (error) {
      setValidationError(data);
    } else {
      loginSuccess(data.token);
      navigate('/');
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          {
            Object.keys(validationError).length > 0 && (
              <div className="row">
                <div className="col-12">
                  <div className="alert alert-danger">
                    <ul className="mb-0">
                      {
                        Object.entries(validationError).map(([key, value]) => (
                          <li key={key}>{value}</li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </div>
            )
          }
          <RegisterInput register={onRegister} />
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterPage;
