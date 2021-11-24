import React from 'react';

// resources
import CovidImage from '../../resources/images/covid.jpeg';
import HolidayImage from '../../resources/images/holiday.jpeg';
import AdsImage from '../../resources/images/ads.jpeg';

// styles
import styles from './styles.module.scss';

// interfaces
interface NewsProps {
    containerRef?: React.RefObject<HTMLDivElement>
}

// main
const News = ({ containerRef }: NewsProps): JSX.Element => {
    return (
        <div className={styles.container} ref={containerRef}>
            <h3>Tin tức và khuyến mại</h3>

            <div className={styles.block}>
                <div
                    className={styles.image}
                    style={{
                        backgroundImage: `url(${AdsImage})`
                    }}
                />
                <div className={styles.label}>Tài xế Taxihoanglinh tìm và trả lại khách hàng tài sản trên xe.</div>
                <div className={styles.desc}>
                    Ngày <span>18/11/2021</span>, tài xế <span>Trương Quốc Tuấn</span> của hãng xe <span>Hoàng Linh</span> tìm thấy túi xách trên xe 16 chỗ và đã liên hệ trả lại thành công cho chị <span>Trần Thanh Nga</span>, địa chỉ <span>Gò Vấp, TP HCM</span> sau chuyến đi Đà Lạt với gia đình.
                    Hãng xe đã tuyên dương và tặng thưởng cho tài xế <span>Trương Quốc Tuấn</span>. Rất mong các tài xế của <span className={styles.name}>Taxihoanglinh</span> sẽ có thêm nhiều hành động đẹp trên từng chuyến đi.
                </div>
            </div>

            <div className={styles.block}>
                <div
                    className={styles.image}
                    style={{
                        backgroundImage: `url(${HolidayImage})`
                    }}
                />
                <div className={styles.label}>Chương trình giảm giá Black Friday.</div>
                <div className={styles.desc}>
                    Không chỉ các mặt hàng tiêu dùng mới giảm giá <span>11/11</span>, <span className={styles.name}>Taxihoanglinh</span> cũng giảm giá các chuyến đi từ <span>11/11</span> đến hết <span>31/11/2021</span>.
                </div>
            </div>

            <div className={styles.block}>
                <div
                    className={styles.image}
                    style={{
                        backgroundImage: `url(${CovidImage})`
                    }}
                />
                <div className={styles.label}>Giảm giá, hỗ trợ sau đại dịch Covid-19.</div>
                <div className={styles.desc}>
                    <span className={styles.name}>Taxihoanglinh</span> giảm <span>20%</span> cho khách đặt xe đi đường dài, liên tỉnh đến hết <span>31/12/2021</span>.
                </div>
            </div>
        </div>
    );
};

export default News;