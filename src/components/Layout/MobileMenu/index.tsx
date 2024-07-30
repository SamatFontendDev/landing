import { animated, useTransition } from '@react-spring/web'
import s from './s.module.scss'
import { ReactSpringMobileOptions } from '../../../utils/reactSpringOptions/mobileMenu'
import Logo from '../../UI/Logo'
import IconClose from '../../UI/Icons/IconClose'
import IconArrowForMobileMenu from '../../UI/Icons/IconArrowForMobileMenu'
import { nav } from '../../../utils/constans/data'

interface Props {
    open: boolean
    onClose: () => void
    references: React.RefObject<unknown>[]
}

const MobileMenu: React.FC<Props> = props => {
    const { onClose, open, references } = props
    const transition = useTransition(open, ReactSpringMobileOptions)

    const clickHandler = (ref: any) => {
        ref.current.scrollIntoView({
            behavior: 'smooth'
        })
        onClose()
    }

    return (
        <>
            {transition(
                (tStyles, state) =>
                    state && (
                        <animated.div style={tStyles} className={s.wrapper}>
                            <div className='container'>
                                {transition(
                                    (tStyles, state) =>
                                        state && (
                                            <animated.div style={tStyles}>
                                                <div className={s.header}>
                                                    <Logo color='black' />
                                                    <span onClick={onClose}>
                                                        <IconClose />
                                                    </span>
                                                </div>
                                                <ul className={s.list}>
                                                    {nav.map((text, i) => (
                                                        <li
                                                            onClick={() =>
                                                                clickHandler(
                                                                    references[
                                                                        i
                                                                    ]
                                                                )
                                                            }
                                                            key={text}
                                                            className={s.item}
                                                        >
                                                            <span>{text}</span>
                                                            <IconArrowForMobileMenu />
                                                        </li>
                                                    ))}
                                                </ul>
                                            </animated.div>
                                        )
                                )}
                            </div>
                        </animated.div>
                    )
            )}
        </>
    )
}

export default MobileMenu
