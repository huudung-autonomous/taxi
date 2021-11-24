import React from 'react';

// resources
import PhoneIcon from '../../resources/images/phone-call.png';
import ChatIcon from '../../resources/images/chat.png';

// styles
import styles from './styles.module.scss';

// main
const Call = (): JSX.Element => {
    return (
        <>
            <a className={styles.callContainer} href="tel:+84912345678">
                <img src={PhoneIcon} alt="Phone" />
                Gọi ngay
            </a>
            <a className={styles.zaloContainer} target="_blank" href="https://zalo.me/0973987047" rel="noreferrer">
                <img src={ChatIcon} alt="Chat" />
                Chat Zalo
            </a>
        </>
    );
};

export default Call;