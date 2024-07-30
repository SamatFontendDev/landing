import classNames from 'classnames'
import {
    blocks,
    questions,
    QuestionType,
    TextBlock
} from '../../../utils/constans/data'
import Question from '../../shared/Question'
import s from './s.module.scss'
import React, { LegacyRef } from 'react'

interface Props {
    ref: any
}

const QuestionsSection: React.FC<Props> = React.forwardRef(
    (props, ref: LegacyRef<HTMLElement>) => {
        return (
            <section ref={ref} className={s.section}>
                <div className='container'>
                    <h2 className={classNames(s.title, 'title')}>
                        Вопросы и ответы
                    </h2>
                    <div className={s.wrapper}>
                        {questions.map((item: QuestionType) => (
                            <Question
                                key={item.id}
                                text={item.desc}
                                title={item.title}
                            />
                        ))}
                    </div>
                    <div className={s.textBlocks}>
                        {blocks.map((item: TextBlock) => (
                            <div key={item.id} className={s.block}>
                                <div className={s.subtitle}>{item.title}</div>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }
)

export default QuestionsSection
