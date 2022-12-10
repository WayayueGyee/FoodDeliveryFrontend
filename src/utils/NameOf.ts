// export type valueOf<T> = T[Extract<keyof T, string>]
// export function nameOf<T, V extends T[Extract<keyof T, string>]>(
//     f: (x: T) => V
// ): valueOf<{ [K in Extract<keyof T, string>]: T[K] extends V ? K : never }>
// export default function nameOf(f: (x: any) => any): Extract<keyof any, string> {
//     const p = new Proxy(
//         {},
//         {
//             get: (target, key) => key,
//         }
//     )
//     return f(p)
// }

type NameOfOptions = {
    chained: boolean
}

function internalNameOf<T = unknown>(
    expression: (instance: T) => any,
    options: NameOfOptions
): string {
    let accessedProp = ''
    const proxy: any = new Proxy(
        {},
        {
            get: (_, key) => {
                if (options.chained) {
                    if (accessedProp !== '') accessedProp += '.'
                    accessedProp += key.toString()
                } else {
                    accessedProp = key.toString()
                }

                return proxy
            },
        }
    )
    expression(proxy)

    return accessedProp
}

/**
 * @param expression function returning prop to resolve
 * @example nameOf((obj: A) => obj.a.b) // will return "b"
 * @returns {string} name of property returned in ```expression```
 */
export default function nameOf<T = unknown>(expression: (instance: T) => any): string {
    return internalNameOf(expression, {
        chained: false,
    })
}

/**
 * @param expression function returning prop chain to resolve
 * @example nameOf((obj: A) => obj.a.b) // will return "a.b"
 * @returns {string} chained names of properties returned in ```expression```
 */
export function chainedNameOf<T = unknown>(expression: (instance: T) => any): string {
    return internalNameOf(expression, {
        chained: true,
    })
}
