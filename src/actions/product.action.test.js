import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('getTestProduct()', () => {
    it('should store the response from a successful GET request.', function () {
        const mock = new MockAdapter(axios);
        mock.onGet('/USER').reply(function(response) {
            return store.dispatch({ type: 'GET_PRODUCT', productList: response.data })
            .then(() => {
                const {
                    productList
                } = store.getState().testProduct
                expect(productList).toEqual(10)
            })
          });
    })
})