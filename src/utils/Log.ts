const isProd = import.meta.env.PROD

type LogType = 'log' | 'info' | 'warning' | 'error'

export default function log(message?: unknown, type: LogType = 'log') {
    if (isProd) return null

    switch (type) {
        case 'log':
            console.log(message)
            break
        case 'info':
            console.info(message)
            break
        case 'warning':
            console.warn(message)
            break
        default:
            console.error(message)
            break
    }
}
