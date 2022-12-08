import CONFIG from '../globals/config';

function getAccessToken() {
  return localStorage.getItem(CONFIG.LOCAL_STORAGE_NAME);
}

function putAccessToken(accessToken) {
  return localStorage.setItem(CONFIG.LOCAL_STORAGE_NAME, accessToken);
}

async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
      Accept: 'application/json',
    },
  });
}
export { getAccessToken, putAccessToken, fetchWithToken };
