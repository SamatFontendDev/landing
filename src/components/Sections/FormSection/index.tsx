import { FormikProps, useFormik } from 'formik'
import Field from '../../shared/Field'
import s from './s.module.scss'
import { Values } from './types'
import React, { LegacyRef, useEffect, useState } from 'react'
import validationSchema from './validationSchema'
import Check from '../../shared/Check'
import Button from '../../shared/Button'
import classNames from 'classnames'

interface Props {
    ref: any
}

const FormSection: React.FC<Props> = React.forwardRef(
    (props, ref: LegacyRef<HTMLElement>) => {
        const formik: FormikProps<Values> = useFormik<Values>({
            initialValues: {
                name: '',
                phone: ''
            } as Values,
            validationSchema: validationSchema,
            validateOnChange: false,

            onSubmit: async (values: Values) => {
                alert('Не знаю куда отправлять данные')
            }
        })

        const handleChangPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
            let value = e.target.value.replace(/[^\d.]/g, '')
            formik.setFieldValue('phone', value)
        }

        return (
            <section ref={ref} className={s.section}>
                <div className='container'>
                    <div className={s.wrapper}>
                        <h2 className={classNames(s.title, 'title')}>
                            Отправь форму
                        </h2>
                        <div className={s.form}>
                            <Field
                                placeholder='Имя'
                                name='name'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                            />
                            <Field
                                placeholder='Телефон'
                                name='phone'
                                value={formik.values.phone}
                                onChange={handleChangPhone}
                            />
                            <Check
                                label='Согласен, отказываюсь'
                                onClick={() =>
                                    formik.setFieldValue(
                                        'agree',
                                        !formik.values.agree
                                    )
                                }
                                checked={formik.values.agree}
                            />
                            <Button color='blue' onClick={formik.handleSubmit}>
                                Отправить
                            </Button>
                        </div>
                        <div className={s.errors}>
                            {formik.errors &&
                                Object.values(formik.errors).map(error => (
                                    <span key={error} className={s.error}>
                                        {error}
                                    </span>
                                ))}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
)

export default FormSection
