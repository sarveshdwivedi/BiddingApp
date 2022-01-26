import axios from 'axios';
let url;
/*
 * action creators for get product list
 */
const baseURL = "http://ec2-52-14-87-162.us-east-2.compute.amazonaws.com:8091/";
//const baseURL = "http://ec2-3-23-63-5.us-east-2.compute.amazonaws.com:8965/";

export function getProducts(userType, searchEmail) {

  if (userType === 'seller') {
    url = baseURL + userType + "/products/" + searchEmail
  } else {
    url = baseURL + userType + "/products"
  }

  // let data = {
  //   "response": {
  //     "msg": "PRODUCT RETRIEVED",
  //     "statusCode": 200
  //   },
  //   "products": [
  //     {
  //       "productId": "6",
  //       "productName": "abc",
  //       "shortDescription": "abvps",
  //       "category": "PAINTING",
  //       "startingPrice": "1",
  //       "bidEndDate": "23-01-2022"
  //     },
  //     {
  //       "productId": "7",
  //       "productName": "abc",
  //       "shortDescription": "abvps",
  //       "category": "PAINTING",
  //       "startingPrice": "1",
  //       "bidEndDate": "23-01-2022"
  //     },
  //     {
  //       "productId": "4",
  //       "productName": "abc",
  //       "shortDescription": "abvps",
  //       "category": "PAINTING",
  //       "startingPrice": "1",
  //       "bidEndDate": "23-01-2022"
  //     }
  //   ]
  //}

  return function (dispatch, getState) {
    // return dispatch({ type: 'GET_PRODUCTS', productList: data.products });

    axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(function (res) {
        if (res.response.statusCode === 200) {
          return dispatch({ type: 'GET_PRODUCTS', productList: res.products });
        }

      }).catch(err => console.log(err));
  }
}

/*
 * action creators for Add Product
 */
export function addProduct(data) {
  // http://192.168.1.100:8965/api/v1/seller/add-product

  //let userType = localStorage.getItem('userType')
  url = baseURL + "seller/add-product"

  return function (dispatch, getState) {
    //return dispatch({ type: 'ADD_PRODUCT', data: data.product });
    axios.post(url, {
      body: JSON.stringify(data)
    })
      .then(function (res) {
        console.log('res=>', res);
        if (res.response.statusCode === 200) {
          return dispatch({ type: 'ADD_PRODUCT', data: res.product });
        }
      }).catch(err => console.log(err));
  }
}

/*
 * action creators for edit Product
 */
export function editProduct(data) {

  return function (dispatch, getState) {
    return dispatch({ type: 'UPDATE_PRODUCT', data: data });

  }
}


/*
 * action creators for delete Product
 */
export function deleteProduct(productId) {
  // http://192.168.1.100:8965/api/v1/seller/delete/{productId}

  let url = baseURL + "seller/delete/" + productId

  return function (dispatch, getState) {

    //return dispatch({ type: 'DELETE_PRODUCT', productId: productId });

    axios.put(url)
      .then(function (res) {
        if (res.response.statusCode === 200) {
          return dispatch({ type: 'DELETE_PRODUCT', productId: productId });
        }
      }).catch(err => console.log(err));
  }
}

/*
 * action creators for bid Product
 */
export function bidProduct(data) {
  // http://192.168.1.100:8965/api/v1/buyer/place-bid

  let url = baseURL + "buyer/place-bid"

  return function (dispatch, getState) {
    //return dispatch({ type: 'BID_PRODUCT', data: data });

    axios.post(url, {
      body: JSON.stringify(data)
    })
      .then(function (res) {
        if (res.response.statusCode === 200) {
          return dispatch({ type: 'BID_PRODUCT', data: res.buyer });
        }
      }).catch(err => console.log(err));
  }
}

/*
 * action creators for update bid
 */
export function bidUpdate(data) {
  // http://192.168.1.100:8965/api/v1/bid/{productId}/{buyerEmailId}/{newBidAmount}

  // Ex- http://192.168.1.100:8965/api/v1/bid/4444/bbbb2236@bbb2236.com/2000

  let buyerEmailId = localStorage.getItem('searchEmail');
  let url = baseURL + "bid/" + data.productId + "/" + buyerEmailId + "/" + data.bidAmount

  return function (dispatch, getState) {
    //return dispatch({ type: 'BID_UPDATE', data: data });

    axios.put(url)
      .then(function (res) {
        if (res.response.statusCode === 200) {
          return dispatch({ type: 'BID_PRODUCT', data: res.buyer });
        }
      }).catch(err => console.log(err));
  }
}