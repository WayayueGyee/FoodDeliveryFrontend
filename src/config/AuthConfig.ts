import TokenService from 'services/TokenService'

export default async function AuthConfig() {
    return {
        headers: {
            
            Authorization: ('Bearer ' + (await TokenService.getToken())) as string,
        },
        validateStatus: () => true,
    }
}
