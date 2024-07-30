import s from './s.module.scss'
import imgDefault from '../../../imgs/defaultUser.png'
import img1 from '../../../imgs/user1.png'
import img2 from '../../../imgs/user2.png'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/pagination'
import classNames from 'classnames'
import IconArrowPrev from '../../UI/Icons/IconArrowPrev'
import IconArrowNext from '../../UI/Icons/IconArrowNext'
import { useRef, useState } from 'react'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import {
    MEDIA_QUERY_MOBILE,
    MEDIA_QUERY_TABLET
} from '../../../utils/constans/MediaQueryConstants'

const ReviewsSection: React.FC = () => {
    const swiperRef = useRef() as any
    const isTablet = useMediaQuery(MEDIA_QUERY_TABLET)
    const isMobile = useMediaQuery(MEDIA_QUERY_MOBILE)
    const [index, setIndex] = useState<number>(0)

    return (
        <section className={s.section}>
            <div className='container'>
                <h2 className={classNames(s.title, 'title')}>Отзывы</h2>
                <div className={s.slider}>
                    {!isTablet && (
                        <>
                            <span
                                onClick={() => swiperRef.current.slidePrev()}
                                className={classNames(
                                    s.btn,
                                    s.prev,
                                    index !== 0 ? s.active : ''
                                )}
                            >
                                <IconArrowPrev />
                            </span>
                            <span
                                onClick={() => swiperRef.current.slideNext()}
                                className={classNames(
                                    s.btn,
                                    s.next,
                                    index !== 4 ? s.active : ''
                                )}
                            >
                                <IconArrowNext />
                            </span>
                        </>
                    )}

                    <Swiper
                        onSlideChange={(swiper: any) => {
                            setIndex(swiper.activeIndex)
                        }}
                        onSwiper={(swiper: any) => {
                            swiperRef.current = swiper
                        }}
                        navigation
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        spaceBetween={isTablet ? 46 : 32}
                        slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
                    >
                        <SwiperSlide>
                            <div className={s.slide}>
                                <div className={s.user}>
                                    <div className={s.avatar}>
                                        <img src={imgDefault} />
                                    </div>
                                    <div>
                                        <div className={s.name}>
                                            Константинов Михаил Павлович
                                        </div>
                                        <div className={s.city}>
                                            Санкт-Петербург
                                        </div>
                                    </div>
                                </div>
                                <div className={s.desc}>
                                    Каждый из нас понимает очевидную вещь:
                                    перспективное планирование предоставляет
                                    широкие возможности для анализа существующих
                                    паттернов поведения. В своём стремлении
                                    улучшить пользовательский опыт мы{' '}
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.slide}>
                                <div className={s.user}>
                                    <div>
                                        <img src={img1} />
                                    </div>
                                    <div>
                                        <div className={s.name}>
                                            Иван Иванов
                                        </div>
                                        <div className={s.city}>
                                            Санкт-Петербург
                                        </div>
                                    </div>
                                </div>
                                <div className={s.desc}>
                                    Каждый из нас понимает очевидную вещь:
                                    перспективное планирование предоставляет
                                    широкие возможности для анализа существующих
                                    паттернов поведения. В своём стремлении
                                    улучшить пользовательский опыт мы упускаем,
                                    что активно развивающиеся страны третьего
                                    мира призваны к ответу.
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.slide}>
                                <div className={s.user}>
                                    <div>
                                        <img src={img2} />
                                    </div>
                                    <div>
                                        <div className={s.name}>
                                            Артем Корнилов
                                        </div>
                                        <div className={s.city}>Самара</div>
                                    </div>
                                </div>
                                <div className={s.desc}>
                                    Каждый из нас понимает очевидную вещь:
                                    перспективное планирование предоставляет
                                    широкие возможности для анализа существующих
                                    паттернов поведения.
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.slide}>
                                <div className={s.user}>
                                    <div>
                                        <img src={img2} />
                                    </div>
                                    <div>
                                        <div className={s.name}>
                                            Артем Корнилов
                                        </div>
                                        <div className={s.city}>Самара</div>
                                    </div>
                                </div>
                                <div className={s.desc}>
                                    Каждый из нас понимает очевидную вещь:
                                    перспективное планирование предоставляет
                                    широкие возможности для анализа существующих
                                    паттернов поведения.
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.slide}>
                                <div className={s.user}>
                                    <div>
                                        <img src={img2} />
                                    </div>
                                    <div>
                                        <div className={s.name}>
                                            Артем Корнилов
                                        </div>
                                        <div className={s.city}>Самара</div>
                                    </div>
                                </div>
                                <div className={s.desc}>
                                    Каждый из нас понимает очевидную вещь:
                                    перспективное планирование предоставляет
                                    широкие возможности для анализа существующих
                                    паттернов поведения.
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.slide}>
                                <div className={s.user}>
                                    <div>
                                        <img src={img2} />
                                    </div>
                                    <div>
                                        <div className={s.name}>
                                            Артем Корнилов
                                        </div>
                                        <div className={s.city}>Самара</div>
                                    </div>
                                </div>
                                <div className={s.desc}>
                                    Каждый из нас понимает очевидную вещь:
                                    перспективное планирование предоставляет
                                    широкие возможности для анализа существующих
                                    паттернов поведения.
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.slide}>
                                <div className={s.user}>
                                    <div>
                                        <img src={img2} />
                                    </div>
                                    <div>
                                        <div className={s.name}>
                                            Артем Корнилов
                                        </div>
                                        <div className={s.city}>Самара</div>
                                    </div>
                                </div>
                                <div className={s.desc}>
                                    Каждый из нас понимает очевидную вещь:
                                    перспективное планирование предоставляет
                                    широкие возможности для анализа существующих
                                    паттернов поведения.
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default ReviewsSection
