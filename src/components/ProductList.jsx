import React from "react";

import { Card } from "react-bootstrap";
import styles from '../pages/EventByBootstrap.module.css'

import product1 from '../assets/images/event/products/product1.png';
import product2 from '../assets/images/event/products/product2.png';

const productList = [
    {
        type: '남성의류',
        products: [
            {
                img: product1,
                type: '셔츠/블라우스',
                productName: '남자꺼1',
                percent: 50,
                price: 50000
            },
            {
                img: product2,
                type: '셔츠/블라우스',
                productName: '남자꺼2',
                percent: 50,
                price: 100000
            },
            {
                img: product1,
                type: '셔츠/블라우스',
                productName: '남자꺼3',
                percent: 50,
                price: 50000
            },
            {
                img: product1,
                type: '셔츠/블라우스',
                productName: '남자꺼4',
                percent: 50,
                price: 50000
            }
        ]
    },
    {
        type: '여성의류',
        products: [
            {
                img: product1,
                type: '셔츠/블라우스',
                productName: '여자꺼1',
                percent: 50,
                price: 50000
            },
            {
                img: product2,
                type: '셔츠/블라우스',
                productName: '여자꺼2',
                percent: 50,
                price: 100000
            },
            {
                img: product1,
                type: '셔츠/블라우스',
                productName: '여자꺼3',
                percent: 50,
                price: 50000
            },
            {
                img: product1,
                type: '셔츠/블라우스',
                productName: '여자꺼4',
                percent: 50,
                price: 50000
            }
        ]
    },
    {
        type: '가전제품',
        products: [
            {
                img: product1,
                type: '셔츠/블라우스',
                productName: '가전제품1',
                percent: 50,
                price: 50000
            },
            {
                img: product2,
                type: '셔츠/블라우스',
                productName: '가전제품2',
                percent: 50,
                price: 100000
            },
            {
                img: product1,
                type: '셔츠/블라우스',
                productName: '가전제품3',
                percent: 50,
                price: 50000
            },
            {
                img: product1,
                type: '셔츠/블라우스',
                productName: '가전제품4',
                percent: 50,
                price: 50000
            }
        ]
    }
]

const ProductList = (f) => {
    const result = productList.filter((product) => product.type === f.filter);
    
    return (
        <div className={styles.top__sales_list}>
            {result[0].products.map((e, i) => (
                <Card style={{ minWidth: 240, borderRadius: 16 }}>
                    <Card.Img src={e.img} className={styles.product__image} />
                    <Card.Body style={{ padding: 0 }}>
                        <div className={styles.product}>
                            <div className={styles.content}>
                                <div>
                                    <p>{e.type}</p>
                                    <h3>{e.productName}</h3>
                                </div>
                                <div className={styles.price__layout}>
                                    <p className={styles.percent}>{e.percent}%</p>
                                    <p className={styles.price}>{e.price.toLocaleString()}원</p>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default ProductList;