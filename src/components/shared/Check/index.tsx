import classNames from 'classnames'
import IconCheck from '../../UI/Icons/IconCheck'
import s from './s.module.scss'

interface Props {
    checked?: boolean
    onClick?: () => void
    label?: string
}

const Check: React.FC<Props> = props => {
    const { checked, onClick, label } = props

    return (
        <div className={s.checkbox}>
            <div
                onClick={onClick}
                className={classNames(s.wrapper, checked ? s.active : '')}
            >
                <input type='checkbox' checked={checked} />
                {checked && <IconCheck />}
            </div>
            {label && <span>{label}</span>}
        </div>
    )
}

export default Check
