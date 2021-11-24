import React from 'react';

// modules
import Button from '../button';

// styles
import styles from './styles.module.scss';

// interfaces
interface HeaderProps {
    onClickAction?: () => void
}

// main
const Header = ({onClickAction}: HeaderProps): JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <div className={styles.name}>
                    <span>Taxi</span>
                    <span>hoanglinh</span>
                </div>
                <div className={styles.slogan}>
                    Chuyên đường dài, liên tỉnh
                </div>
                <div className={styles.slogan}>
                    <span className={styles.phone}>091.234.5678</span>
                </div>
            </div>

            <Button onClick={onClickAction}>Đặt xe ngay</Button>
        </div>
    );
};

export default Header;