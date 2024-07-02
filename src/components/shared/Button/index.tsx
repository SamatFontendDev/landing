import classnames from 'classnames'
import s from './s.module.scss'

interface Props {
    children: React.ReactNode | string
    disabled?: boolean
    className?: string
    onClick?: () => void
}

const Button: React.FC<Props> = (props: Props): React.ReactElement => {
    const { children, disabled, onClick } = props

    return (
        <button
            onClick={disabled ? () => {} : onClick}
            className={classnames(s.button, disabled ? s.disabled : '')}
        >
            {children}
        </button>
    )
}
export default Button
