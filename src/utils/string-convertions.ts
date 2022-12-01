const makeFirstLettersUpperCase = (text: string): string =>
    text
        .split(' ')
        .map((word: string) => word.toLocaleUpperCase())
        .join(' ')

const convNameAttrToText = (name: string) => {
    return makeFirstLettersUpperCase(name.replace('-', ' '))
}

export { makeFirstLettersUpperCase, convNameAttrToText }
