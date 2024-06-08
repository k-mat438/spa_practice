import { RequestState } from "../constants"
import GetRestaurants from "./getRestaurants";

type RestaurantsState = {
  fetchState: RequestState;
  restaurantsList: GetRestaurants[]
}

export default RestaurantsState;