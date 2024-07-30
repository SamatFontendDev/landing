import s from './s.module.scss'
import img from '../../../imgs/secondSection.png'
import React, { LegacyRef } from 'react'

interface Props {
    ref: any
}

const ThirdSection: React.FC<Props> = React.forwardRef(
    (props, ref: LegacyRef<HTMLElement>) => {
        return (
            <section ref={ref} className={s.section}>
                <div className='container'>
                    <div className={s.wrapper}>
                        <div className={s.left}>
                            <h2 className={s.title}>
                                Круто, ты дошел до третьего блока
                            </h2>
                            <div className={s.desc}>
                                <p>
                                    63% опрошенных пользовались кредитами из-за
                                    того, что не могли покрыть непредвиденные
                                    расходы свыше 15 000 ₽.
                                </p>

                                <p>
                                    Доступ к заработанным деньгам помогает
                                    отказаться от кредитов и экономить деньги на
                                    процентах и штрафах.
                                </p>
                            </div>
                        </div>
                        <div className={s.right}>
                            <div>
                                <img src={img} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
)

export default ThirdSection
