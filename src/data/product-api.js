// eslint-disable-next-line linebreak-style
import API_ENDPOINT from '../globals/api-endpoint';

class ProductApi {
  static async getAll({
    search, sort, page, size,
  }) {
    const response = await fetch(API_ENDPOINT.ALL_PRODUCTS({
      search, sort, page, size,
    }));

    const responseJson = await response.json();

    if (!responseJson.success) {
      alert(responseJson.message);
      return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
  }
}

export default ProductApi;
