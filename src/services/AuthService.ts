import checkAuth from 'utils/decorators/CheckAuth'
import axios, { AxiosResponse } from 'axios'
import { LoginCredsDTO, UserRegisterDTO } from 'models/Auth'
import { apiUrl, reqLoginUrl, reqLogoutUrl, reqRegisterUrl } from 'routes/RequestRoutes'
import { dishesUrl } from 'routes/Routes'
import AuthConfig from 'config/AuthConfig'

export default class AuthService {
    public static login(loginCreds: LoginCredsDTO) {
        return axios.post(apiUrl + reqLoginUrl, loginCreds)
    }

    public static register(registerDto: UserRegisterDTO): Promise<AxiosResponse<any, any>> {
        return axios.post(apiUrl + reqRegisterUrl, registerDto)
    }

    @checkAuth(`${dishesUrl}`)
    public static async logout() {
        return axios.post(`${apiUrl}${reqLogoutUrl}`, '', {
            ...(await AuthConfig()),
        })
    }
}
