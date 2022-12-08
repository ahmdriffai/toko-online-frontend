import CONFIG from './config';

const API_ENDPOINT = {
  ALL_PRODUCTS: ({
    search, sort, page, size,
  }) => `${CONFIG.BASE_URL}/products?search=${search}&page=${page}&sort=${sort}&size=${size}`,
  REGISTER: `${CONFIG.BASE_URL}/register`,
  LOGIN: `${CONFIG.BASE_URL}/login`,
  ME: `${CONFIG.BASE_URL}/me`,
};

export default API_ENDPOINT;
