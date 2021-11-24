import React from 'react';

// components
import Button from '../button';
import Booking from '../booking';

// resources
import PhoneIcon from '../../resources/images/phone-call.png';

// styles
import styles from './styles.module.scss';

// interfaces
interface FooterProps {
    onClickBooking?: () => void,
    onClickIntro?: () => void,
    onClickPrice?: () => void,
    onClickNews?: () => void,
}

// main
const Footer = ({
    onClickBooking,
    onClickIntro,
    onClickPrice,
    onClickNews,
}: FooterProps): JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <div className={styles.name}>Taxihoanglinh</div>

                <div className={styles.phone}>
                    <a href="tel:+84912345678">
                        <img src={PhoneIcon} alt="Phone"/>
                        091.234.5678
                    </a>
                </div>
            </div>

            <div className={styles.menu}>
                <Button onClick={onClickBooking}>Đặt xe</Button>
                <Button onClick={onClickIntro}>Giới thiệu</Button>
                <Button onClick={onClickNews}>Thông tin khuyến mại</Button>
            </div>

            <div className={styles.slogan}>
                ĐC: Nguyễn Duy Trinh, Quận 9, TP Thủ Đức.
            </div>

            <div className={styles.bookingContainer}>
                <Booking />
            </div>
        </div>
    );
};

export default Footer;