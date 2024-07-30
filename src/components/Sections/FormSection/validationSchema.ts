import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Укажите имя!'),
    phone: Yup.string().required('Укажите телефон!')
})

export default validationSchema
