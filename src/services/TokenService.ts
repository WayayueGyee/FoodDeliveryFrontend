import { TokenResponse } from 'models/Auth'
import localforage from 'localforage'
import log from 'utils/Log'
import nameOf from 'utils/NameOf'

export default class TokenService {
    public static resolveTokenPropName(): string {
        return nameOf((token: TokenResponse) => token.token)
    }

    public static async getToken(): Promise<unknown> {
        const token = await localforage.getItem(this.resolveTokenPropName(), (err, token) => {
            if (err !== null) log(err.message, 'error')
            log(`Token: "${token}"`)
        })
        return token
    }

    /**
     * Saves or updates token in local storage
     * @param token JWT token to save
     * @returns Promise with saved token
     */
    public static saveToken(token: string | undefined | null): Promise<string | undefined | null> {
        return localforage.setItem(this.resolveTokenPropName(), token, (err, savedToken) => {
            if (err !== null) log(err.message, 'error')
            log(`Token "${savedToken}" saved`)
        })
    }
}
