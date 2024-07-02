import axios from 'axios'

const baseURLCurrencies = 'https://www.cbr-xml-daily.ru/'

const $apiCur = axios.create({
    baseURL: baseURLCurrencies,
    headers: {
        'Content-type': 'application/json'
    }
})

export { $apiCur }
