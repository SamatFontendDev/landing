import s from './s.module.scss'

const Footer: React.FC = () => {
    return (
        <footer>
            <div className='container'>
                <div className={s.wrapper}>
                    <span>© 2021 Лаборатория интернет</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
