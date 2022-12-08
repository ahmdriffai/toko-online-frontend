import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import AuthApi from '../data/auth-api';

function LoginPage({ loginSuccess }) {
  const navigate = useNavigate();
  const [validationError, setValidationError] = React.useState({});
  const [messageError, setMessageError] = React.useState('');
  const onLogin = async ({ email, password }) => {
    const { error, message, data } = await AuthApi.login({ email, password });

    if (error) {
      if (data) {
        setValidationError(data);
      }
      setMessageError(message);
    } else {
      loginSuccess(data.token);
      setTimeout(() => {
        navigate('/');
      }, 1000);
    }
  };

  const onErrorMessage = () => {
    if (messageError) {
      return (
        <div className="row">
          <div className="col-12">
            <div className="alert alert-danger">
              {messageError}
            </div>
          </div>
        </div>
      );
    }
    return null;
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
          {onErrorMessage()}
          <LoginInput login={onLogin} />
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
