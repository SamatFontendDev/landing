import classNames from 'classnames'
import IconMoney from '../../UI/Icons/IconMoney'
import IconSecure from '../../UI/Icons/IconSecure'
import IconTruck from '../../UI/Icons/IconTruck'
import IconWaiting from '../../UI/Icons/IconWaiting'
import s from './s.module.scss'
import React, { LegacyRef } from 'react'

interface Props {
    ref: any
}

const SecondSection: React.FC<Props> = React.forwardRef(
    (props, ref: LegacyRef<HTMLElement>) => {
        return (
            <section ref={ref} className={s.section}>
                <div className='container'>
                    <h2 className={classNames(s.title, 'title')}>
                        Как это работает
                    </h2>
                    <ul className={s.list}>
                        <li className={s.item}>
                            <div className={s.icon}>
                                <IconWaiting />
                            </div>
                            <div className={s.subtitle}>
                                Прочитай задание внимательно
                            </div>
                            <div className={s.desc}>
                                Думаю у тебя не займет это больше двух-трех
                                минут
                            </div>
                        </li>
                        <li className={s.item}>
                            <div className={s.icon}>
                                <IconTruck />
                            </div>
                            <div className={s.subtitle}>
                                Изучи весь макет заранее
                            </div>
                            <div className={s.desc}>
                                Подумай как это будет работать на разных
                                разрешениях и при скролле
                            </div>
                        </li>
                        <li className={s.item}>
                            <div className={s.icon}>
                                <IconSecure />
                            </div>
                            <div className={s.subtitle}>Сделай хорошо</div>
                            <div className={s.desc}>
                                Чтобы мы могли тебе доверить подобные задачи в
                                будущем
                            </div>
                        </li>
                        <li className={s.item}>
                            <div className={s.icon}>
                                <IconMoney />
                            </div>
                            <div className={s.subtitle}>Получи предложение</div>
                            <div className={s.desc}>
                                Ну тут все просто, не я придумал правила, но
                                думаю так и будет)))
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
)

export default SecondSection
