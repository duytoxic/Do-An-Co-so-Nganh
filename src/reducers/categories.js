import api from '../services/api';

// * Đặt tên action kiểu domain/eventName --------------------------------------
export const GET_LIST_CATEGORIES = 'categories/GetListCategories';

// * Actions -------------------------------------------------------------------

export const getListCategories = () => {
  return async dispatch => {
    const {data} = await api.get('/orderfood/api/categorys');

    const resData = data.reduce((preVal, curVal) => {
      return [
        ...preVal,
        {
          id: curVal.id,
          name: curVal.name,
          imageURL: curVal.image,
        },
      ];
    }, []);

    dispatch({
      type: GET_LIST_CATEGORIES,
      payload: {
        resData,
      },
    });
  };
};

// * Selectors -----------------------------------------------------------------

export const selectListCategories = state => {
  return state.categories.listCategories;
};

// * Reducers ------------------------------------------------------------------

const initialState = {};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_LIST_CATEGORIES:
      return {
        ...state,
        listCategories: payload.resData,
      };

    default:
      return state;
  }
};
