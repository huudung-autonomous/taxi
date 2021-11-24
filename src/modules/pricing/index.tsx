import React from 'react';

// styles
import styles from './styles.module.scss';

// interfaces
interface PricingProps {
    containerRef?: React.RefObject<HTMLDivElement>
}

// main
const Pricing = ({ containerRef }: PricingProps): JSX.Element => {
    return (
        <div className={styles.container} ref={containerRef}>
            <h3>Bảng giá chi tiết</h3>

            <div className={styles.table}>
                <div className={styles.col}>
                    <div className={`${styles.headCell} ${styles.leftCell}`}></div>
                    <div className={styles.leftCell}>Xe 4 chỗ</div>
                    <div className={styles.leftCell}>Xe 7 chỗ</div>
                    <div className={styles.leftCell}>Xe 16 chỗ</div>
                    <div className={styles.leftCell}>Xe 29 chỗ</div>
                    <div className={styles.leftCell}>Xe 45 chỗ</div>
                </div>
                <div className={styles.col}>
                    <div className={styles.headCell}>50km đầu tiên (vnd/km)</div>
                    <div className={styles.cell}>---.000</div>
                    <div className={styles.cell}>---.000</div>
                    <div className={styles.cell}>---.000</div>
                    <div className={styles.cell}>---.000</div>
                    <div className={styles.cell}>---.000</div>
                </div>
                <div className={styles.col}>
                    <div className={`${styles.headCell} ${styles.rightCell}`}>Sau 50km đầu tiên (vnd/km)</div>
                    <div className={styles.rightCell}>---.000</div>
                    <div className={styles.rightCell}>---.000</div>
                    <div className={styles.rightCell}>---.000</div>
                    <div className={styles.rightCell}>---.000</div>
                    <div className={styles.rightCell}>---.000</div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;