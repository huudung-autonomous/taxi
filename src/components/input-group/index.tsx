import React from 'react';
import Input, { IInputProps } from '../core/input';

// styles module
import styles from './styles.module.scss';

// interfaces
interface IInputGroupProps extends IInputProps {
    label: string,
    type?: 'text' | 'number' | 'password'
}

// main
const InputGroup = (props: IInputGroupProps): JSX.Element => {
    const { label, type, ...ogInputProps } = props;

    return (
        <div className={styles.container}>
            <label>{label}</label>
            <Input type={type} {...ogInputProps} />
        </div>
    );
};

export default InputGroup;