import React, { useState } from "react";
import { Button } from "react-bootstrap";

import styles from './EventByBootstrap.module.css'

import arrow_left from '../assets/icons/arrow_left.svg'
import share from '../assets/icons/share.svg'

import ProductList from "../components/ProductList";
import EventMainSection from "../components/EventMainSection";

import { Link } from "react-router-dom";

const EventByBootstrap = () => {

    const [currentFilter, setCurrentFilter] = useState('남성의류');
    const handleCurrentFilter = (newFileter) => {
        setCurrentFilter(newFileter);
    }

    return (
        <article className="layout">
            <div>
                <div className={styles.page__style}>
                    <section className={styles.header}>
                        <button className={styles.header__btn}>
                            <img src={arrow_left} alt="왼쪽 화살표" />
                        </button>
                        <h1 className={styles.header__title}>크리스마스 특별할인</h1>
                        <Link to={'/notice'}>
                            <button className={styles.header__btn}>
                                <img src={share} alt="공유하기" />
                            </button>
                        </Link>
                    </section>
                    <EventMainSection />
                    <section>
                        <ul className={styles.filter__list}>
                            <li 
                                className={styles.filter__btn}
                                data-active={currentFilter === '남성의류'}
                                onClick={() => handleCurrentFilter('남성의류')}
                            >
                                남성의류
                            </li>
                            <li 
                                className={styles.filter__btn}
                                data-active={currentFilter === '여성의류'}
                                onClick={() => handleCurrentFilter('여성의류')}
                            >
                                여성의류
                            </li>
                            <li 
                                className={styles.filter__btn}
                                data-active={currentFilter === '가전제품'}
                                onClick={() => handleCurrentFilter('가전제품')}
                            >
                                가전제품
                            </li>
                        </ul>
                        <div className={styles.top__sales}>
                            <h2>실시간 인기 TOP5</h2>

                            <ProductList filter={currentFilter} />

                            <Button className={styles.show__all__btn}>
                                전체 상품 보기
                            </Button>
                        </div>
                    </section>
                    <section className={styles.coupon__section}>
                        <h2>
                            어디서든 사용 가능한
                            <br />
                            15% 쿠폰을 드려요!
                        </h2>
                        <p>쿠폰 지급 기간 : ~ 12월 31일까지</p>
                    </section>
                </div>
            </div>
        </article>
    );
}

export default EventByBootstrap;