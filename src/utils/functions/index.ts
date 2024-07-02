import { SimpleEntity } from '../../components/shared/Select/types'

export const findValue = (arr: SimpleEntity[], text: string): string => {
    const value = arr.find(el => el.value === text)?.value || ''

    return value
}

export const formatBalance = (balance: number, decimal: number) => {
    let s = balance.toFixed(decimal).split('').reverse()
    let out = s.splice(0, s.indexOf('.') + 1)
    while (s.length) out.push(...s.splice(0, 3), ' ')
    return out.reverse().join('').trim()
}
