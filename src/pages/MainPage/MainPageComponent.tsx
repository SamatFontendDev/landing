import Loader from '../../components/UI/Loader'
import Button from '../../components/shared/Button'
import Select from '../../components/shared/Select'
import { SimpleEntity } from '../../components/shared/Select/types'
import { currencies, periods, tariffs } from '../../utils/constans/data'
import Amount from './Amount'
import s from './s.module.scss'

interface Props {
    changeTarif: (val: SimpleEntity) => void
    tarif: SimpleEntity | undefined
    changeCurrency: (val: SimpleEntity) => void
    currency: SimpleEntity | undefined
    changePeriod: (val: SimpleEntity) => void
    period: SimpleEntity | undefined
    disabled: boolean
    error: boolean
    loadingCourses: boolean
    handleClickBtn: () => void
    amount: number | null
    amountDiscont: number | null
    selectedCurrency: string | null
}

const MainPageComponent: React.FC<Props> = props => {
    const {
        changeTarif,
        tarif,
        changeCurrency,
        changePeriod,
        currency,
        period,
        disabled,
        error,
        loadingCourses,
        handleClickBtn,
        amount,
        amountDiscont,
        selectedCurrency
    } = props

    return (
        <div className={s.wrapper}>
            {loadingCourses && (
                <div className={s.center}>
                    <Loader />
                </div>
            )}
            {error && <div className={s.center}>Что-то пошло не так...</div>}
            {!loadingCourses && !error && (
                <div>
                    <div className={s.block}>
                        <div className={s.title}>Рассчитать стоимость</div>
                        <Select
                            selected={tarif}
                            placeholder='Выбрать'
                            onChange={changeTarif}
                            options={tariffs}
                            label='Выберите тариф'
                        />
                        <Select
                            placeholder='Выбрать'
                            onChange={changeCurrency}
                            options={currencies}
                            label='Выберите валюту'
                            selected={currency}
                        />
                        <Select
                            selected={period}
                            placeholder='Выбрать'
                            onChange={changePeriod}
                            options={periods}
                            label='Выберите период'
                        />
                        <Button onClick={handleClickBtn} disabled={disabled}>
                            Рассчитать
                        </Button>
                    </div>
                </div>
            )}
            {amount && (
                <Amount
                    amount={amount}
                    discount={amountDiscont}
                    cuurrency={selectedCurrency}
                />
            )}
        </div>
    )
}

export default MainPageComponent
