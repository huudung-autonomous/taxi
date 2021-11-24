import React from 'react';

// resources
import VolvoImage from '../../resources/images/volvo.jpeg';
import LincolnImage from '../../resources/images/lincoln.jpg';
import CoachImage from '../../resources/images/coach.jpeg';

// styles
import styles from './styles.module.scss';

// main
const Cars = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <h3>Giới thiệu các loại xe</h3>

            <div className={styles.item}>
                <div className={styles.image} style={{ backgroundImage: `url(${CoachImage})` }} />
                <div className={styles.label}>Các dòng xe 16-29-45 chỗ</div>
                <p>Phù hợp những chuyến dành cho <span>công ty, xí nghiệp, tập thể</span>... Không gian <span>thoải mái, đầy đủ tiện nghi, giá thành ưu đãi</span>.</p>
            </div>

            <div className={styles.item}>
                <div className={styles.image} style={{ backgroundImage: `url(${LincolnImage})` }} />
                <div className={styles.label}>Các dòng xe 7 chỗ</div>
                <p>Phù hợp những chuyến đi chung với <span>đại gia đình, bạn bè</span>... Không gian <span>rộng rãi, thoải mái</span>.</p>
            </div>

            <div className={styles.item}>
                <div className={styles.image} style={{ backgroundImage: `url(${VolvoImage})` }} />
                <div className={styles.label}>Các dòng xe 4 chỗ</div>
                <p>Dành cho những chuyến đi <span>gia đình nhỏ, cặp đôi</span> hoặc các <span>chuyến đi ngắn</span>... Giá thành <span>tiết kiệm, di chuyển linh hoạt</span>.</p>
            </div>
        </div>
    );
};

export default Cars;