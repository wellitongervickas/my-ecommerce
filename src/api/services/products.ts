import client from 'api/client';
import endpoints from 'api/endpoints';

const productsService = {
  async index() {
    return await client.get(`${process.env.REACT_APP_API_URL}/${endpoints.PRODUCTS}`)
  },
};

export default productsService;
