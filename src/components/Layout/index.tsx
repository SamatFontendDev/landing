import { Outlet } from 'react-router-dom'
import s from './s.module.scss'
import Header from './Header'
import Footer from './Footer'
import MobileMenu from './MobileMenu'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { changeShowMobileMenu } from '../../redux/reducers'
import React, { forwardRef, useRef } from 'react'
import FirstSection from '../Sections/FirstSection'
import SecondSection from '../Sections/SecondSection'
import ThirdSection from '../Sections/ThirdSection'
import ReviewsSection from '../Sections/ReviewsSection'
import QuestionsSection from '../Sections/QuestionsSection'
import FormSection from '../Sections/FormSection'

const Layout: React.FC = () => {
    const { showMobileMenu } = useAppSelector(s => s.appSlice)
    const dispatch = useAppDispatch()
    const ref1 = React.createRef()
    const ref2 = React.createRef()
    const ref3 = React.createRef()
    const ref4 = React.createRef()

    return (
        <div className={s.wrapper}>
            <Header references={[ref1, ref2, ref3, ref4]} />
            <FirstSection />
            <SecondSection ref={ref1} />
            <ThirdSection ref={ref2} />
            <ReviewsSection />
            <QuestionsSection ref={ref3} />
            <FormSection ref={ref4} />
            <Footer />
            <MobileMenu
                references={[ref1, ref2, ref3, ref4]}
                open={showMobileMenu}
                onClose={() => dispatch(changeShowMobileMenu(false))}
            />
        </div>
    )
}

export default Layout
