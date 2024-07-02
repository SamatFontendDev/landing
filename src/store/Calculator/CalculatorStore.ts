import { makeAutoObservable } from 'mobx'
import { Rates } from '../../services/Courses/types'
import CoursesService from '../../services/Courses/CoursesService'
import { Currencies, Periods, Prices, Tarrifs } from './types'

class CalculatorStore {
    courses: Rates | null = null
    isLoadingCourses: boolean = false
    error: boolean = false
    selectedTarif: string | null = null
    selectedCurrency: string | null = null
    selectedPeriod: string | null = null
    amount: number | null = null
    amountDiscont: number | null = null

    constructor() {
        makeAutoObservable(this)
    }

    async fetchCourses() {
        try {
            this.isLoadingCourses = true
            const response = await CoursesService.getCourses()
            const { rates } = response.data
            this.courses = rates
        } catch (e) {
            console.log(e)
            this.error = true
        } finally {
            this.isLoadingCourses = false
        }
    }

    private getCourses(cur: string | null) {
        const { courses } = this

        if (cur && courses && cur in courses) {
            return courses[cur]
        }

        return 1
    }

    setSelectedTarif(tarif: string) {
        this.selectedTarif = tarif
    }
    setSelectedCurrency(cur: string) {
        this.selectedCurrency = cur
    }
    setSelectedPeriod(period: string) {
        this.selectedPeriod = period
    }

    calculator() {
        const allReady =
            this.selectedTarif && this.selectedCurrency && this.selectedPeriod
                ? true
                : false
        const { selectedCurrency, selectedPeriod, selectedTarif } = this
        let { amount, amountDiscont } = this

        if (
            selectedTarif === Tarrifs.standart &&
            selectedPeriod === Periods.mounth &&
            allReady
        ) {
            this.amount =
                Prices.standartMounth * this.getCourses(this.selectedCurrency)
            this.amountDiscont = null
            return
        }

        if (
            allReady &&
            selectedTarif === Tarrifs.advanced &&
            selectedPeriod === Periods.mounth
        ) {
            this.amount =
                Prices.advancedMounth * this.getCourses(selectedCurrency)
            this.amountDiscont = null
            return
        }

        if (
            allReady &&
            selectedTarif === Tarrifs.standart &&
            selectedPeriod === Periods.year
        ) {
            this.amount =
                Prices.standartYear * this.getCourses(selectedCurrency)
            this.amountDiscont =
                Prices.standartMounth * 12 * this.getCourses(selectedCurrency) -
                this.amount
            return
        }

        if (
            allReady &&
            selectedTarif === Tarrifs.advanced &&
            selectedPeriod === Periods.year
        ) {
            this.amount =
                Prices.advancedYear * this.getCourses(selectedCurrency)
            this.amountDiscont =
                Prices.advancedMounth * 12 * this.getCourses(selectedCurrency) -
                this.amount
            return
        }
    }
}

export default new CalculatorStore()
