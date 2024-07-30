import s from './s.module.scss'

interface Props {
    name: string
    type?: string
    value: string | number
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    readOnly?: boolean
}

const Field: React.FC<Props> = props => {
    const { name, value, onChange, placeholder, readOnly, type } = props

    return (
        <div className={s.wrapper}>
            <input
                type={type ? type : 'text'}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                readOnly={readOnly}
                className={s.input}
            />
        </div>
    )
}

export default Field
