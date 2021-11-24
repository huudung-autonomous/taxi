import React from 'react';

// styles module
import styles from './styles.module.scss';

// interfaces
interface ICardProps {
    className?: string,
    children: React.ReactNode,
    title: string,
    description?: string,
}

// main
const Card = ({className, children, title, description}: ICardProps): JSX.Element => {
    return (
        <div className={[styles.container, className].join(' ')}>
            <h3 className={styles.title}>{title}</h3>
            {
                description
                && (
                    <p className={styles.description}>{description}</p>
                )
            }
            <div className={styles.main}>{children}</div>
        </div>
    );
};

export default Card;