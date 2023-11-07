import {GET_PRODUCTS} from './types';

// Search book, author or year API
export const getProductDetails = request => async dispatch => {
  dispatch({type: GET_PRODUCTS, payload: []});
};
