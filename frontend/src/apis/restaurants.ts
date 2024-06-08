import axios from 'axios'
import { restaurantsIndex } from '../urls/index'
import GetRestaurants from '../type/getRestaurants'

const fetchRestaurants = () => {
  return axios.get<Array<GetRestaurants>>(restaurantsIndex).then(res => {
    return res.data
  }).catch((e) => console.log(e))
}

export default fetchRestaurants;