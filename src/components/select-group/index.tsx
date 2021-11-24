import React from 'react';
import Select, { ISelectProps } from '../select';

// styles module
import styles from './styles.module.scss';

// interfaces
interface ISelectGroupProps extends ISelectProps {
    className?: string,
    label: string,
}

// main
const SelectGroup = (props: ISelectGroupProps): JSX.Element => {
    const { className, label, ...ogSelectProps } = props;

    return (
        <div className={[styles.container, className].join(' ')}>
            <label>{label}</label>
            <Select className={styles.select} {...ogSelectProps} />
        </div>
    );
};

export default SelectGroup;