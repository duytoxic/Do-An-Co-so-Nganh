import {combineReducers} from 'redux';

import categories from './categories';
import cart from './cart';

const rootReducer = combineReducers({
  categories,
  cart,
});

export default rootReducer;
