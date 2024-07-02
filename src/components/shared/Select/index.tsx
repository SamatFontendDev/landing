import { animated, useTransition } from '@react-spring/web'
import classnames from 'classnames'
import { useRef, useState } from 'react'
import styles from './s.module.scss'
import { SimpleEntity } from './types'
import { ReactSpringSelectOptions } from '../../../utils/reactSpringOptions/select'
import useOnClickOutside from '../../../hooks/useOnClickOutside'

interface Props {
    selected?: string | null
    placeholder?: string
    options: SimpleEntity[]
    onChange: (value: string) => void
    className?: string
    label?: string
    disabled?: boolean
}

const Select: React.FC<Props> = (props: Props): React.ReactElement => {
    const {
        selected,
        options,
        placeholder,
        onChange,
        className,
        label,
        disabled
    } = props

    const [isOpen, setOpen] = useState<boolean>(false)
    const transition = useTransition(isOpen, ReactSpringSelectOptions)

    const refModel = useRef() as React.MutableRefObject<HTMLDivElement>
    useOnClickOutside(refModel, () => setOpen(false))

    const openList = (): void => {
        setOpen(true)
    }

    const handleClickItem = (value: string): void => {
        if (value !== selected) {
            onChange(value)
        }

        setOpen(false)
    }

    return (
        <div
            className={classnames(
                styles.wrapper,
                className,
                disabled ? styles.disabled : ''
            )}
        >
            {label && <label>{label}</label>}

            <div className={styles.block} onClick={openList}>
                {selected &&
                    options.filter(item => item.value === selected)[0].text}
                {placeholder && !selected && placeholder}
                {!placeholder && !selected && 'Placeholder'}
            </div>

            {transition(
                (tStyles, state) =>
                    state && (
                        <animated.div
                            style={tStyles}
                            className={styles.list}
                            ref={refModel}
                        >
                            {options.map(item => (
                                <div
                                    key={item.value}
                                    className={classnames(
                                        styles.listItem,
                                        item.value === selected
                                            ? styles.listItemActive
                                            : ''
                                    )}
                                    onClick={() => handleClickItem(item.value)}
                                >
                                    {item.text}
                                </div>
                            ))}
                        </animated.div>
                    )
            )}
        </div>
    )
}

export default Select
