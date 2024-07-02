import { Outlet } from 'react-router-dom'
import s from './s.module.scss'

const Layout: React.FC = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
