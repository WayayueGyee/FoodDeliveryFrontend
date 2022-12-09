import localforage from 'localforage'
import log from 'utils/Log'

/**
 * Gets token from local storage
 * @returns Promise with or without token
 */
export function getToken(): Promise<unknown> {
    return localforage.getItem('token', (err, token) => {
        if (err !== null) log(err.message, 'error')
        log(`Token: "${token}"`)
    })
}

/**
 * Saves or updates token in local storage
 * @param token JWT token to save
 * @returns Promise with saved token
 */
export function saveToken(token: string): Promise<string> {
    return localforage.setItem('token', token, (err, savedToken) => {
        if (err !== null) log(err.message, 'error')
        log(`Token "${savedToken}" saved`)
    })
}
