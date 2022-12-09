import localforage from 'localforage'

export default class AuthRepository {
    /**
     * getToken
     */
    private async getTokenFromLocalStorage() {
        return await localforage.getItem('token')
    }
}
