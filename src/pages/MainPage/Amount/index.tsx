import { formatBalance } from '../../../utils/functions'
import s from '../s.module.scss'

interface Props {
    cuurrency: string | null
    amount: number | null
    discount: number | null
}

export const Amount: React.FC<Props> = props => {
    const { amount, cuurrency, discount } = props

    return (
        <div>
            <div className={s.block}>
                <div>
                    <span>Итого:</span>{' '}
                    <span>{formatBalance(Number(amount), 2)}</span>{' '}
                    <span>{cuurrency}</span>
                </div>
                {discount && (
                    <div>
                        <span>Скидка:</span>{' '}
                        <span>{formatBalance(Number(discount), 2)}</span>{' '}
                        <span>{cuurrency}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Amount
