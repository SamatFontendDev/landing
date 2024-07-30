import { useState } from 'react'
import s from './s.module.scss'
import IconPlus from '../../UI/Icons/IconPlus'
import { ReactSpringAccOptions } from '../../../utils/reactSpringOptions/accordion'
import { useTransition, animated } from '@react-spring/web'
import classNames from 'classnames'

interface Props {
    title: string
    text: string
}

const Question: React.FC<Props> = props => {
    const { text, title } = props
    const [open, setOpen] = useState<boolean>(false)
    const transition = useTransition(open, ReactSpringAccOptions)

    return (
        <div className={s.wrapper}>
            <div onClick={() => setOpen(!open)} className={s.top}>
                <div className={s.title}>{title}</div>
                <span>
                    <span className={s.circle}>
                        <span
                            className={classNames(open ? s.active : '', s.plus)}
                        >
                            <IconPlus />
                        </span>
                    </span>
                </span>
            </div>
            {transition(
                (tStyles, state) =>
                    state && (
                        <animated.div style={tStyles} className={s.content}>
                            <p>{text}</p>
                        </animated.div>
                    )
            )}
        </div>
    )
}

export default Question
