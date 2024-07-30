import classNames from 'classnames'
import s from './s.module.scss'

interface Props {
    color: 'white' | 'black'
}

const Logo: React.FC<Props> = props => {
    const { color } = props

    return (
        <a href='/' className={s.logo}>
            <div className={s.circles}>
                <span className={classNames(s.circleBlue, s.circle)}></span>
                <span className={classNames(s.circleWhite, s.circle)}></span>
            </div>
            <span
                className={classNames(
                    s.text,
                    color === 'white' ? s.textWhite : s.textBlack
                )}
            >
                testLab
            </span>
        </a>
    )
}

export default Logo
