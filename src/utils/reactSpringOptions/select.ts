const ReactSpringSelectOptions = {
    from: { opacity: 0, transform: 'translateY(-12px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(-12px)' }
}

export interface ReactSpringSelectProperties {
    opacity: number
    transform: string
}

export { ReactSpringSelectOptions }
