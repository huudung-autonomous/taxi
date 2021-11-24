import React from 'react';
import styles from './styles.module.scss';

interface ILoaderProps {
    className?: string,
}

const Loader = ({className}: ILoaderProps): JSX.Element => {
    return (
        <div className={[styles.container, className].join(' ')} />
    );
};

export default Loader;