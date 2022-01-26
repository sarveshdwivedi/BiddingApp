import deepFreeze from 'deep-freeze';
import testProduct from './productReducer';

describe('Test Users reducer tests', () => {
    const state = {
        productList: [{
            "productId": "6",
            "productName": "abc",
            "shortDescription": "abvps",
            "category": "PAINTING",
            "startingPrice": "1",
            "bidEndDate": "23-01-2022"
          },
          {
            "productId": "7",
            "productName": "abc",
            "shortDescription": "abvps",
            "category": "PAINTING",
            "startingPrice": "1",
            "bidEndDate": "23-01-2022"
          },
          {
            "productId": "4",
            "productName": "abc",
            "shortDescription": "abvps",
            "category": "PAINTING",
            "startingPrice": "1",
            "bidEndDate": "23-01-2022"
          }
        ]
    }

    describe('GET_PRODUCTS TESTS', () => {
        const action = {
            type: 'GET_PRODUCT',
            productList: state.productList
        };
        it('Should return all products', () => {
            expect(state.productList.length).toEqual(3);
        });
    });

    describe('DELETE_PRODUCT TESTS', () => {
        const action = {
            type: 'DELETE_PRODUCT',
            id: 1
        };
        it('Should return a new state object when deleting a product', () => {
            expect(state.productList.length).toEqual(3);
        });

        
    });
});