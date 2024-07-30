import Button from '../../shared/Button'
import s from './s.module.scss'

const FirstSection: React.FC = () => {
    return (
        <section className={s.section}>
            <div className='container'>
                <div className={s.content}>
                    <div className={s.block}>
                        <h1 className={s.title}>
                            Говорят, никогда не поздно сменить профессию
                        </h1>
                        <div className={s.desc}>
                            Сделай круто тестовое задание и у тебя получится
                        </div>
                        <div className={s.center}>
                            <Button color='white'>Проще простого!</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FirstSection
