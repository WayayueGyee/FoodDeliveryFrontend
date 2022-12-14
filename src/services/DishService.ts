import axios from 'axios'
import { apiUrl, reqDishesUrl } from 'routes/RequestRoutes'

export default class DishService {
    public static getDishPage(params: { [k: string]: string }) {
        return axios.get(apiUrl + reqDishesUrl, { params: { ...params } })
    }
}
