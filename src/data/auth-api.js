import API_ENDPOINT from '../globals/api-endpoint';
import { fetchWithToken } from '../utils/common';

class AuthApi {
  static async login({ email, password }) {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    const response = await fetch(API_ENDPOINT.LOGIN, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    });

    const responseJson = await response.json();

    if (!responseJson.success) {
      return { error: true, message: responseJson.message, data: responseJson.errors };
    }

    return { error: false, data: responseJson.data };
  }

  static async register({ name, email, password }) {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('role', 'customer');

    const response = await fetch(API_ENDPOINT.REGISTER, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    });

    const responseJson = await response.json();

    if (!responseJson.success) {
      return { error: true, message: responseJson.message, data: responseJson.errors };
    }

    return { error: false, data: responseJson.data };
  }

  static async getUserLogin() {
    const response = await fetchWithToken(API_ENDPOINT.ME, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    const responseJson = await response.json();

    if (!responseJson.success) {
      return { error: true, message: responseJson.message, data: responseJson.errors };
    }

    return { error: false, data: responseJson.data };
  }
}

export default AuthApi;
