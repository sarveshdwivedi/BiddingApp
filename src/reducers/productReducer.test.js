import deepFreeze from 'deep-freeze';
import testProduct from './productReducer';

describe('Test Users reducer tests', () => {
    const state = {
        userList: [{
                id: 1,
                name: 'John',
                username: 'johney',
                email: 'john@yopmail.com'
            },
            {
                id: 2,
                name: 'Marsh',
                username: 'marshy',
                email: 'marsh@yopmail.com'
            },
            {
                id: 3,
                name: 'Ricky',
                username: 'rick',
                email: 'rick@yopmail.com'
            },
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