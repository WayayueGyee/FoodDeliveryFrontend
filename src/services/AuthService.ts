import axios, { AxiosResponse } from 'axios'
import { LoginCredsDTO, UserRegisterDTO } from 'models/Auth'
import { apiUrl, reqLoginUrl, reqLogoutUrl, reqRegisterUrl } from 'routes/RequestRoutes'

export default class AuthService {
    public static login(loginCreds: LoginCredsDTO) {
        return axios.post(apiUrl + reqLoginUrl, loginCreds)
    }

    public static register(registerDto: UserRegisterDTO): Promise<AxiosResponse<any, any>> {
        return axios.post(apiUrl + reqRegisterUrl, registerDto)
    }

    public static logout() {
        return axios.post(apiUrl + reqLogoutUrl)
    }
}
