import { SimpleEntity } from '../../components/shared/Select/types'
import { Currencies, Periods, Tarrifs } from '../../store/Calculator/types'

export const tariffs: SimpleEntity[] = [
    { text: 'Стандартный', value: Tarrifs.standart },
    { text: 'Продвинутый', value: Tarrifs.advanced }
]

export const currencies: SimpleEntity[] = [
    { text: 'Рубли', value: Currencies.RUB },
    { text: 'Юани', value: Currencies.CNY },
    { text: 'Тенге', value: Currencies.KZT }
]

export const periods: SimpleEntity[] = [
    { text: 'Месяц', value: Periods.mounth },
    { text: 'Год', value: Periods.year }
]
