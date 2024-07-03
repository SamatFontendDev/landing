export const formatBalance = (balance: number, decimal: number) => {
    let s = balance.toFixed(decimal).split('').reverse()
    let out = s.splice(0, s.indexOf('.') + 1)
    while (s.length) out.push(...s.splice(0, 3), ' ')
    return out.reverse().join('').trim()
}
