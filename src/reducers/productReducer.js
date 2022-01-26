const initialState = {
  productList: [],
  currentBidData: []
};
/*
 * Product list state update.
 */
export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return Object.assign({}, state, { productList: action.productList });
    case 'ADD_PRODUCT':
      return Object.assign({}, state, { productList: [...state.productList, action.data] });
    case 'DELETE_PRODUCT':
      return {...state, productList: state.productList.filter(productList => productList.productId !== action.productId),
        currentBidData: state.currentBidData.filter(currentBidData => currentBidData.productId !== action.productId) };
    case 'UPDATE_PRODUCT':
      return {...state, 
        productList: state.productList.map(productList => productList.productId === action.data.productId ?
          Object.assign({}, productList, { productName: action.data.productName, category: action.data.category, shortDescription: action.data.shortDescription, startingPrice: action.data.startingPrice, bidEndDate: action.data.bidEndDate }) : productList)
      };
    case 'BID_UPDATE':
      return {...state, 
        currentBidData: state.currentBidData.map(currentBidData => currentBidData.productId === action.data.productId ?
          Object.assign({}, currentBidData, { bidAmount: action.data.bidAmount }) : currentBidData)
      };
    case 'BID_PRODUCT':
      return Object.assign({}, state, { currentBidData: [...state.currentBidData, action.data] });
    default:
      return initialState;
  }
}

