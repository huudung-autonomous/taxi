import React from 'react';
import Button from '../button';

// styles
import styles from './styles.module.scss';

// interface
interface ReCallProps {
    onClick?: () => void,
    title?: string,
    buttonLabel?: string,
    backgroundColor?: string,
    className?: string,
}

// main
const ReCall = ({ className, onClick, title, buttonLabel, backgroundColor }: ReCallProps): JSX.Element => {
    return (
        <div className={`${styles.container} ${className}`} style={{ backgroundColor }}>
            <h3>{title || 'Tận hưởng ngay dịch vụ chuyên nghiệp và nhiều ưu đãi'}</h3>

            <div>
                <Button onClick={onClick}>{buttonLabel || 'Bắt đầu đặt xe'}</Button>
            </div>
        </div>
    );
};

export default ReCall;