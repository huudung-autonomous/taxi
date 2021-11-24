import React from 'react';

// resources
import FameIcon from '../../resources/images/fame.png';
import SaveIcon from '../../resources/images/save-money.png';
import QualityIcon from '../../resources/images/quality.png';
import BoxIcon from '../../resources/images/box.png';

// styles
import styles from './styles.module.scss';

// interfaces
interface ServicesProps {
    containerRef?: React.RefObject<HTMLDivElement>
}

// main
const Services = ({containerRef}: ServicesProps): JSX.Element => {
    return (
        <div className={styles.container} ref={containerRef}>
            <h3>Giới thiệu về dịch vụ</h3>

            <div className={styles.block}>
                <div className={styles.image}>
                    <img src={SaveIcon} alt="Save" />
                </div>
                <div className={styles.label}>Tiết kiệm</div>
                <div className={styles.desc}>
                    Khách hàng luôn <span>biết trước chi phí, không thêm phí phát sinh</span>.
                </div>
            </div>

            <div className={styles.block}>
                <div className={styles.image}>
                    <img src={FameIcon} alt="Fame" />
                </div>
                <div className={styles.label}>Uy tín, chuyên nghiệp</div>
                <div className={styles.desc}>
                    Lái xe <span>an toàn, chu đáo, nhiệt tình</span>.
                </div>
            </div>

            <div className={styles.block}>
                <div className={styles.image}>
                    <img src={QualityIcon} alt="Quality" />
                </div>
                <div className={styles.label}>Chất lượng</div>
                <div className={styles.desc}>
                    Hệ thống xe <span>đảm bảo tiêu chuẩn, sang trọng, đầy đủ trang bị</span>.
                </div>
            </div>

            <div className={styles.block}>
                <div className={styles.image}>
                    <img src={BoxIcon} alt="Box" />
                </div>
                <div className={styles.label}>Trọn gói</div>
                <div className={styles.desc}>
                    Khách hàng có thể lựa chọn <span>dịch vụ 2 chiều</span>, chi phí <span>được tính trọn gói</span> từ khi chốt hợp đồng, <span>không phí phát sinh</span>.
                </div>
            </div>
        </div>
    );
};

export default Services;