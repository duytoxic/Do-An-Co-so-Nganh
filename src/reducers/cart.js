// * Đặt tên action kiểu domain/eventName --------------------------------------
export const ADD_TO_CART = 'cart/addToCart';
export const REMOVE_CART_ITEM = 'cart/removeCartItem';
export const INCREASE_QUANTITY = 'cart/increaseQuantity';

// * Actions -------------------------------------------------------------------

export const InCreaseQuantity = (id, quantity) => {
  return async dispatch => {
    dispatch({
      type: INCREASE_QUANTITY,
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

// * Selectors -----------------------------------------------------------------

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
          };
          state.items.push(anotherCart);
        }
      }
      return state;

    // console.log(state);
    // if (state.items.length === 0) {
    //   let newState = {
    //     items: [...newState.items, payload],
    //   };
    // }
    // return state;

    case INCREASE_QUANTITY:
      state.items.map(curElem => {
        if (curElem.quantity === 10) {
          return {...curElem};
        }

        if (curElem.id === payload.id) {
          curElem.quantity = payload.quantity + 1;
          // curElem.price = payload.totalPrice;
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

    default:
      return state;
  }
};
