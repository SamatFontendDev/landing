import { useAppDispatch } from '../../../hooks/redux'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { changeShowMobileMenu } from '../../../redux/reducers'
import { nav } from '../../../utils/constans/data'
import { MEDIA_QUERY_TABLET } from '../../../utils/constans/MediaQueryConstants'
import Logo from '../../UI/Logo'
import s from './s.module.scss'

interface Props {
    references: React.RefObject<unknown>[]
}

const Header: React.FC<Props> = props => {
    const isTablet = useMediaQuery(MEDIA_QUERY_TABLET)
    const dispatch = useAppDispatch()

    const { references } = props
    const clickHandler = (ref: any) => {
        ref.current.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <header className={s.header}>
            <div className='container'>
                <div className={s.wrapper}>
                    <Logo color='white' />
                    {isTablet ? (
                        <div
                            onClick={() => dispatch(changeShowMobileMenu(true))}
                            className={s.hamburger}
                        >
                            <span></span>
                            <span></span>
                        </div>
                    ) : (
                        <nav>
                            <ul className={s.navList}>
                                {nav.map((text, i) => (
                                    <li
                                        onClick={() =>
                                            clickHandler(references[i])
                                        }
                                        key={text}
                                        className={s.navItem}
                                    >
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header
