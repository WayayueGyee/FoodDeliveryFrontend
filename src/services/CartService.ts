import axios from 'axios'
import AuthConfig from 'config/AuthConfig'
import { apiUrl, reqBasketUrl, reqDishesUrl } from 'routes/RequestRoutes'
import { loginUrl } from 'routes/Routes'
import checkAuth from 'utils/decorators/CheckAuth'

export default class CartService {
    @checkAuth(`/${loginUrl}`)
    public static async getCart() {
        return axios.get(apiUrl + reqBasketUrl, await AuthConfig())
    }

    @checkAuth(`/${loginUrl}`)
    public static async addToCart(dishId: string, increase = false) {
        return axios.post(`${apiUrl}${reqBasketUrl}/${reqDishesUrl}/${dishId}`, '', {
            ...(await AuthConfig()),
            params: { increase: increase },
        })
    }

    @checkAuth(`/${loginUrl}`)
    public static async deleteFromCart(dishId: string, increase = false) {
        return axios.delete(`${apiUrl}${reqBasketUrl}/${reqDishesUrl}/${dishId}`, {
            ...(await AuthConfig()),
            params: { increase: increase },
        })
    }
}
