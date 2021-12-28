// * Đặt tên action kiểu domain/eventName --------------------------------------
export const ADD_TO_CART = 'cart/addToCart';
export const REMOVE_CART_ITEM = 'cart/removeCartItem';
export const INCREASE_QUANTITY = 'cart/increaseQuantity';
export const DECREASE_QUANTITY = 'cart/decreaseQuantity';
export const REMOVE_ALL_CART = 'cart/removeAllCart';

// const AsyncStorageSetItem = async (key, value) => {
//   const stringValue = JSON.stringify(value);

//   await AsyncStorage.setItem(key, stringValue);

//   if (__DEV__) {
//     console.log(`[AsyncStorage] Set ${key} = ${stringValue}`);
//   }
// };

// * Actions -------------------------------------------------------------------

export const InCreaseQuantity = (id, quantity) => {
  return async dispatch => {
    dispatch({
      type: INCREASE_QUANTITY,
      payload: {id, quantity},
    });
  };
};

export const DeCreaseQuantity = (id, quantity) => {
  return async dispatch => {
    dispatch({
      type: DECREASE_QUANTITY,
      payload: {id, quantity},
    });
  };
};

export const removeCartItem = id => {
  return async dispatch => {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: id,
    });
  };
};

export const removeAllCart = () => {
  return async dispatch => {
    dispatch({
      type: REMOVE_ALL_CART,
    });
  };
};

// * Selectors -----------------------------------------------------------------

// export const selectItemInCart = async state => {
//   const cart = await AsyncStorageGetData('cart');
//   // let cart = await AsyncStorageGetData('cart');
//   // let parsed = JSON.stringify(cart);
//   return cart;
// };

export const selectItemInCart = state => {
  return state.cart.items;
};

// * Reducers ------------------------------------------------------------------
const initialState = {items: []};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_TO_CART:
      if (state.items.length === 0) {
        let cart = {
          id: payload.id,
          name: payload.name,
          weight: payload.weight,
          price: payload.price,
          quantity: payload.quantity,
          image: payload.image,
        };
        state.items.push(cart);
      } else {
        let checkInvalid = false;
        state.items.map((item, index) => {
          if (item.id === payload.id) {
            state.items[index].quantity++;
            checkInvalid = true;
          }
        });
        if (!checkInvalid) {
          let anotherCart = {
            id: payload.id,
            name: payload.name,
            weight: payload.weight,
            price: payload.price,
            quantity: payload.quantity,
            image: payload.image,
          };
          state.items.push(anotherCart);
        }
      }
      // AsyncStorageSetData('cart', state);
      return state;

    case INCREASE_QUANTITY:
      state.items.map(curElem => {
        if (curElem.id === payload.id) {
          curElem.quantity = payload.quantity + 1;
          return {...curElem};
        }
      });
      return {
        ...state,
      };

    case DECREASE_QUANTITY:
      state.items.map(curElem => {
        if (curElem.quantity === 1) {
          return {...curElem};
        }

        if (curElem.id === payload.id) {
          curElem.quantity = payload.quantity - 1;
          return {...curElem};
        }
      });
      return {
        ...state,
      };

    case REMOVE_CART_ITEM:
      let newItemInCart = {items: []};
      newItemInCart.items = state.items.filter(item => item.id !== payload);

      return {...newItemInCart};

    case REMOVE_ALL_CART:
      return initialState;

    default:
      return state;
  }
};
