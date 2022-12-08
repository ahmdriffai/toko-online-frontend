import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import AuthApi from './data/auth-api';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { putAccessToken } from './utils/common';

function App() {
  const [authUser, setAuthData] = React.useState(null);

  const onLoginSuccses = async (accessToken) => {
    putAccessToken(accessToken);
    const { data } = await AuthApi.getUserLogin();
    setAuthData(data);
  };

  return (
    <>
      <Navigation authUser={authUser} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage loginSuccess={onLoginSuccses} />} />
          <Route path="/register" element={<RegisterPage loginSuccess={onLoginSuccses} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
