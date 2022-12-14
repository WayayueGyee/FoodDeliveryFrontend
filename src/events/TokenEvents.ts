import EventManager, { AnyFunction } from './Events'

export default class TokenEvents extends EventManager {
    public static events = Object.freeze({
        updated: 'tokenUpdated',
        expired: 'tokenExpired',
    })

    public static override subscribe(eventName: string, listener: AnyFunction) {
        super.subscribe(eventName, listener)
    }

    public static override unsubscribe(eventName: string, listener: AnyFunction) {
        super.unsubscribe(eventName, listener)
    }

    public static override dispatch(eventName: string, data?: unknown) {
        super.dispatch(eventName, data)
    }
}
