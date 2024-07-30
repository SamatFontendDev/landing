import classnames from 'classnames'
import s from './s.module.scss'

interface Props {
    children: React.ReactNode | string
    disabled?: boolean
    onClick?: () => void
    color?: 'white' | 'blue'
}

const Button: React.FC<Props> = (props: Props): React.ReactElement => {
    const { children, disabled, onClick, color } = props

    return (
        <button
            onClick={disabled ? () => {} : onClick}
            className={classnames(
                s.button,
                disabled ? s.disabled : '',
                color === 'blue' ? s.blue : s.white
            )}
        >
            {children}
        </button>
    )
}
export default Button
