import { useEffect, useState } from 'react'
import MainPageComponent from './MainPageComponent'
import { observer } from 'mobx-react-lite'
import CalculatorStore from '../../store/Calculator/CalculatorStore'
import { SimpleEntity } from '../../components/shared/Select/types'

const MainPage: React.FC = () => {
    const [tarif, setTarif] = useState<SimpleEntity | undefined>()
    const [currency, setCurrency] = useState<SimpleEntity | undefined>()
    const [period, setPeriod] = useState<SimpleEntity | undefined>()
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

    const changeTarif = (val: SimpleEntity) => {
        setTarif(val)
        CalculatorStore.setSelectedTarif(val.value)
        if (!notReady) {
            CalculatorStore.calculator()
        }
    }

    const changeCurrency = (val: SimpleEntity) => {
        setCurrency(val)
        CalculatorStore.setSelectedCurrency(val.value)
        if (!notReady) {
            CalculatorStore.calculator()
        }
    }
    const changePeriod = (val: SimpleEntity) => {
        setPeriod(val)
        CalculatorStore.setSelectedPeriod(val.value)
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
