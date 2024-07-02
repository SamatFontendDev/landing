import { useEffect, useState } from 'react'
import MainPageComponent from './MainPageComponent'
import { observer } from 'mobx-react-lite'
import CalculatorStore from '../../store/Calculator/CalculatorStore'
import { currencies, periods, tariffs } from '../../utils/constans/data'
import { findValue } from '../../utils/functions'

const MainPage: React.FC = () => {
    const [tarif, setTarif] = useState<string | undefined>()
    const [currency, setCurrency] = useState<string | undefined>()
    const [period, setPeriod] = useState<string | undefined>()
    const {
        courses,
        isLoadingCourses,
        error,
        amount,
        amountDiscont,
        selectedCurrency
    } = CalculatorStore
    useEffect(() => {
        if (!courses) {
            CalculatorStore.fetchCourses()
        }
    }, [])
    const notReady: boolean = tarif && currency && period ? false : true

    const changeTarif = (val: string) => {
        setTarif(val)
        CalculatorStore.setSelectedTarif(findValue(tariffs, val))
        if (!notReady) {
            CalculatorStore.calculator()
        }
    }

    const changeCurrency = (val: string) => {
        setCurrency(val)
        CalculatorStore.setSelectedCurrency(findValue(currencies, val))
        if (!notReady) {
            CalculatorStore.calculator()
        }
    }
    const changePeriod = (val: string) => {
        setPeriod(val)
        CalculatorStore.setSelectedPeriod(findValue(periods, val))
        if (!notReady) {
            CalculatorStore.calculator()
        }
    }

    const handleClickBtn = () => {
        if (!notReady) {
            CalculatorStore.calculator()
        }
    }

    return (
        <MainPageComponent
            amount={amount}
            amountDiscont={amountDiscont}
            selectedCurrency={selectedCurrency}
            handleClickBtn={handleClickBtn}
            error={error}
            loadingCourses={isLoadingCourses}
            disabled={notReady}
            changePeriod={changePeriod}
            period={period}
            changeCurrency={changeCurrency}
            currency={currency}
            changeTarif={changeTarif}
            tarif={tarif}
        />
    )
}

export default observer(MainPage)
