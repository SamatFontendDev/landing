const ReactSpringMobileOptions = {
    from: { opacity: 0, transform: 'translateY(-40px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(-40px)' }
}

export interface ReactSpringMobileProperties {
    opacity: number
}

export { ReactSpringMobileOptions }
