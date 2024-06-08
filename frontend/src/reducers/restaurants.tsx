import { REQUEST_STATE } from '../constants';
import RestaurantsState from '../type/fetchState';

export const initialState: RestaurantsState = {
  fetchState: REQUEST_STATE.INITIAL,
  restaurantsList: [],
};

export const restaurantsActionTypes = {
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS'
}

const restaurantsReducer = (state:RestaurantsState, action: any) => {
  switch (action.type) {
    case restaurantsActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case restaurantsActionTypes.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        restaurantsList: action.payload?.restaurants,
      };
    default:
      throw new Error();
  }
}

export default restaurantsReducer;