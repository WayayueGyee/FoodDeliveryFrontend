import axios, { AxiosResponse } from 'axios'
import { LoginCredsDTO, UserRegisterDTO } from 'models/Auth'
import checkAuth from 'utils/decorators/CheckAuth'

export default class AuthService {
    @checkAuth()
    public static login(url: string, loginCreds: LoginCredsDTO) {
        return axios.post(url, loginCreds)
    }

    public static register(
        url: string,
        registerDto: UserRegisterDTO
    ): Promise<AxiosResponse<any, any>> {
        return axios.post(url, registerDto)
    }
}
