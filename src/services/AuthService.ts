import { kreosoftApiUrl } from './../Routes';
import axios, { AxiosResponse } from 'axios'
import { LoginCredsDTO, UserRegisterDTO } from 'models/Auth'
import checkAuth from 'utils/decorators/CheckAuth'

export default class AuthService {
    @checkAuth()
    public static login(loginCreds: LoginCredsDTO) {
        return axios.post(kreosoftApiUrl + 'account/login', loginCreds)
    }

    public static register(registerDto: UserRegisterDTO): Promise<AxiosResponse<any, any>> {
        return axios.post(kreosoftApiUrl + 'account/register', registerDto)
    }
}
