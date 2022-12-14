export type AnyFunction = (...args: any) => any | undefined

export default class EventManager {
    public static subscribe(eventName: string, listener: AnyFunction) {
        document.addEventListener(eventName, listener)
    }

    public static unsubscribe(eventName: string, listener: AnyFunction) {
        document.removeEventListener(eventName, listener)
    }

    public static dispatch(eventName: string, data?: unknown) {
        const event = new CustomEvent(eventName, { detail: data })
        document.dispatchEvent(event)
    }
}
