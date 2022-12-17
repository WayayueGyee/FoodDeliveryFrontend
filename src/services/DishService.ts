import axios from 'axios'
import { apiUrl, reqDishesUrl, reqDishUrl } from 'routes/RequestRoutes'

export default class DishService {
    public static getDishPage(params: { [k: string]: string | number | boolean }) {
        return axios.get(apiUrl + reqDishesUrl, { params: { ...params } })
    }

    public static getDishItem(id: string) {
        return axios.get(apiUrl + reqDishUrl(id))
    }
}
